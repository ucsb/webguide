---
layout: default
title: Checklist
permalink: /web-standards-checklist/
---

The following checklist provides a summary of the information provided
throughout the web guide. This can be used when developing a website to ensure
that the website has met all of the recommendations outlined in the guide.
To view the corresponding web guide section for each area of the checklist,
**click each section's header**.

### [Cross-Browser Compatibility](/browsers/)

* Ensure that your website works in the browsers used by 90% of your visitors
* Use web analytics tools to analyze traffic statistics for your site

### [Favicons and Touch Icons](/favicon-and-touch-icons/)

* Provide favicons and touch icons

### [Graphic Identity](/ucsb-graphic-identity/)

* Follow the [UC Santa Barbara Graphic Identity guidelines](http://www.ucsb.edu/graphic-identity/)

### [Viewport Dimensions](/viewport-dimensions/)

* Employ responsive web design (RWD) to support a range of resolutions and devices
* Make sure that your page content prints appropriately

### [CSS](/css/)

* Ensure that your page's markup has a logical, semantic structure without styling
* Use shorthand properties
* Always use external stylesheets
* Don't use `!important`
* Don't use `@import` in plain CSS
* Avoid browser-specific hacks
* Use relative over absolute units
* Don't generate content with CSS
* Use the "print" media query
* Give selectors semantically meaningful names
* Alphabetize properties in rules (except for vendor prefixes)
* List vendor prefixes directly before their W3C form
* Ensure color contrast

### [Footer](/footer/)

* Include copyright statement
* Include UCSB Terms of Use statement
* If you collect personal information from visitors, include the UCSB Privacy Policy statement
* Include statement about alternative, accessible content
* Include a contact link

### [Header](/header/)

* Include the HTML5 doctype
* Specify the document language (`lang`) attribute
* Specify UTF-8 as the character encoding
* Include a document title
* Include a document description
* Include a print stylesheet
* If applicable, include IE-specific stylesheets
* If applicable, include styling for users without JavaScript enabled

### [HTML](/html/)

* Use semantically-appropriate markup
* Minimize markup
* Validate markup with the [W3C Validator](https://validator.w3.org/)
* Avoid `iframes`
* Never use frames
* When using `iframes`, use the `title` attribute
* Use descriptive link text
* Use the same destination for the same link text
* Don't use tables for layout
* Use `caption`s and summaries with tables
* Use `th` to provide table headers
* Provide a meaningful "alt" attribute for every image
* Prefer text over images of text
* Use responsive image techniques

### [Resources](/resources/)

* Include JavaScript files right before the closing `body` tag
* Leverage content delivery networks (CDNs)
* Minify CSS and JavaScript files
* Concatenate CSS and JavaScript files

### [E-mail Addresses](/email-addresses/)

* Use contact forms or e-mail aliases instead of e-mail addresses

### [Web Security](/web-security/)

* Ensure that your website is built with secure development practices

### [URLs](/urls/)

* Use "friendly" URLs
* Use persistent URLs

### [Search Engine Optimization](/seo/)

* Include a robots.txt file in your site's root directory
* Include a sitemap.xml file in your site's root directory

### [Web Accessibility](/web-accessibility/)

* Ensure that your website is easy for your users to navigate
* Design for device independence
* Avoid time-sensitive content changes
* Don't use pop-up windows
* Prefer HTML over non-HTML documents
* Use a consistent page layout
* Write content in clear, simple language
* Don't require the use of a plug-in
* Use the CSS Speech properties to control how text on a web page is read
* Ensure media is accessible
* Provide "Skip Links"
* Always use a label or accessible alternative for input fields
* Ensure accessibility of icon fonts
* Nest headings properly
* Ensure "Read More" links are accessible
* Ensure that your website meets the WCAG 2.0 Level AA Success criteria for accessibility
