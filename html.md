---
layout: default
title: HTML
permalink: /html/
---

### Declarations

#### Use semantically-appropriate markup

When constructing a web page, avoid simply using `div`s and `span`s. Try and
use the HTML elements that most accurately reflect the content of the page.
This improves the page's accessibility for screen readers, search engine
optimization (SEO), and leads to cleaner markup. For example, the following:

```html
<!-- BAD PRACTICE -->
<div id="title">Joe Gaucho's Site</div>
<div id="navigation">
    <div class="nav-link"><a href="index.html">Home</a></div>
    <div class="nav-link"><a href="portf.html">Portfolio</a></div>
</div>
<div id="content">Welcome to my personal website!</div>
```

Should be rewritten to more accurately reflect the semantic meaning of the
content:

```html
<!-- GOOD PRACTICE -->
<h1>Joe Gaucho's Site</h1>
<ul id="navigation">
    <li><a href="index.html">Home</a></li>
    <li><a href="portf.html">Portfolio</a></li>
</ul>
<div id="content">Welcome to my personal website!</div>
```

Specifically, note the use of the `h1` header element to clearly denote the
main title of the website and the use of a `ul` unordered list to semantically
represent the "list" of navigation links.

The semantics could be improved further through the use of HTML5 elements:

```html
<!-- GOOD PRACTICE -->
<header>
    <h1>Joe Gaucho's Site</h1>
</header>
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="portf.html">Portfolio</a></li>
    </ul>
</nav>
<section>Welcome to my personal website!</section>
```

Furthermore, elements that have only visual meaning (e.g, `basefont`, `big`,
`center`, `font`, and `hr`) should not be used.

#### Minimize markup

You should only use the HTML markup that you need. In other words, avoid the
"unnecessary wrapper" syndrome:

```html
<!-- BAD PRACTICE -->
<div class="post-outer-wrapper">
    <div class="post-inner-wrapper">
        <div class="post-title-wrapper">
            <div class="post-title">
                <h3>My First Blog Post</h3>
            </div>
        </div>
        <div class="post-body-wrapper">
            <div class="post-body">
                <p>This is my first blog post.</p>
            </div>
        </div>
    </div>
</div>
```

All of these "wrapper" `div`s add to the weight of the document and also make
the page harder to maintain and update. Always start with only the bare,
essential markup that accurately describes the semantic structure of the web
page:

```html
<!-- GOOD PRACTICE -->
<h3>My First Blog Post</h3>

<p>This is my first blog post.</p>
```

Only include additional elements if absolutely required.

#### Validate your markup

It's not always feasible to have fully W3C-compliant markup. However, it is
strongly recommended that you strive for it. Use the
[W3C Validator](https://validator.w3.org/) to ensure the validity of your
markup.

### Frames

#### Avoid iframes

`iframe`s allow web developers to contain a web page in a small window within
another web page. `iframe`s have legitimate uses, such as web-based rich text
editors. However, `iframe`s are often slow and difficult to reliably interact
with through JavaScript. Thus, `iframe`s should be avoided.

#### Never use frames

Frames used to be a popular way of structuring web pages: different pages
could be combined into a single page:

```html
<!-- BAD PRACTICE -->
<frameset cols="25%,75%">
    <frame src="navigation.html" />
    <frame src="main.html" />
</frameset>
```

However, frames create a number of problems: each "frame" can be viewed
individually and navigating through frames often breaks the functionality of
the browser's back button. Thus, frames should never be used.

#### Use `title` Attribute

When using `iframe`s (or legacy sites with `frameset` and `frame`), use the
`title` attribute to describe the contents of the frame for assistive
technologies.

### Links

#### Use descriptive link text

When creating a link (`a` element), don't use "click here" or a URL for the
link text:

```html
<!-- BAD PRACTICE -->
<a href="/forms/payment-agreement.pdf">Click here</a> to download the form

<!-- BAD PRACTICE -->
Download the form at: <a href="/forms/payment-agreement.pdf">/forms/payment-agreement.pdf</a>
```

Instead, provide a concise description of the resource for the link text:

```html
Download the <a href="/forms/payment-agreement.pdf">Payment Agreement Form</a>
```

#### Use the same destination for the same link text

Links on the same page with the same text should point to the same destination.
For example, if two links use the text "Visit Us" on a page, both of these
links should point to the same URL.

### Tables

#### Don't use tables for layout

Web designers used to rely on tables to provide a structured, grid-based layout
framework. However, this technique has fallen out of favor because table markup
does not accurately reflect the semantics of the content. Only use tables for
tabular data.

#### Use `caption`s and summaries

With the `caption` element, you can provide a descriptive heading for a table,
summarizing the table's data:

```html
<table>
    <caption>Department Contact Information</caption>
    <!-- Table Content -->
</table>
```

This is especially useful for users with screen readers, who can read this
`caption` element without leafing through a table's rows and columns to
understand its content and purpose.

Note that the `caption` element is visible to all users. If the purpose of the
table is clear to users who can see the table and you only want to provide a
summary for users who can not see the table, use the `summary` attribute:

```html
<table summary="Column one display's the name of the person, column two displays their phone number">
    <!-- Table Content -->
</table>
```

If the approaches above do not meet your needs, the W3C's Web Accessibility
Initiative provides [alternative methods](https://www.w3.org/WAI/tutorials/tables/caption-summary/).

#### Use `th` to provide table headers

Use the `th` element, with the `scope` attribute, to indicate the header of a
column within a table:

```html
<table>
    <caption>Where Students Live</caption>
    <thead>
        <tr>
            <th scope="col">Location</th>
            <th scope="col">Percentage of Students</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>UCSB Residence Halls</td>
            <td>23%</td>
        </tr>
        <tr>
            <td>UCSB Apartments</td>
            <td>11%</td>
        </tr>
    </tbody>
</table>
```

For more information on how to use the `th` element in irregular scenarios,
refer to the W3C's Web Accessibility Initiative [Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/).

### Images

<!-- -->

#### Always specify a meaningful `alt` attribute for every image

If you do not specify an `alt` ("alternate text") attribute for your images,
screen readers will not be able to provide users with information about the
image:

```html
<img src="/images/horse.png" alt="A galloping horse in a field">
```

While you should avoid using image elements purely for structural and styling
purposes (e.g. "spacer" images), if you <em>must</em> include these elements,
provide a blank value for the image's `alt` attribute so that the screenreader
will ignore the image entirely:

```html
<img src="/images/spacer.gif" alt="">
```

If you completely remove the attribute, a screenreader may read the image's
actual filename.

#### Prefer text over images of text

Whenever possible, use actual text instead of images of text, styling the text
as desired with CSS.
