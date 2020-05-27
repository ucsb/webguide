---
layout: default
title: CSS
permalink: /css/
---

As a general rule of thumb, the content of your website should have a logical
flow regardless of any styling. In other words, a user who has disabled CSS
should still be able to understand your website's content.

More specifically, *websites should not convey information by color alone*.
This is especially important for users who are color blind or who use a screen
reader.

CSS techniques and technologies are evolving rapidly. Website developers should
try to understand the tradeoffs involved with their choices (loading one vs. many
stylesheets, performance vs. organization, basic CSS vs. minified/compressed/compiled
CSS). Website developers may want to consider using stylesheet minifiers, compilers,
or other technologies ([Less](http://lesscss.org/), [Sass](http://sass-lang.com/),
[Compass](http://compass-style.org/), etc.) to make their CSS more consistent.

There may be inconsistencies between how the various browsers interpret CSS and
display your website to users. This could be a result of a lack of support for
certain CSS properties as well as conflicting or inconsistent implementations of
CSS properties. You will need to test in the various browsers to ensure that your
website design is [cross-browser compatible](/browsers/).

### Declarations

#### Use shorthand properties

Shorthand properties refer to combining multiple CSS property declarations
into a single CSS property. Not only do shorthand properties reduce the size
of a CSS file, but they also make CSS more readable.

```css
/* BAD PRACTICE! */
#content-wrapper
{
    background-color: #FFFFFF;
    background-image: url("/images/content_upper.png");
    background-repeat: no-repeat;
    background-position: center top;
    clear: both;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
    padding-top: 10px;
    width: 661px;
}
```

This long rule declaration can be rewritten as:

```css
/* GOOD PRACTICE */
#content-wrapper
{
    background: #FFF url("/img/content_upper.png") no-repeat center top;
    clear: both;
    margin: 0 0 20px 0; /* Top, Right, Bottom, Left */
    padding-top: 10px;
    width: 661px;
}
```

Note the use of the shortened hex code (`#FFF` instead of `#FFFFFF`) and the
shortened zero pixel dimensions (`0` instead of `0px`).

#### Always use external stylesheets

Always place CSS in an external stylesheet linked to a web page within the
document head. These external stylesheets can be cached by the browser and
also uphold the separation of presentation and content principle:

```html
<!-- GOOD PRACTICE -->
<head>
    <title>Hello World</title>
    <link rel="stylesheet" href="screen.css" type="text/css" media="screen">
    <link rel="stylesheet" href="print.css" type="text/css" media="print">
</head>
```

Avoid placing CSS rules in a style block directly within the page:

```html
<!-- BAD PRACTICE! -->
<style type="text/css">

    .source-list
    {
        font-size: 0.75em;
        padding: 20px 0 0 0;
    }

</style>
```

Similarly, avoid using inline styles:

```html
<!-- BAD PRACTICE! -->
<a href="#" style="color: #C00;">Red Link</a>
```

These inline styles can not be overridden by standard CSS properties without
the use of the `!important` keyword. This also clouds your markup file with
presentation information, violating the separation of content and presentation
principle.

An exception to this rule is when elements are being manipulated by
client-side scripting. However, even in this situation, the designer and
JavaScript developer should attempt to contain the CSS properties in a class
and then programmatically assign this CSS class to an element.

Another exception to this rule is the practice of putting the most important
CSS for the page within an inline style block to improve the performance of the
page. This practice is referred to as "inlining critical CSS," and should be
employed carefully, using performance metrics to measure the impact of the change.

#### Don't use `!important`

The `!important` keyword can be used to add "weight" to a CSS declaration. As
an example, imagine you have the following HTML with inline styling:

```html
<!-- BAD PRACTICE! -->
<div>
    <p>Within a div</p>
</div>

<p style="color: red;">Outside a div</p>
```

Imagine that you discover you need to edit the color of the `<p>`s, so you add some CSS:

```css
p
{
    color: blue;
}
```

This will only work for the `<p>` within the `<div>` because an inline
declaration will always carry more precedence than a regular CSS declaration.
So, to get around this issue, you add `!important`:

```css
/* BAD PRACTICE! */
p
{
    color: blue !important;
}
```

Now your `<p>` will have blue text. However, you realize that you want
`<p>`s that are within `<div>`s to have a different text color than regular
`<p>`s, so you add another CSS declaration:

```css
div p
{
    color: green;
}
```

However, this won't do anything because your earlier `!important` declaration
overrides this declaration. To fix this problem, you'll need to add `!important`
to this rule. As you can see, our CSS selector hierarchy is now becoming
needlessly convoluted.

Furthermore, using `!important` makes it more difficult for users to apply
their own user-defined stylesheets (stylesheets authored by the user of the
browser to customize web pages for accessibility and other reasons), since they
must now use `!important` themselves to fully override styling rules.

For all of these reasons, you should avoid using the `!important` keyword.

#### Don't use `@import`

As an alternative to using `link` to import stylesheets, you can also
import a stylesheet from within a stylesheet using the `@import` rule:

```css
/* BAD PRACTICE! */
@import url("grid.css");
```

However, this is less performant than `link` as browsers will often end
up downloading imported stylesheets sequentially, rather than in parallel as
with the link tag. Due to these easily avoidable performance issues, don't use
the `@import` rule.

#### Avoid hacks

Avoid using CSS "hacks" that target specific browsers in order to fix
browser-specific problems:

```css
/* BAD PRACTICE! */
* html
{
    /* These styles only apply to IE6 */
}
```

In a general, if you need to use a hack, this is a hint that either your CSS
rules or your markup is too convoluted. Try reformatting one or the other
using standard CSS techniques first and only use a hack as a last resort.

#### Use relative over absolute units

Prefer _relative_ units (such as `em`, `%`, or `rem`) over _absolute_ units
(such as `px`).

By using relative units, elements on the page are better suited for adapting
to various screen sizes and container widths. Furthermore, using relative units
provides a smoother experience for users zooming in and out of your web pages
using a browser's zooming features.

#### Don't generate content with CSS

Text content can be added to a page using the `content` property (with the
`::before` and `::after` pseudo-elements). However, this content may or may not
be read by a screen reader.

Given this ambiguity, you should never generate essential content using CSS.

Furthermore, since some screen readers _do_ read content generated with CSS,
you should also avoid generating non-essential content as well (for example,
inserting a "double arrow" symbol next to links), since this content will be
unnecessarily read to a user with a screen reader.

Altogether, you should avoid generating _any_ content with CSS.

#### Use the "print" media query

A "print" media query can be used to change the display of your website when
the user prints it:

```css
/* GOOD PRACTICE! */
@media print
{
    /* Hide the header when the user prints the page */
    #header
    {
      display: none;
    }
}
```

### Naming

Give selectors semantically meaningful names

When choosing a name for a class or id selector, do not use a name that is
linked to a specific implementation in CSS or markup or has no semantic
meaning:

```css
/* BAD PRACTICE! */
.red
{
    color: #C00;
}

#div1
{
    border: 1px solid #000;
}
```

Imagine in the above example that you later decide all of the elements that
have been marked with the class `.red` (such as error messages, etc.), should
now be a different color. Also, imagine you later realize that the `<div>` marked
with the id `#div1` should now be a form element instead.

Instead, use CSS names that are semantically meaningful to the content:

```css
/* GOOD PRACTICE */
.error
{
    color: #C00;
}

#content-wrapper
{
    border: 1px solid #000;
}
```

### Ordering

#### Alphabetize properties in rules

When listing CSS properties within a CSS rule, alphabetize them:

```css
/* GOOD PRACTICE */
#content
{
    height: 635px;
    margin: auto;
    padding: 50px 10px 20px 10px;
    text-align: center;
    width: 976px;
}
```

The exception to this rule are vendor-specific CSS properties (CSS properties
  that only target a specific browser rendering engine), which should be
  listed directly before their proper W3C form:

```css
/* GOOD PRACTICE */
#navigation li a
{
    -webkit-border-radius: 20px; /* Specific to Webkit browsers (e.g., Safari) */
    -moz-border-radius: 20px; /* Firefox-specific */
    border-radius: 20px; /* Proper W3C form */
    display: block;
    height: 24px;
    filter: alpha(opacity=50); /* IE-specific */
    opacity: 0.5; /* Proper W3C form */
    -webkit-transform: rotateY(180deg); /* Specific to Webkit browsers (e.g., Safari) */
    -moz-transform: rotateY(180deg); /* Firefox-specific */
    -ms-transform: rotateY(180deg); /* Microsoft-specific */
    transform: rotateY(180deg); /* Proper W3C form */
}
```

These vendor-specific properties should be listed first because they are
volatile and may change at the whim of those developing the browser rendering
engine. Since they are vendor-specific, these properties are not required to
adhere to the W3C specification.

Thus, there have been cases in which both the vendor-specific and the "proper"
form have both worked in the same browser, but with different behavior
(`border-radius` and `-webkit-border-radius` in Webkit, for example). By listing
the "proper" form last, you ensure that you are always overriding any
alternate, vendor-specific behavior with the behavior outlined in the CSS
specification.

### Display

#### Ensure color contrast

Ensure there exists an appropriate degree of contrast between background and
foreground colors. This is critical to providing an accessible experience for
users with color blindness or limited vision.

There are a number of techniques for checking the accessibility of your
website's colors, including using an automated tool, printing your website on
a black and white printer, or lowering the brightness of your monitor.

This guidelines applies to all types of content: it should be easy to read the
color of text on a given background, to discern where an input field begins and
ends, to differentiate between content areas, and so on.

In all cases, the content of your website should be easy to discern and should
not rely on subtle differences in color.
