---
# categories: 
# published: false
# tags: 
date: 2016-02-13 21:00:00
layout: post
permalink: github/setting-up-a-custom-domain-on-github-pages
title: "Setting up a custom domain on GitHub Pages"
updated: 2020-05-30 07:30:00
---

What I wanted was *https://kennyfraser.com* to be the definitive URL of this site, and [https://www.kennyfraser.com](http://www.kennyfraser.com/) to redirect there.

[Using the instructions here](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site) I had to [add a CNAME *file* to my GitHub User repository](https://help.github.com/articles/setting-up-your-pages-site-repository/) as well as [configure a CNAME *record*](https://help.github.com/articles/setting-up-a-custom-subdomain/) at the DNS service provider (Fasthosts).

The GitHub CNAME file contents are just:

{% highlight html %}
kennyfraser.com
{% endhighlight %}

**Don't make this mistake** in the DNS provider's CNAME records:

![CNAME records at Fasthosts](/img/CNAME-records-fasthosts-github-pages.png)

Using a blank hostname in the CNAME records can mess up the MX routing for email, and possibly other services. 

The *www* Host Name CNAME record points to my *username.github.io*. This is the recommended [custom subdomain](https://help.github.com/en/github/working-with-github-pages/about-custom-domains-and-github-pages) for best performance. 

Two [A Records for the apex *(non-www)* domain](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site) with Github IP addresses are also necessary.  GitHub Pages [automatically creates a redirect](https://help.github.com/articles/setting-up-an-apex-domain-and-www-subdomain/) between the *www* and *non-www* versions of the domain, depending on the contents of the CNAME *file*.