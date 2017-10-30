---
layout: default
title: Web Accessibility
permalink: /web-accessibility/
---

### General Web Accessibility Guidelines

In addition to the recommendations described throughout the Web
Guide, the Web Standards Group also provides the following general guidelines for
addressing accessibility in your websites:

#### Help Users Navigate

Ensure that your website is easy for your users to navigate by establishing a
clearly-defined information architecture and providing straightforward mechanisms for users to
navigate within this architecture, including search engines and site outlines.

Furthermore, ensure that users can easily orient themselves within the structure of
the website using techniques such as labeling the current section and using
breadcrumb navigation.

#### Design for Device Independence

**Your page should not depend on the user using a specific type of device**.
In other words, your page should be navigable by mouse, keyboard, voice, touch, and
head wand. Elements that appear only upon mouse-over, for example, are usually
inaccessible to people using screen readers. In general, any page that can be
navigated via keyboard can also be navigated by voice or screen reader.

#### Avoid Time-Sensitive Content Changes

Avoid time-sensitive content changes or allow users to control the timing of
these changes. For example, if your website features an image carousel that cycles
through several images, provide options for users to pause or slow down the
transition between images.

If your website _must_ include time-sensitive content changes without user
controls, provide ample time for the user to engage with the content. As a
general rule: 20 seconds for every line of text.

Similarly, avoid moving content around the page unless users can control the
movement of the content.

#### Don't Use Pop-up Windows

Do not use "pop-up" windows, or separate, modal browser windows that are
opened by the current page. They inhibit screen reader's ability to
read the desired active screen. Furthermore, most modern browsers automatically
block the display of these windows.

#### Prefer HTML Over Non-HTML Documents

Always prefer HTML web pages over non-HTML document formats, like PDF files or
Microsoft Word files. These file formats often can't be viewed natively
within a browser, forcing the user out of your website and into an alternate
viewer.

Furthermore, making these alternate file formats accessible to screen readers
and other assistive technologies often requires a completely
separate approach than HTML documents, complicating your website's
accessibility maintenance.

