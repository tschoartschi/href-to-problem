# href-to-problem
This repo should help to resolve issue #19 from the ember-href-to repo.
 
Basically this repo is a simple ember-cli app which has 3 pages:
- index aka. home
- about
- contact

Then there is the navigation once with embers ```link-to``` helper,
once with ```ember-href-to``` and once with the [workaround][lnk1] which I posted when I opened the issue.
But my workaround does not produce the same href as embers ```link-to```. When you hover the links
you will notice that the ```link-to``` links still have the base url in it and the links from my 
workaround does not.

Further information can be found in the [issues-thread][lnk2]

[lnk1]: https://github.com/intercom/ember-href-to/issues/19#issue-100266546
[lnk2]: https://github.com/intercom/ember-href-to/issues/19
