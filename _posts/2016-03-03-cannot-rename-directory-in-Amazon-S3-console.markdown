---
layout: post
title: "Can't directly rename folders in the Amazon S3 Console"
date: 2016-03-03 17:30:00
permalink: amazon/cannot-rename-folders-in-the-Amazon-S3-console
# published: false
# categories: 
# tags: 
---
Strange as it may seem, you can't directly rename folders in the Amazon S3 online console:

![cannot rename folder in Amazon S3 console](/img/S3-cannot-rename-directory.png)

Files, yes, but for directories you generally need to duplicate them then delete the original.  As I had a batch to do, this was a bit of a pain.

There do seem to be wee Windows S3 clients that will offer this functionality though.  One which came to the rescue was the free [S3 Browser](http://s3browser.com/) which did the job nicely, though just one directory at a time.  Install, plug in your access credentials and away ye go.

![S3 browser](/img/S3-browser.jpg)