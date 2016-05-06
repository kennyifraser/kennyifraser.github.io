---
# categories: 
# published: false
# tags: 
updated: 2016-05-06 17:00:00
date: 2016-05-06 13:00:00
layout: post
permalink: cms/upgrading-a-statamic-site-from-v1-to-v2
title: "Upgrading a Statamic site from v1 to v2"
---
[Statamic](//statamic.com) is a flat-file, [Laravel](//laravel.com/)-based content management system built and supported by [Wilderborn](//wilderborn.com/) ([Jack McDade](//twitter.com/jackmcdade), [Jason Varga](//twitter.com/jason_varga) and [Gareth Redfern](//twitter.com/garethredfern)).  It's great to work with.  I had the opportunity to upgrade a v1 site this week, so here's my tuppence-worth.  

The Statamic v2 documentation is excellent, taking the form of [Trail Guides](//docs.statamic.com/guides) as walk-through processes, and [Reference](//docs.statamic.com/reference) for the specific ingredients.  It's written in a conversational style with a liberal sprinkling of unselfconscious humour...  

Overall it's a case of:

* setting up a clean v2 installation, which includes example content
* removing the example content and files (optional)
* transferring v1 files across in a sensible order - no database to worry about

## v2 Installation

[Getting Started With Statamic](//docs.statamic.com/guides/getting-started) walks through setting up Statamic v2.  

[Mamp Pro](//www.mamp.info/en/) was the tool of choice for my local installation.  

To configure URL rewrites, the sample *.htaccess* file should really be used so */index.php/* is removed from resulting URLs.  

The *installer.php* file can be run locally to check requirements and set up a few handy things.  This seemed to cleverly delete itself after running locally, so I had to find it again to copy it up to the production server to check that.  For the production site I'm transferring hosts to get the required *PHP >= 5.5.9* version, though this wasn't unexpected and not a big deal, with performance improvements also on offer at the new host.  *Zip archive support for updater backups* failed on production, and *always_populate_raw_post_data=-1* on both production and local.  Not to worry, for now at least.

System files can be [moved above webroot](//docs.statamic.com/reference/recipes/secure-installation) for additional security.  There's a bit of extra work there in adjusting default paths in settings files.

The one-click updater tool in v2 is a potentially great time-saving addition.

## Clear Site to Remove v2 Example Files

There's a handy wee:

{% highlight php %}
php please clear:site
{% endhighlight %}

...command line instruction to do this, with options, [best described in this video](https://vimeo.com/164430243).  It'll also create a new theme skeleton for you.

This is optional and can be done after importing your v1 site, as I did after Jack pointed out the video.  However since it wipes **all** */themes/*, */collections/* and /*pages*/ subdirectories, in retrospect I'd recommend instead:

* set up and play locally with the example files on a complete v2 site
* set up a fresh v2 site and run Clear Site before the next v1 site import step

If you don't choose to Clear Site, example content */pages/* and */collections/* subdirectory names can be prefixed with an underscore to hide but retain them for future reference.

## Moving v1 Files

[You Can Get Here From There](//docs.statamic.com/guides/upgrading-from-v1) clears a path through the undergrowth for an upgrade from v1.

The v2 Control Panel is now located at *http://yourdomain/cp/* - this nugget tucked away in the docs under *New Defaults*. So *Tools : Import* then *Import content from Statamic v1* instructs you to download an *exporter* add-on for installation into your **v1** site.  Visit the generated URL for a JSON string which can be pasted back into your v2 control panel.  The result was:

* v1 *Entries* were taken in as new v2 *Collections*
* *Pages* are transformed to their v2 equivalents 

Nice.

A few variables had to be renamed for the site to start working again - for example:

{% raw %}
{{ layout_content }} 
{% endraw %}

...becomes:

{% raw %}
{{ template_content }}
{% endraw %}

...and underscores needed removed from various variables.

The custom theme from the */themes/* directory had to be moved across manually.  The main change here was renaming *entries* in the template code:

{% raw %}
{{ entries:listing folder="example" }}...{{ /entries:listing }}
{% endraw %}

... as *collections*:

{% raw %}
{{ collection:example }}...{{ /collection:example }}
{% endraw %}

Assets can be similarly copied across from the v1 */assets/* directory to the corresponding v2 location.

---

That was it!  Up and running locally with v2.  The original v1 site wasn't enormously complicated but I guess the principles would probably remain the same if it had been.  The main process just took a couple of hours as a first attempt, and the next v1 upgrade will go a lot quicker I'm sure.

There's a high degree of integrity about Statamic that makes it very reassuring to work with, and their [Slack](//slack.com) v2 support channel is impressively active.

![Statamic](/img/statamic.png)