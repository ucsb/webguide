# UCSB Web Standards Guide Development

The UCSB Web Standards Guide is a static site generated with [Jekyll](http://jekyllrb.com/). As a result, updates to the site content
can be made by simply modifying the [Markdown](https://help.github.com/articles/github-flavored-markdown/) files in the root directory.

However, if you would like to fully build and run the website on your local computer, you can follow the guidelines below:


## Prerequisites

You will need to install the following to run all of the build steps associated with hosting the UCSB Web Standards Guide on your local computer:

1. [Ruby](https://www.ruby-lang.org/), used to run Jekyll and other tools
2. [Jekyll](http://jekyllrb.com/), used to generate the site from static Markdown files
3. [Node.js](https://nodejs.org/), used to run automated build steps

Reach out to the WSG mailing list for assistance. There are many people at UCSB eager to help you.


### Windows

Install Node.js which comes with npm (Node Package Manager). Try [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) to install and use the LTS version of Node.

Verify the install by running `node -v` and `npm -v`. You might need to close and reopen your terminal first.

Install [Ruby+DevKit from rubyinstaller.org](https://rubyinstaller.org/downloads/) and do the full MSYS2 toolchain install.

Verify install by running `ruby -v` and `gem -v`. You might need to close and reopen your terminal first.

Install Bundler by running `gem install bundler`.

Verify install by running `bundle -v`. You might need to close and reopen your terminal first.

Proceed to [Building the Web Standards Guide](#building-the-web-standards-guide).


### MacOS and other POSIX standard OSes

Installing on these OSes are much more simple that Windows. Check out [Jekyll's Installation Docs](https://jekyllrb.com/docs/installation/) for more information.

Proceed to [Building the Web Standards Guide](#building-the-web-standards-guide).


## Building the Web Standards Guide

1. Fork then clone the git repository: `git clone https://github.com/{your-github}/webguide.git`
2. Run `npm install` to install all the required node.js dependencies
3. Run `bundle install` to install all the required gems
4. Run `npm start`

You can now view the site [http://localhost:4000/](http://localhost:4000/).


## Client-side Libraries

The web guide makes use of the following client-side libraries and technologies:

- [Bootstrap](http://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [Sass](http://sass-lang.com/)
- [Markdown](https://help.github.com/articles/github-flavored-markdown/)

## Assistance

We love that you want to help out and make the Web Standards Guide better. 

Please reach out to us by attending a monthly WSG meeting, contacting the WSG co-chairs, or sending a question or comment on the WSG mailing list.
