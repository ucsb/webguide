---
layout: default
title: Web Security
permalink: /web-security/
---

### Stay Up-to-Date

The Web Standards Group recommends that web developers stay up-to-date
regarding vulnerabilities and threats which may affect the systems that they
work with. The best practices and examples below are provided as a starting
point for web security and should not be considered a "complete" or "current"
resource.

Review the
[OWASP The Top 10 Application Security Risks](https://www.owasp.org/index.php/Top_10)
list which is maintained by The Open Web Application Security Project to become
familiar with the most current threats.

A [vulnerability disclosure database](https://cve.mitre.org) is maintained and
published by the National Cyber Security Division of the U.S. Department of
Homeland Security. This database can be used to research vulnerabilities common
to a specific development platform.

### Reporting Security Incidences

The Office of Information Technology's Security Services responds to reports
of intrusions, denial of service and other information security incidents that
take place on UCSB computers and Networks. To report an incident, send email
to: [security@ucsb.edu](mailto:security@ucsb.edu).

Please review [OIT's intrusion reporting guidelines](http://www.oit.ucsb.edu/security/report_intrusion.asp).

### Secure Coding Practices

* Initialize all variables before use
* Validate all user input before use
* Restrict administrative permissions on servers and databases
* Handle errors and don't display system error messages to end users
* Provide accounts with the least amount of permissions and privileges required
* Don't store secrets (e.g. passwords, keys) in your code
* Use tested, reliable libraries or modules for common functions (e.g. authentication, encryption, session tracking)

### Common Web Application Vulnerabilities and Mitigation

#### Authentication

An attacker may attempt to authenticate into your application in a number of
ways, including determining a correct username and password through attempting
several random combinations ("brute force"), gathering the information from one
of your users via a vulnerability, or simply bypassing the authentication
process altogether through some security oversight.

A few practices for avoiding these security risks include:

* Secure login pages and pages protected by authentication with HTTPS
* Provide the same response for all authentication errors
* Check that the user has been authenticated on each secure page

#### Access Control

Servers should only have the features and capabilities that are absolutely
required. Installing unecessary software or enabling extraneous options may
create vulnerabilities within your server. Furthermore, servers should be
configured to provide as little information as possible to external users and
visitors.

Keep the following best practices in mind when administering a web server:

* Ensure that server components (OS, software/apps) are up-to-date
* Avoid installing unnecessary applications on production servers
* Remove unused and backup pages from the web server
* Uninstall programming languages that are not in use
* If possible, make code libraries and configuration files inaccessible from the web
* Disable directory browsing
* Avoid making operating system calls based on user input

#### Session Information

There are a number of mechanisms for maintaining a user's "state" while
authenticated within your application, including encrpyted variables within the
URL, hidden form elements, and cookies. Note that none of these methods are
secure from an attack: URL variables can be easily modified and both hidden
form elements and cookies can be manipulated with tools like Firebug.

In general, the best practice is to make use of the session tracking mechanism
built into your development framework.

#### Input Attacks

There are a variety of attacks that stem from malicious input being fed into a
system, including operating system command injection, buffer overflow attacks,
SQL injection attacks, and cross-site scripting attacks. In most cases, these
problems are caused by a central root cause: feeding user input into a system
without properly sanitizing it.

To help protect from these issues, keep the following best practices in mind:

* Avoid basing system calls or database calls on user input
* Sanitize user input using a mechanism built in to your development framework
* Ensure user input is an expected and valid length
* Ensure that any errors reported to the user do not provide insight to web internals
* Log detailed error information to a monitored log file
* If outputting user input on a web page, sanitize the output for display
