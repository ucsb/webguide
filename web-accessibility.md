---
layout: default
title: Web Accessibility
permalink: /web-accessibility/
---

Download the [UCSB Web Accessibility Guidelines (PDF)](/media/web-accessibility-guidelines.pdf)

### General Web Accessibility Guidelines

In addition to the PDF above and the recommendations described throughout the Web
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
these changes. For example, if your website features a image carousel that cycles
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
[Adobe's PDF accessibility guidelines](http://www.adobe.com/accessibility/pdf/pdf-accessibility-overview.html).

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

### Importance of Web Accessibility

"Accessibility is a Civil Rights issue and inaccessible websites violate the
*effective communications* requirement of the Americans with Disabilities Act
(ADA) as well as provisions of Section 504 and 508 of the Rehabilitation Act.
Just as the rights of disabled people are ensured by providing closed
captioning for television programs, auditory crosswalk indicators or elevators
and ramps in buildings with stairs, so too is it our obligation and
responsibility to similarly accommodate the needs of the disabled when it comes
to accessing electronic systems and data."
(Source: [UCSB Web Accessibility Guidelines (PDF)](/media/web-accessibility-guidelines.pdf))

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
[WCAG 2.0 Level AA Success](http://www.w3.org/TR/WCAG20/) requirements.

For a guide on how to meet these requirements, use the
[customizable quick reference](http://www.w3.org/WAI/WCAG20/quickref/).

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
[Jennifer.Lofthus@vcadmin.ucsb.edu](mailto:Jennifer.Lofthus@vcadmin.ucsb.edu)

**Gary White**
<br />
*Director, Disabled Students Program*
<br />
[white-g@sa.ucsb.edu](mailto:white-g@sa.ucsb.edu)

### Guidelines

* [University of California Resources for Developing Accessible websites](http://www.ucop.edu/irc/itaccessibility/resources/)
* [World Wide Web Consortium (W3C) Web Accessibility Initiative](http://www.w3.org/WAI/)
* [WebAIM](http://webaim.org/)

### Adaptive Software Providers

* [Ai Squared](http://www.aisquared.com/products/)
* [JAWS](http://www.freedomscientific.com/)
* [Nuance](http://www.nuance.com/for-individuals/index.htm)

### Accessibility Tools

* [Firefox Web Developer Plug-in](https://addons.mozilla.org/en-US/firefox/addon/web-developer/)
* [University of Minnesota List of Accessibility Tools](http://www.d.umn.edu/goto/tools#accesstools)
* [W3C List of Accessibility Tools](http://www.w3.org/WAI/ER/tools/)
* [W3C Validator Tool](http://validator.w3.org/)

### Legislation

* [A Guide to Disability Rights Laws](http://www.usdoj.gov/crt/ada/cguide.htm)
* [Section 504 Fact Sheet](http://www.hhs.gov/ocr/civilrights/resources/factsheets/504.pdf)
* [Section 508 of the Rehabilitation Act of 1973](http://www.section508.gov/Section-508-Of-The-Rehabilitation-Act)
* [Section 255 of the Telecommunications Act of 1996](http://transition.fcc.gov/cgb/dro/section255.html)
* [Americans with Disabilities Act of 1990](http://www.ada.gov/pubs/ada.htm)

### Relevant Case Law

The rights of disabled individuals in the United States are covered under
several laws. These laws are in turn enforced by several agencies:

#### Section 504 of the Rehabilitation Act of 1973

[Full Text](http://www.nationalrehab.org/website/history/act.html)

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
([Source](http://www.usdoj.gov/crt/ada/cguide.htm#anchor65610))

#### Section 508 of The Rehabilitation Act of 1973:

[Full Text](http://www.section508.gov/index.cfm?FuseAction=Content&ID=14)

"In 1998, Congress amended the Rehabilitation Act to require Federal agencies
to make their electronic and information technology accessible to people with
disabilities. Inaccessible technology interferes with an individual's ability
to obtain and use information quickly and easily. Section 508 was enacted to
eliminate barriers in information technology, to make available new
opportunities for people with disabilities, and to encourage development of
technologies that will help achieve these goals. The law applies to all
Federal agencies when they develop, procure, maintain, or use electronic and
information technology. Under Section 508 (29 U.S.C. ‘ 794d), agencies must
give disabled employees and members of the public access to information that
is comparable to the access available to others. It is recommended that you
review the laws and regulations listed below to further your understanding
about Section 508 and how you can support implementation." For more
information, visit the [Section 508 website](http://www.section508.gov).

#### Section 255 of The Telecommunications Act of 1996:

[Full Text](http://www.fcc.gov/cgb/dro/telecom_language.html)

"The Federal Communications Commission (FCC) has rules requiring
telecommunications manufacturers and service providers to make their products
and services accessible to people with disabilities, if readily achievable.
These rules implement Section 255 of the Communications Act. Where it is not
readily achievable to provide access, Section 255 requires manufacturers and
providers to make their devices and services compatible with peripheral
devices and specialized customer premises equipment that are commonly used
by people with disabilities, if such compatibility is readily achievable."
For more information, visit the
[Section 255 website](http://www.fcc.gov/cgb/dro/section255.html)

#### The Americans with Disabilities Act of 1990:

[Full Text](http://www.usdoj.gov/crt/ada/pubs/ada.txt)

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
([Source](http://www.usdoj.gov/crt/ada/cguide.htm#anchor62335)).

### Agencies Who Enforce Access

#### The United States Access Board

The [United States Access Board](http://www.access-board.gov/) covers
Accessible Design and sets standards for
architecture and design. They set rules and standards for such things as size,
distribution and arrangement of disabled parking spaces, wheelchair access for
theatres, design guidelines for talking or chirping crosswalk indicators,
etc.

#### U.S. Department of Education

Section 504 is enforced by the
[U.S. Department of Education, Office for Civil Rights](http://www.ed.gov/about/offices/list/ocr/index.html)
enforces Section 504 as it applies recipients of Federal Funding for education.

#### U.S. Department of Justice

[Section 508](http://www.usdoj.gov/crt/508/508home.html) requires all federal
government bodies and their contractors to make Information Technology
accessible for the disabled.

#### The Federal Communications Commission (FCC)

[Section 255 of The Telecommunications Act](http://www.fcc.gov/cgb/dro/section255.html)
is coordinated by the FCC. They require the telecommunications industry to
make equipment readily accessible or, alternatively make equipment compatible
with assistive technology devices.