If you must use a PDF, ensure that your PDF is accessible using
[Adobe's PDF accessibility guidelines](https://www.adobe.com/accessibility/pdf/pdf-accessibility-overview.html).

#### Consistent Page Layout

Your website should feature a consistent page layout with page elements, like
navigation and main content areas, appearing in the same location and
featuring the same format across your website.

#### Clear, Simple Language

Content within your website should be written in clear, simple language.

#### Plug-ins

In general, your website should not require the use of plug-ins or extensions
not already present in a browser.

If your website does require a plug-in or extension, provide a link to
download that component near the content that requires it.

#### CSS Speech

Use the [CSS Speech properties](https://www.w3.org/TR/css3-speech/) to control
how text on a web page is read via assistive technologies, like screen readers,
including volume, balance, timing, and more.

#### Ensure Media is Accessible

When including multimedia, such as videos or interactive presentations, on
your website, ensure that media is accessible to all of your users.
For example, all videos should include captions for deaf and hard of hearing
audiences.

#### Provide "Skip Links"

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

#### Always Use a Label or Accessible Alternative for Input Fields

Every input should have a label:

```html
<!-- GOOD PRACTICE -->
<label for="user-first-name">First Name</label>
<input type="text" name="first-name" id="user-first-name">
```

This ensures that the purpose of your `input` can be determined by assistive
technologies, like screen readers.

Sometimes, you may have a case where it's not practical to include a `label`.
For example, in a simple search form:

```html
<label for="search-terms">Search Terms</label>
<input type="text" name="search-terms" id="search-terms">
<input type="submit" value="Search">
```

In this example, it's redundant to include a `label` for the `input` where a
user enters search terms since it's _visually_ clear that a user should enter
search terms in this field.

However, you still want to include _some_ alternative to a label. Otherwise,
a user using a screenreader will not understand the purpose of the field until
they switch focus to the submit button.

In this case, you can use the `aria-label` attribute:

```html
<!-- GOOD PRACTICE -->
<input type="text" aria-label="Search Terms" name="search-terms" id="search-terms">
<input type="submit" value="Search">
```

#### Ensure Accessibility of Icon Fonts

When using an icon font (for example, [Font Awesome](https://fortawesome.github.io/Font-Awesome/)),
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

#### Nest Headings Properly

When using heading elements (`h1`-`h6`), follow two rules:

* Only use a single `h1` element on a page
* Lower level headings should appear below/within higher level headings (for example, a `h3` after an `h2`)

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

The HTML5 specification _used_ to allow for the use of multiple `h1`s on a
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

#### Ensure "Read More" Links Are Accessible

When providing a "Read More" link for content, ensure that assistive
technology users can parse the connection between the "Read More" link and its
parent content by providing an `aria-labelledby` attribute:

```html
<!-- GOOD PRACTICE -->
<h2 id="headline">Gauchos Win Again</h2>

<p>The Gauchos have done it again! <a href="/gauchos-win-again" aria-labelledby="headline">Read More</a></p>
```

### Importance of Web Accessibility

Accessibility is a Civil Rights issue and inaccessible websites violate the
*effective communications* requirement of the Americans with Disabilities Act
(ADA) as well as provisions of Section 504 and 508 of the Rehabilitation Act.
Just as the rights of disabled people are ensured by providing closed
captioning for television programs, auditory crosswalk indicators or elevators
and ramps in buildings with stairs, so too is it our obligation and
responsibility to similarly accommodate the needs of the disabled when it comes
to accessing electronic systems and data.

All campus units should make every effort to comply with WSG accessibility
recommendations.

An accessible website means that people with disabilities are able to obtain
the same information in an adaptable format that is available to persons who do
not have a disability and who are not using adaptive technology. Your web page
also needs to take reasonable measures to ensure you are not causing undue harm
to persons with disabilities. A summary of key accessibility resources with
respect to web pages is presented below.

If you have any questions regarding your responsibility for designing or
maintaining an accessible web page or if you feel that you are unable to access
a web page on campus because it lacks the required accessible features, please
contact one of the individuals listed under our campus resources.

### UCOP IT Accessibility Policies

In 2013, the
[UC Electronic Accessibility Leadership Team (EALT)](http://www.ucop.edu/electronic-accessibility/initiative/leadership-team.html)
proposed a
[new systemwide accessibility policy](http://www.ucop.edu/electronic-accessibility/initiative/policy.html),
which included the requirement that all websites should meet the
[WCAG 2.0 Level AA Success](https://www.w3.org/TR/WCAG20/) requirements.

For a guide on how to meet these requirements, use the
[customizable quick reference](https://www.w3.org/WAI/WCAG20/quickref/).

### Campus Resources

**Mark Grosch**
<br />
*Adaptive Technology Specialist and ADA Web Compliance Officer*
<br />
[grosch-m@sa.ucsb.edu](mailto:grosch-m@sa.ucsb.edu)

**Jennifer Lofthus**
<br />
*Policy Coordinator & Deputy ADA Compliance Officer*
<br />
[jennifer.lofthus@vcadmin.ucsb.edu](mailto:jennifer.lofthus@vcadmin.ucsb.edu)

**Gary White**
<br />
*Director, Disabled Students Program*
<br />
[white-g@sa.ucsb.edu](mailto:white-g@sa.ucsb.edu)

### Guidelines

* [University of California Resources for Developing Accessible websites](http://www.ucop.edu/electronic-accessibility/)
* [World Wide Web Consortium (W3C) Web Accessibility Initiative](https://www.w3.org/WAI/)
* [WebAIM](http://webaim.org/)

### Adaptive Software Providers

* [Ai Squared](http://www.aisquared.com/products/)
* [JAWS](http://www.freedomscientific.com)
* [Nuance](https://www.nuance.com/dragon.html)

### Accessibility Tools

* [Firefox Web Developer Plug-in](https://addons.mozilla.org/en-US/firefox/addon/web-developer/)
* [University of Minnesota List of Accessibility Tools](http://www.d.umn.edu/itss/training/online/webdesign/tools.html#accesstools)
* [W3C List of Accessibility Tools](https://www.w3.org/WAI/ER/tools/)
* [W3C Validator Tool](https://validator.w3.org/)

### Legislation

* [A Guide to Disability Rights Laws](https://www.ada.gov/cguide.htm)
* [Section 504 Fact Sheet](https://www.hhs.gov/sites/default/files/ocr/civilrights/resources/factsheets/504.pdf)
* [Section 508 of the Rehabilitation Act of 1973](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/background/section-508-the-law)
* [Section 255 of the Telecommunications Act of 1996](https://www.access-board.gov/the-board/laws/telecommunications-act)
* [Americans with Disabilities Act of 1990](https://www.ada.gov/pubs/ada.htm)

### Relevant Case Law

The rights of disabled individuals in the United States are covered under
several laws. These laws are in turn enforced by several agencies:

#### Section 504 of the Rehabilitation Act of 1973

[Full Text](https://www.dol.gov/oasam/regs/statutes/sec504.htm)

"Section 504 states that "no qualified individual with a disability in the
United States shall be excluded from, denied the benefits of, or be subjected
to discrimination under" any program or activity that either receives Federal
financial assistance or is conducted by any Executive agency or the United
States Postal Service.

Each Federal agency has its own set of section 504 regulations that apply to
its own programs. Agencies that provide Federal financial assistance also have
section 504 regulations covering entities that receive Federal aid.
Requirements common to these regulations include reasonable accommodation for
employees with disabilities; program accessibility; effective communication
with people who have hearing or vision disabilities; and accessible new
construction and alterations. Each agency is responsible for enforcing its own
regulations. Section 504 may also be enforced through private lawsuits. It is
not necessary to file a complaint with a Federal agency or to receive a
"right-to-sue" letter before going to court."
([Source](https://www.ada.gov/cguide.htm#anchor65610))

#### Section 508 of The Rehabilitation Act of 1973:

[Full Text](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/background/section-508-the-law)

"In 1998, Congress amended the Rehabilitation Act of 1973 to require Federal
agencies to make their electronic and information technology (EIT) accessible to
people with disabilities. The law (29 U.S.C. § 794 (d)) applies to all Federal
agencies when they develop, procure, maintain, or use electronic and information
technology. Under Section 508, agencies must give disabled employees and members
of the public access to information that is comparable to access available to
others. The United States Access Board discusses the Section 508 law and its
responsibility for developing accessibility standards for EIT to incorporate
into regulations that govern Federal procurement practices."
([Source](https://www.section508.gov/content/learn/laws-and-policies))

#### Section 255 of The Telecommunications Act of 1996:

[Full Text](https://www.access-board.gov/the-board/laws/telecommunications-act)

"FCC rules under Section 255 of the Communications Act require
telecommunications equipment manufacturers and service providers to make their
products and services accessible to people with disabilities, if such access
is readily achievable. Where access is not readily achievable, manufacturers and
service providers must make their devices and services compatible with
peripheral devices and specialized customer premises equipment that are commonly
used by people with disabilities, if such compatibility is readily achievable."
([Source](https://www.fcc.gov/consumers/guides/telecommunications-access-people-disabilities))

#### The Americans with Disabilities Act of 1990:

[Full Text](https://www.ada.gov/pubs/adastatute08.htm)

"The ADA prohibits discrimination on the basis of disability in employment,
State and local government, public accommodations, commercial facilities,
transportation, and telecommunications. It also applies to the United States
Congress.

To be protected by the ADA, one must have a disability or have a relationship
or association with an individual with a disability. An individual with a
disability is defined by the ADA as a person who has a physical or mental
impairment that substantially limits one or more major life activities, a
person who has a history or record of such an impairment, or a person who is
perceived by others as having such an impairment. The ADA does not
specifically name all of the impairments that are covered."
([Source](https://www.ada.gov/cguide.htm#anchor62335)).

### Agencies Who Enforce Access

#### The United States Access Board

The [United States Access Board](https://www.access-board.gov/) covers
Accessible Design and sets standards for architecture and design. They set
rules and standards for such things as size, distribution and arrangement
of disabled parking spaces, wheelchair access for theatres, design guidelines
for talking or chirping crosswalk indicators, etc.

#### U.S. Department of Education

The [U.S. Department of Education, Office for Civil Rights](https://www2.ed.gov/about/offices/list/ocr/index.html)
enforces Section 504 as it applies recipients of Federal Funding for education.

#### U.S. Department of Justice

[Section 508](https://www.justice.gov/crt/section-508-home-page-0) requires all federal
government bodies and their contractors to make Information Technology
accessible for the disabled.

#### The Federal Communications Commission (FCC)

The FCC coordinates [Section 255 of The Telecommunications Act](https://www.fcc.gov/general/section-255-disability-rights-office).
They require the telecommunications industry to
make equipment readily accessible or, alternatively, make equipment compatible
with assistive technology devices.
