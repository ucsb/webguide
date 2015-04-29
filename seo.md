---
layout: default
title: Search Engine Optimization
permalink: /seo/
---

To help search engine crawlers properly index your website, include a
**robots.txt** and **sitemap.xml** in the root directory of your website.

### robots.txt

The **robots.txt** file is a simple text file that instructs the search engine
how to crawl a website. More specifically, the robots.txt specifies which
directories or files search engine crawlers should *not* index. For
example:

```bash
User-agent: *
Disallow: /images
Disallow: /scripts
Disallow: /style
```

Please note that robots.txt can only provide *recommendations* to search engine
crawlers; crawlers may still ignore these instructions. Thus, do not use
robots.txt to secure sensitive information. For more information on how to
create a robots.txt file, read the
[Web Robots Pages](http://www.robotstxt.org/robotstxt.html).

### sitemap.xml

A **sitemap.xml** can also be added to the root directory to provide search
engine crawlers with a XML version of your site's structure. This sitemap can
be referenced from your robots.txt:

```bash
User-agent: *
Disallow: /images
Disallow: /scripts
Disallow: /style
Sitemap: http://www.example.ucsb.edu/sitemap.xml
```

For more information on creating a **sitemap.xml**, visit
[sitemaps.org](http://www.sitemaps.org/).
