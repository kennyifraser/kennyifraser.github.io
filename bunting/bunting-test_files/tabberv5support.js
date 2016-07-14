// Tabber V5 Support V5.04
// extend existing SD routine  to set up tabber after page re-ordered
var dp_tabber_HideLoadingDialog = HideLoadingDialog;
HideLoadingDialog = function() {
	dp_tabber_HideLoadingDialog();
	setuptabber();
	tabberresponsiveheaders();
};

function setuptabber(){
	// only process elements that may contain tabs
	
	$(dp_tabprocessselector).not(dp_tabnotselector).each(function(idx){
		// any extra tabs
		var extratabcode = new Object();
		var extratabs = '';
		var tabid = $(this).attr('data-tabid');
		if ( tabid )
			{
			$( ".dp_extra_tab[data-tabid='" + tabid + "']" ).each(function(idx){
				var extratabid = 'extratab_' + tabid + '_' + idx;
				extratabcode[extratabid] = $(this);	// save tab content (including events, etc) for later
				extratabs += '{' + $(this).attr('data-tabname') + '}' + '<div id="' + extratabid + '"></div>'; // tab with placemarker DIV
				});
			}

		var bits = $(this).html().match(/^([\s\S]*?)(\{.+?\}[\s\S]*)$/);
		if ( (bits == null) && (extratabs != '') )	// only have extra tabs so add in at end of description
			{
			bits = ($(this).html() + extratabs).match(/^([\s\S]*?)(\{.+?\}[\s\S]*)$/);
			extratabs = '';
			}
		if ( bits != null )	// is there at least one tab
			{
			var anc = 'tsr-' + idx;		// create unique id
			var panecount = 0; var tabhtml = ''; var tabtext = ''; var html = ''; var after = '';
			var before = bits[1];
			var tabcode = bits[2];
			bits = tabcode.match(/([\s\S]*?)\{\}([\s\S]*)/)
			if ( bits != null )	// optional {} signifies end of tabbed text
				{
				tabcode = bits[1];
				after = bits[2];
				}
			tabcode += extratabs;	
			if ( ! $(this).hasClass('hidetabs') )
				{
				if ( $(this).hasClass('untabbed') ) 
					{
					html = tabcode.replace(/\{(.*?)\}/g, dp_untabbedprefix + '$1' + dp_untabbedsuffix);
					}
				else	// normal Tabber
					{						
					html = dp_tabprefix + '<div class="tabber"><div id="tabber_' + anc + '" class="dp_tab_widget"><ul class="tabnav">';
					bits = tabcode.match(/\{([\s\S]*?)\}([\s\S]*)/);
					while ( bits != null )
						{
						var tabname = bits[1];
						tabtext = bits[2];
						tabcode = '';
						bits = tabtext.match(/([\s\S]*?)(\{[\s\S]+\}[\s\S]*)/)
						if ( bits != null )	// more tabs?
							{
							tabtext = bits[1];
							tabcode = bits[2];
							}
						// output current tab
						html += '<li><a href="#tab_' + anc + '_' + panecount + '"><span>' + tabname + '</span></a></li>';
						tabhtml += '<div id="tab_' + anc + '_' + panecount + '" class="tabdiv"><div class="tabinner">' + tabtext + '</div></div>';			// save the contents of the tab for later
						panecount++;
						bits = tabcode.match(/\{([\s\S]*?)\}([\s\S]*)/);
						}
					html += '</ul>';
					html += tabhtml + '</div></div>' + dp_tabsuffix;			// output all the tab text
					}
				}
			
			// if the tabs were within a P or SPAN tag, end that tag so embedded HTML works
			var tagname = $(this).prop('tagName');
			var tagclass = $(this).attr('class');
			if ( tagname == 'P' )
				{
				before += '</p>';
				after = '<p class="' + tagclass + '">';
				}
			else if ( tagname == 'SPAN' )
				{
				before += '</span>';
				after = '<span class="' + tagclass + '">';
				}
				
			// replace the containing tags HTML with new code	
			$(this).html(before + html + after);
			
			// now add in any extra tab code
			for ( extratabid in extratabcode )
				{
				$( "#" + extratabid ).replaceWith( extratabcode[extratabid].removeClass('dp_extra_tab').detach() ); // placemarkers replaced with saved DOM object
				}
			}
		});

	// fix BASE tag bug
	if ( $('base').length )
		{
		var base = location.href.replace(/#.*$/, '');
		$('ul>li>a[href^="#tab_"]').each(function () {
				var href = $(this).attr('href');
				$(this).attr('href', base + href);
			});
		}

	// enable tabber
	enabletabber();	
}

function tabberresponsiveheaders(){	// if headers flow onto second line, set all to full width to force accordion like effect
	if ( ! dp_tabberresponsiveheaders ) return;							// skip if not required
	$( "ul.tabnav" ).each(function(){								// each tab set
		var headers = $( "li.ui-state-default", $(this) ).css('width', 'auto');			// get this tab sets headers (and set auto width)
		var ycoord = headers.first().position().top;						// 1st headers vertical co-ord		
		headers.each(function(){								// now check to see if all on same line
			if ( $(this).position().top != ycoord )	return	headers.css('width', '100%');	// different lines found - make full width
			});
		});	
}

// Activate on DOM Ready
$(document).ready(function(){
	setuptabber();
	tabberresponsiveheaders();
	});
	
$( window ).resize(function() {
	tabberresponsiveheaders();
});	

// Tabber Extensions - enable tab that has link containing name (optionally scroll tab into view)
function enableNamedTab(anc, tabname, scrollto, scrollspeed){
	$( "#tabber_" + anc + " > ul > li > a.ui-tabs-anchor:contains('" + tabname + "')" ).first().each(function(idx){
		$(this).click();
		if ( scrollto ) $('html, body').animate({scrollTop: $(this).offset().top - scrollto}, scrollspeed);
		});
}	