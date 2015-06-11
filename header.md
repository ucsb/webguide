---
layout: default
title: Header
permalink: /header/
---

All of your HTML documents should begin with the following standardized set
of elements in the header:

### Doctype

A document's doctype determines which "rendering mode" will be used to display
the document. The first line of your HTML document should be the
**HTML5 doctype** declaration:

```html
<!DOCTYPE html>
```

Using the HTML5 doctype *does not* mean that you must also use HTML5
elements within your document. This doctype is "backwards-compatible" with
older HTML and XHTML syntax.

### Document Language

Directly after the doctype declaration, include the opening `html` tag with the
`lang` attribute set to the language of the document, along with the
opening `head` tag:

```html
<html lang="en">
<head>
```

Setting the document language can have a number of benefits, including
[assisting search engines and screen readers](http://www.w3.org/TR/html4/struct/dirlang.html#adef-lang).
For languages other than English,
[view the full list of language codes](https://www.loc.gov/standards/iso639-2/php/English_list.php).

### Character Encoding

The `meta` element specifiying the character encoding should be added
*directly* after the opening `head` tag:

```html
<meta charset="utf-8" />
```

The character encoding `meta` element is inserted early in the
document because
[the HTML5 specification](https://html.spec.whatwg.org/multipage/semantics.html#charset)
explains that the `meta` tag should appear in the first 1024 bytes of the document.

Although the character encoding `meta` element should be included
regardless, the character encoding should also be specified via server-side
headers:

```
Content-Type: text/html; charset=utf-8
```

UTF-8 is the only recommended character encoding for web pages.

### Document Title

Next, add the `title` element:

```html
<title>Section Name - Department Name</title>
```

The title should be short and descriptive. Put the most salient part of the
title first. For example, use "Faculty : Department of Gaucho Studies" rather
than "Department of Gaucho Studies : Faculty," so that the most distinguishing
part of the title ("Faculty") will be visible to the user.

### Document Description

The description `meta` element is often used by search engines to describe
your document:

```html
<meta name="description" content="The UCSB News Page features the
latest news and press releases from the University of California,
Santa Barbara." />
```

### CSS Stylesheets

Next, include your CSS stylesheets:

```html
<link href="style/main.css" type="text/css" rel="stylesheet" />
```

### Print Stylesheet

To optimize a website for printing, provide an alternate print stylesheet that
strips unnecessary visual elements from the page:

```html
<link href="css/print.css" rel="stylesheet" type="text/css" media="print" />
```

### Internet Explorer Stylesheet

Depending on the needs of your website and audience, you may want to include a
stylesheet specifically catered towards an older, less modern
standards-compliant version of Internet Exporer. This can be accomplished
through [conditional comments](https://msdn.microsoft.com/en-us/library/ms537512%28v=vs.85%29.aspx),
a cleaner alternative than CSS hacks. The following snippet targets versions
of Internet Explorer less than 8:

```html
<!--[if lte IE 8]>
  <link href="style/ie.css" rel="stylesheet" type="text/css" />
<![endif]-->
```

While a separate stylesheet is the most straightforward solution, please note
that a separate stylesheet targeted by conditional comments can have a negative
performance impact in Internet Explorer. An alternative solution is to use the
conditional comments to add CSS classes to your `html` element:

```html
<!--[if lt IE 7]> <html class="lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html> <!--<![endif]-->
```

### No JavaScript Stylesheet

You may also want to include a stylesheet targeting users without JavaScript
enabled:

```html
<noscript>
  <link href="css/noscript.css" rel="stylesheet" type="text/css" />
</noscript>
```

For an alternative method that doesn't rely on an extra CSS resource, include a
[version of Modernizr with the "Add CSS Classes" option enabled](http://modernizr.com/download/#-shiv-cssclasses)
and then add a "no-js" class to the `html` element of your website:

```html
<html class="no-js">
```

If JavaScript is enabled, the Modernizr script will replace all instances of
the "no-js" CSS class with a "js" CSS class, allowing you to target users with
or without JavaScript enabled via CSS.

In general, however, a user should be able to interact with a document
*without* JavaScript; JavaScript should merely progressively enhance the
experience.

### HTML5 Shim

If you are using HTML5 elements within your page, keep in mind that Internet
Explorer versions 8 and earlier will not apply CSS styling to these elements
unless you force the browser to recognize these elements via including a
JavaScript snippet within the `head` of the document:

```javascript
document.createElement('header');
document.createElement('nav');
// ...continue calling document.createElement on all new HTML5 elements
```

This small snippet of JavaScript is called a "HTML5 Shim"
(also sometimes called a "HTML5 Shiv"). The
[base build of Modernizr](http://modernizr.com/download/#-printshiv)
includes this HTML5 Shim by default:

```html
<script src="script/modernizr.js"></script>
```

In most cases, this is the *only* script that should be included in the
`head` of your document since JavaScript files are a "blocking resource" that
will prevent the browser from downloading other resources on the page while
downloading the script.

### Header Example

The following example summarizes the above suggestions:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />

    <title>Document Title</title>
    <meta name="description" content="Description of document" />

    <link href="css/main.css" type="text/css" rel="stylesheet" />
    <!--[if lte IE 8]>
      <link href="css/ie.css" rel="stylesheet" type="text/css" />
    <![endif]-->
    <noscript>
      <link href="css/noscrpt.css" rel="stylesheet" type="text/css" />
    </noscript>

    <script src="js/modernizr.js"></script>
</head>
<body>
```

Alternatively, you could use the CSS-based approaches to targeting users with
older versions of Internet Explorer or JavaScript disabled:

```html
<!DOCTYPE html>
<!--[if lt IE 7]>
  <html lang="en" class="no-js lt-ie9 lt-ie8 lt-ie7">
<![endif]-->
<!--[if IE 7]> <html lang="en" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html lang="en" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8" />

    <title>Document Title</title>
    <meta name="description" content="Description of document" />

    <link href="css/main.css" type="text/css" rel="stylesheet" />
    <script src="js/modernizr.js"></script>
</head>
<body>
```
