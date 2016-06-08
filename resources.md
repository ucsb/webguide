---
layout: default
title: Resources
permalink: /resources/
---

### JavaScript Files

The `script` elements to include a document's JavaScript files should be
placed directly before a document's closing `body` tag:

```html
<script src="script/transitions.js"></script>
</body>
</html>
```

This is because JavaScript files are a "blocking resource" that will prevent
the browser from downloading other resources on the page while downloading the
script.

### Content Delivery Networks

A *content delivery network (CDN)* is a distributed system of servers that can
be leveraged to quickly serve web resources to Users. Using a CDN to serve
popular JavaScript or CSS libraries has a number of benefits, including
decreased latency and the ability to leverage caching. The following example
serves the popular jQuery library from Google's CDN:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```

### Minified Resources

JavaScript and CSS files should be **minified**. Minification is the process of
condensing JavaScript and CSS files to only include the required content. For
example, spaces can be removed from CSS files and the names of local variables
can be shortened in JavaScript files. A number of tools exist for accomplishing
this task.

### Concatenating Resources

JavaScript and CSS files should also be **concatenated**, or combined together
into a single file. In other words, rather than referencing multiple JavaScript
files on a page, these scripts should be concatenated into a single JavaScript
file. This improves performance by reducing the number of separate
connections the browser needs to establish while loading a page.
