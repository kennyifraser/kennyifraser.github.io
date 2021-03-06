---
# categories: 
# published: false
# tags: 
date: 2016-02-12 22:30:00
layout: post
permalink: jekyll/new-portfolio-blog-site-on-github-pages
title: "This site is born from Jekyll and GitHub"
updated: 2016-03-30 21:00:00
---
I was considering moving my simple portfolio site at *kennyfraser.com* to a more streamlined publishing setup.  I wanted to get away from hand-coded HTML/CSS files and FTP, and add simple blog functionality.

After hearing good things about [Jekyll](https://jekyllrb.com/) via [CSS-Tricks](https://css-tricks.com/) and seeing how tightly coupled it can be with [GitHub Pages](https://pages.github.com/), I forged ahead.  Ironically, after beginning the installation process, my existing VPS host went down due to a power outage, taking my email forwarding with it.  No emails for more than 24 hours.  So managed to get a *lot* done...  

Jekyll seems to be the [most popular static site generator](https://www.staticgen.com/) out there at the moment.  Experience of building sites with the content management system [Statamic](http://statamic.com/) has been very good so far.  Statamic needs PHP on the server but the flat file construction looks on the surface pretty similar to Jekyll (which doesn't require any server scripting). 

Installation of Jekyll involved delving into the command line on OS X - I mainly used documentation at [Jekyll](http://jekyllrb.com/docs/installation/) and [Go Rails](https://gorails.com/setup/osx/10.11-el-capitan) (with Homebrew). [Node.js](https://nodejs.org/en/) is also needed.

The advantages pretty quicky made themselves clear:

- [Markdown](https://daringfireball.net/projects/markdown/) for writing blog posts and page content - as it should be
- easily generates a local server at *http://localhost:4000/* to preview the entire site, via the command line *jekyll serve*
- support for [Sass](http://sass-lang.com/) generation of stylesheets
- code syntax highlighting
- fast performance and no database overhead 

My GitHub command line skills aren't yet fully formed, so I'm using [GitHub Desktop](https://desktop.github.com/) to commit changes to local files then sync them with GitHub Pages.  Highlights here are:

- *everything* is easily version controllable
- quick and easy publishing with *Sync*
- speedy and reliable hosting

Will I run into limitations later? Probably. But right now things are *quick and easy* - I like it. 

[![Jekyll static site generator](/img/jekyll-logo.png)](http://jekyllrb.com/)

Eduardo Bouças has written a good [comparison of static vs dynamic site generators](https://davidwalsh.name/introduction-static-site-generators).

Treehouse has a short workshop on how to [Create a Jekyll Site on Github](https://teamtreehouse.com/library/create-a-jekyll-site-on-github). This assumes that Github is doing the work in generating your site from remote source files, rather than running a local version.