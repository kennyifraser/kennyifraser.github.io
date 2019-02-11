---
# categories: 
published: false
# tags: 
# updated: 2016-03-28 11:00:00
date: 2016-03-03 17:30:00
layout: post
permalink: amazon/rename-folders-in-S3
title: "Renaming folders in Amazon S3"
---
Strange as it may seem, you can't directly rename folders in the Amazon S3 online console:

![cannot rename folder in Amazon S3 console](/img/S3-cannot-rename-directory.png)

Files yes, but directories no.  As I had a batch to do, this was a bit of a pain.

There do seem to be wee Windows S3 clients that will offer this functionality though.  One which came to the rescue was the free [S3 Browser](http://s3browser.com/) which did the job, though just one directory at a time.  Install, plug in your access credentials and away you go.

![S3 browser](/img/S3-Browser.jpg)