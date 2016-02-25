---
layout: post
title: "Setting up a custom domain on GitHub Pages"
date: 2016-02-13 21:00:00
permalink: github/setting-up-a-custom-domain-on-github-pages
# published: false
# categories: 
# tags: 
---
What I wanted was *http://kennyfraser.com* to be the definitive URL of this site, and [http://www.kennyfraser.com](http://www.kennyfraser.com/) to redirect there.

[Using the instructions here](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) I had to [add a CNAME *file* to my GitHub User repository](https://help.github.com/articles/setting-up-your-pages-site-repository/) as well as [configure a CNAME *record*](https://help.github.com/articles/setting-up-a-custom-subdomain/) at the DNS service provider (Fasthosts).

The GitHub CNAME file contents are just:

{% highlight html %}
kennyfraser.com
{% endhighlight %}

This is what eventually worked in the DNS provider's records:

![CNAME records at Fasthosts](/img/CNAME-records-fasthosts-github-pages.png)

Both blank and *www* Host Names point to my *username.github.io* and neither appear in the A records. As far as I'm aware, these are both [*custom subdomains* (for best performance) and not *apex domains*](https://help.github.com/articles/about-custom-domains-for-github-pages-sites/) as they're configured through CNAME and not A records.  

GitHub Pages [automatically creates a redirect](https://help.github.com/articles/setting-up-an-apex-domain-and-www-subdomain/) between these *www* and *non-www* versions of the domain, depending on the contents of the CNAME *file*.