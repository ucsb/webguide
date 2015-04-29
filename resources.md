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
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
```

Notice that we have not included a protocol in the URL (`http` or `https`).
Protcol-less URLs will use the visitor's current protocol, allowing for
efficient caching when retrieving resources over HTTP and avoiding the errors
generated from mixing protocols when retrieving resources over HTTPS.

### Minified Resources

JavaScript and CSS files should be **minified**. Minification is the process of
condensing JavaScript and CSS files to only include the required content. For
example, spaces can be removed from CSS files and the names of local variables
can be shortened in JavaScript files. A number of tools exist for accomplishing
this task.
