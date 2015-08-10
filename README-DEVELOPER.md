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

1. [Jekyll](http://jekyllrb.com/), used to generate the site from static Markdown files
2. [Node.js](https://nodejs.org/), used to run automated build steps

## Building the Web Standards Guide

1. Clone the git repository: `git clone https://github.com/ucsb-wsg/ucsb-wsg.github.io.git`
2. Run `npm install` to install all the required node.js dependencies
3. Run `gulp` to generate the site and host it locally

You can now view the site [http://localhost:4000/](http://localhost:4000/).
