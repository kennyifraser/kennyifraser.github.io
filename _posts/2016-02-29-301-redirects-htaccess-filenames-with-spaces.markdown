---
# categories: 
# published: false
# tags: 
# updated: 2016-03-28 11:00:00
date: 2016-02-29 10:00:00
layout: post
permalink: htaccess/301-redirect-filenames-with-spaces
title: "301 redirects in .htaccess for filenames with spaces"
---
I was working on a site where pages had originally been named using an old WYSIWYG editor, with spaces in the filenames.  These were being served up OK in the browser, which URL-encoded the space (as an [unsafe ASCII character](http://www.w3schools.com/tags/ref_urlencode.asp)) to *%20* :

{% highlight html %}
http://example.com/old%20filename%20with%20spaces.htm
{% endhighlight %}

However when using this URL-encoded format in the *.htaccess* file, the server generated an error for the *301 Redirect* lines: 

{% highlight shell %}
Redirect 301 /old%20filename%20with%20spaces.htm /nice-clean-new-url/
{% endhighlight %}

The correct way to redirect filenames with spaces in *.htaccess* is by leaving the spaces, and quoting the filename:

{% highlight shell %}
Redirect 301 "/old filename with spaces.htm" /nice-clean-new-url/
{% endhighlight %}