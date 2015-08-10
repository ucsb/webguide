---
layout: default
title: Footer
permalink: /footer/
---

Each UCSB website must include a footer at the bottom of each webpage with the
elements described in this section.

### Copyright

Include the following HTML statement with the year the site was created or the
year of the last major redesign or version of the website:

```html
Copyright &copy; 2015 The Regents of the University of California, All Rights Reserved.
```

For more information about copyright requirements, visit
[UCOP Copyright Matters](http://www.ucop.edu/ott/faculty/crprimr.html).

### Terms of Use

Each footer should include a link to the
[UCSB Terms of Use](http://www.policy.ucsb.edu/terms_of_use/).
This link can be implemented in one of the following ways:

* Link directly to the [UCSB Terms of Use document](http://www.policy.ucsb.edu/terms_of_use/)
* Include the content of the [source document](http://www.policy.ucsb.edu/terms_of_use/content.html) on your website via a server-side technology (PHP, ASP.NET, etc.)

If your organization needs to modify the Terms of Use document for a specific
purpose, you should submit the modified version for approval to
[policy@ucsb.edu](mailto:policy@ucsb.edu). If the Coordinator approves the
modified content, the updated version can be used and a copy will be retained
by Administrative Services.

### Privacy Notification

All UCSB websites that collect personal information from visitors should
include a link to the
[UCSB Privacy Notification](http://www.policy.ucsb.edu/privacy-notification/).
Anonymous information collected for the purpose of web analytics is *not*
considered personal information. Similar to the Terms of Use, this link can be
implemented in one of the following ways:

* Link directly to the [UCSB Privacy Policy](http://www.policy.ucsb.edu/privacy-notification/)
* Include the content of the [source document](http://www.policy.ucsb.edu/privacy-notification/content.html) on your website via a server-side technology (PHP, ASP.NET, etc.)

The link to either the UCSB Privacy Policy or the page with the included
content should contain the word "privacy."

If your organization needs to modify the Privacy Policy document for a specific
purpose, you should submit the modified version for approval to
[policy@ucsb.edu](mailto:policy@ucsb.edu). If the Coordinator approves the
modified content, the updated version can be used and a copy will be retained
by Administrative Services.

It is a good practice to also include a link to the privacy policy close to
where a user is entering personal information. For example, a link to the
privacy policy could be added to the top of a form that a user is filling out
or next to where a user enters their username and password to log into a
secure application.

### Accessibility

Include a statement or link to a statement offering alternative content for
those who cannot access your page:

```html
If any of the material on this page is not accessible to you, please
<a href="mailto:webmaster@department.ucsb.edu">send us an email</a>
or <a href="/contact">contact us via our contact page</a>
and we will provide alternatives.
```

### Last Modified Date (Optional)

Each web page may contain the date the last time the page was updated.
The last modified date should appear in the following format:
April 4, 2006 (no month or year abbreviation)

### Contact Link

All websites should contain an email link or link to a contact form to contact
someone within the organization about questions or concerns with the website.

### Footer Example

The following example includes all of the guidelines described above:

```html
Copyright &copy; 2015 The Regents of the University of California,
All Rights Reserved
<br>
<a href="http://www.policy.ucsb.edu/terms_of_use/">Terms of Use</a> /
<a href="http://www.policy.ucsb.edu/privacy-notification/">Privacy Notification</a> /
<a href="/accessibility">Accessibility</a>
<br>
Last Modified April 4, 2006 /
Questions or contacts? Please <a href="/contact">contact us</a>
```
