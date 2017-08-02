---
layout: default
title: URLs
permalink: /urls/
---

Use "friendly", persistent URLs throughout your application.

### Friendly URLs

A "friendly" URL provides a clear description of a resource. For example,
the following URL clearly describes the page the user would access:

```bash
# GOOD PRACTICE
https://department.ucsb.edu/staff/john-smith
```

In contrast, the following URL is more cryptic:

```bash
# BAD PRACTICE
http://department.ucsb.edu/page.php?id=63&staff=john%20smith
```

"Friendly" URLs are more accessible to both the users visiting the URLs as
well as search engine crawlers attempting to index your website. Use the
following recommendations to create friendly URLs:

* Don't include file extensions (e.g., `.aspx`, `.php`, `.html`) in the URL
* Avoid cryptic numbers and identifiers (e.g., `?id=94&key=s34a`)
* Use dashes/hyphens instead of underscores or spaces (Google does not recognize an underscore as a separator)
* Ensure that the text of the URL describes resource being accessed via the URL
* Avoid query strings

### Persistent URLs

A persistent URL indefinitely directs a user to a particular web page.

It's important to maintain persistent URLs as users may have bookmarked a page
from your website or another website may be linking to your website. If you
"break" this URL by moving or removing the page to which the URL points, you
create a poor experience for the user.

If a URL must change, be sure to redirect users who visit the existing URL. If
a resource has been permanently moved, respond with the "301" HTTP status code:

```bash
HTTP/1.1 301 Moved Permanently
```

If a resource has only been temporarily moved, respond with a "307" HTTP
status code (or "302" for HTTP 1.0):

```bash
HTTP/1.1 307 Temporary Redirect
```

### Third-Level Domain Names

Websites should be available via both their specific third-level domain name
(e.g., `https://department.ucsb.edu`) and the WWW domain
(e.g., `https://www.department.ucsb.edu`), so that users may access a site using
either URL.
