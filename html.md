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

### Headings

#### Nest headings properly

When using heading elements (`<h1>`-`<h6>`), follow two rules:

* Only use a single `<h1>` element on a page
* Lower level headings should appear below/within higher level headings (for example, a `<h3>` after an `<h2>`)

For example, the following example uses heading elements properly:

```html
<!-- GOOD PRACTICE -->
<h1>Gaucho Club</h1>

<h2>About Us</h2>

<h3>Our Mission</h3>

<h3>Our Story</h3>

<h2>Members</h2>

<h2>In the News</h2>
```

The HTML5 specification _used_ to allow for the use of multiple `<h1>`s on a
page, but this approach [never gained support](http://html5doctor.com/computer-says-no-to-html5-document-outline/).
Thus, the rules above should still be followed, even with the use of newer
HTML5 elements:

```html
<!-- GOOD PRACTICE -->
<h1>Gaucho Club</h1>

<section>
    <h2>About Us</h2>

    <h3>Our Mission</h3>

    <h3>Our Story</h3>
</section>

<h2>Members</h2>

<aside>
    <h2>In the News</h2>
</aside>
```

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

#### Provide "skip links"

To allow users with screen readers to efficiently bypass redundant navigation
on each page, provide a "skip link." To create a skip link, create an HTML
anchor at the start of the page's content and provide an
<a href="http://webaim.org/techniques/css/invisiblecontent/">invisible link</a>
to that anchor at the top of your page's HTML:

```html
<!-- GOOD PRACTICE -->
<body>

  <a class="hidden" href="#content">Skip to Content</a>

  <ul id="navigation">
    <!-- Navigation -->
  </ul>

  <div id="content">
    Welcome to the Department of Gauchos!
  </div>

</body>
```

#### Ensure "read more" links are accessible

When providing a "read more" link for content, ensure that assistive
technology users can parse the connection between the "Read More" link and its
parent content by providing an `aria-labelledby` attribute:

```html
<!-- GOOD PRACTICE -->
<h2 id="headline">Gauchos Win Again</h2>

<p>The Gauchos have done it again! <a href="/gauchos-win-again" aria-labelledby="headline">Read More</a></p>
```

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

Whenever possible, use actual text instead of an image of text, styling the text
as desired with CSS.

In situations where you must use an image of text instead of actual text (for example, a logo),
you can use **image replacement** to replace a bare HTML element with an image
using CSS.

For example, instead of the following:

```html
<h1><img src="logo.jpg" alt="Website Name"></h1>
```

The bare text element can be used:

```html
<h1>Website Name</h1>
```

And the text can be _replaced_ with the image using CSS:

```css
h1
{
    background: url('logo.jpg');
    height: 100px;
    text-indent: -9999em;
    width: 400px;
}
```

There are a number of image replacement techniques. The method described above,
which is the most popular approach, is called **Phark image replacement**.

#### Use responsive image techniques

Images are a particularly difficult challenge for responsive designs: each
individual image should shrink and scale its dimensions to fit the surrounding
responsive layout. Beyond simple dimensions, however, other aspects of the
image should also adapt, including the file size, the pixel density, and even
the art direction.

**For logos or icons**, SVGs or icon fonts should be used. Both options provide
vector-based solutions that can shrink or scale infinitely (for both dimensions
*and* pixel density) without a change in file size. Although icon fonts are
often the most convenient option, SVGs are the preferred option
for future-ready designs.

**For other images**, use the responsive `picture` element, along with the
`sizes` and `srcset` attributes, to provide a number of options that the user's
device can choose as appropriate.

### Forms

#### Always use a `label` or accessible alternative for `input` fields

Every `<input>` should have a `<label>`:

```html
<!-- GOOD PRACTICE -->
<label for="user-first-name">First Name</label>
<input type="text" name="first-name" id="user-first-name">
```

This ensures that the purpose of your `<input>` can be determined by assistive
technologies, like screen readers.

Sometimes, you may have a case where it's not practical to include a `<label>`.
For example, in a simple search form:

```html
<label for="search-terms">Search Terms</label>
<input type="text" name="search-terms" id="search-terms">
<input type="submit" value="Search">
```

In this example, it's redundant to include a `<label>` for the `<input>` where a
user enters search terms since it's _visually_ clear that a user should enter
search terms in this field.

However, you still want to include _some_ alternative to a label. Otherwise,
a user using a screen reader will not understand the purpose of the field until
they switch focus to the submit button.

In this case, you can use the `aria-label` attribute:

```html
<!-- GOOD PRACTICE -->
<input type="text" aria-label="Search Terms" name="search-terms" id="search-terms">
<input type="submit" value="Search">
```

### Icon Fonts

#### Ensure accessibility of icon fonts

When using an icon font (for example, [Font Awesome](http://fontawesome.io/)),
ensure that the purpose of the icon is also clear to users with a screen reader.
You can either include explanatory text alongside the icon:

```html
<!-- GOOD PRACTICE -->
<i class="fa fa-star"></i> Star
```

Or provide an `aria-label` attribute if the icon is standing on its own:

```html
<!-- GOOD PRACTICE -->
<i class="fa fa-bars" aria-label="Menu"></i>
```
