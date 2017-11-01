# UCSB Web Standards Guide Development

The UCSB Web Standards Guide is a static site generated with
[Jekyll](http://jekyllrb.com/). As a result, updates to the site content
can be made by simply modifying the [Markdown](https://help.github.com/articles/github-flavored-markdown/)
files in the root directory.

However, if you would like to fully build and host the website on your local
machine, you can follow the directions below:

## Prerequisites

You will need to install the following to run all of the build steps
associated with hosting the UCSB Web Standards Guide on your local machine:


1. [Ruby](https://www.ruby-lang.org/), used to run Jekyll and other tools
2. [Jekyll](http://jekyllrb.com/), used to generate the site from static Markdown files
3. [Node.js](https://nodejs.org/), used to run automated build steps
4. [Bundler](http://bundler.io/), used to install some required gems
5. [Gulp](http://gulpjs.com/), used to build project

## Building the Web Standards Guide

1. Clone the git repository: `git clone https://github.com/ucsb-wsg/ucsb-wsg.github.io.git`
2. Run `npm install` to install all the required node.js dependencies
3. Run `bundle` to install all the required gems
4. Run `gulp` to generate the site and host it locally

You can now view the site [http://localhost:4000/](http://localhost:4000/).

## Client-side Libraries Used

The web guide makes use of the following client-side libraries:

* [Bootstrap](http://getbootstrap.com/) (v3.3.5)
* [jQuery](https://jquery.com/) (v3.1.0)

Most of these client-side libraries are served locally, rather than via a
content delivery network (CDN).

[Sass](http://sass-lang.com/) is used to write CSS.
