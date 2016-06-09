---
# categories: 
# published: false
# tags: 
# updated: 2016-06-08 12:00:00
date: 2016-06-09 13:00:00
layout: post
permalink: productivity/convert-markdown-files-to-pdf
title: "Quickly convert Markdown files to pdf"
---

These days I try and use [Markdown](//daringfireball.net/projects/markdown/) wherever possible to apply a basic level of formatting to text content, quickly and easily.  The content for this [Jekyll](https://jekyllrb.com/)-based site is mostly written in Markdown.  I use it for formatting template-based transactional emails, with Adam Pritchard's [Markdown Here](https://github.com/adam-p/markdown-here) Chrome extension.  It's also good for content creation in [Statamic](https://v1.statamic.com/learn/core-concepts/content-files).  

Adam's written a [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet) and there are other guides for Markdown usage on [Github](https://help.github.com/articles/basic-writing-and-formatting-syntax/) and [Stack Overflow](http://stackoverflow.com/editing-help). 

A Very Useful Thing would be to quickly generate a pdf from a Markdown file (normally with file extension *.md* or *.markdown*).  This would allow generation of an easily shareable, formatted text document in a simple text editor, without the requirement for something heavyweight like Microsoft Word.  If you use [Node](https://nodejs.org/en/) on your local machine, it's accomplishable using Alan Shaw's [markdown-pdf Node module as a standalone terminal program](https://github.com/alanshaw/markdown-pdf#cli-interface).

Install your local module globally:

{% highlight bash %}
npm install -g markdown-pdf 
{% endhighlight %}

Navigate to the directory in the command line containing your Markdown file, and generate the pdf using the Markdown converter:

{% highlight bash %}
$ cd yourcontainingdirectory 
$ markdown-pdf yourmarkdownfile.md  
{% endhighlight %}

That's it.

Here's an example of a Markdown text file:

![original Markdown text file](/img/original-markdown-file.png)

And here's what the resulting pdf looks like:

![resulting formatted pdf file](/img/resulting-pdf-file.png)

There are a number of configurable options, and of course the module can alternatively be called as part of a process on a server supporting Node.