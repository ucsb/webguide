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
<meta charset="utf-8">
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

Also be sure your text editor is set to UTF-8.

UTF-8 is the only recommended character encoding for web pages.

### Document Title

Next, add the `title` element:

```html
<title>Document Title - Site Name</title>
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
Santa Barbara.">
```

### CSS Stylesheets

Next, include your CSS stylesheets:

```html
<link href="css/main.css" rel="stylesheet">
```

### No JavaScript Stylesheet

You may also want to include a stylesheet targeting users without JavaScript
enabled:

```html
<noscript>
  <link href="css/noscript.css" rel="stylesheet">
</noscript>
```

In general a user should be able to interact with a document
*without* JavaScript; JavaScript should merely progressively enhance the
experience.

### Header Example

The following example summarizes the above suggestions:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Document Title - Site Name</title>

    <meta name="description" content="Description of document">

    <link href="css/main.css" rel="stylesheet">

    <noscript>
      <link href="css/noscript.css" rel="stylesheet">
    </noscript>
</head>
<body>
```
