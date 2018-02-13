### UCSB WSG Webguide

This is the UCSB Web Standards Group webguide which is a static website whose content provides recommendations and best practices for websites hosted within and affiliated with www.ucsb.edu. These recommendations are intended to be broad enough to apply to most any website in any domain -- but an emphasis is placed on Higher Ed web content.

This site has been moved to Github and Jekyll with the goal of increasing social collaboration on the webguide.

## Hosting

The source code for the UCSB Web Standards Guide is stored on GitHub as a repository under the ["UC Santa Barbara" GitHub organization](https://github.com/UCSantaBarbara) (https://github.com/UCSantaBarbara/webguide). The Guide itself is hosted from this repository using [GitHub Pages](https://pages.github.com/).

## Making a Change to Guide

Changes to the Web Guide should be done by submitting a pull request. Only the two Co-Chairs should have access to accept changes requested on a repository.

If you simply want to **suggest a change** to the web guide, you only need to do the following:

1. Create a **new issue** describing the change (https://github.com/UCSantaBarbara/webguide/issues)

This issue can be used to discuss the change and track work on the proposed change. Feel free to comment on other issues as well.

To actually **make a change** to the web guide:

1. Create a **new issue** describing the change (https://github.com/UCSantaBarbara/webguide/issues)
2. Create a **fork** of the Web Guide repository (https://github.com/UCSantaBarbara/webguide/)
3. On your own fork, create a **branch** with a name that references the issue (e.g. "responsive-redesign" or "broken-link-fix")
4. Do all of the work associated with the change on this branch
5. When you are finished, create a **pull request** from your branch to the master branch of the Web Guide repository. Reference the issue number in the pull request title or description (e.g. "fixes #33")
6. A Co-Chair will **accept** the pull request

Make sure to keep your fork and the branches on your fork in sync with the Web Guide repository by continuously pulling in changes from the master branch of the main repository. This will ensure you can make cleaner merges and pull requests with few conflicts.

For more information on this process, see [GitHub's "Configuring a remote for a fork"](https://help.github.com/articles/configuring-a-remote-for-a-fork/) and [GitHub's "Syncing a fork"](https://help.github.com/articles/syncing-a-fork/).

## History

On 4/23/15, a GitHub organization for the UCSB Web Standards Group was created by David Gurba and work started on migrating the Web Standards Guide from its original hosting location on UCSB servers to its new hosting location on GitHub using GitHub Pages. This migration was completed in early May 2015.

Through this migration, the Guide's URL was changed from http://www.ucsb.edu/webguide/ to http://webguide.ucsb.edu/

In February 2018, the repository for the guide was moved from the "UCSB Web Standards Group" GitHub organization to the "UC Santa Barbara" GitHub organization.

## Organization and Repository Management Between Co-Chairs

Each of the two Web Standards Group Co-Chairs should have "Owner" permissions over the Web Standards Guide repository.

### License

[The UCSB webguide is released under the BSD Version Clause 3 License](LICENSE.md)
