# href-to-problem
This repo should help to resolve issue #19 from the ember-href-to repo.
 
Basically this repo is a simple ember-cli app which has 3 pages:
- index aka. home
- about
- contact

The default port was changed from ```4200``` to ```3000``` so I can debug my original app and this "app" at the same time
to compare the results and see where there are differences. Due to the bug we want to fix, the base url was changed from
```/``` to ```/app/```. So after you call ```ember serve``` the "app" will be available under [http://localhost:3000/app/][lnk0] 
 
Also this repo still uses ```exportApplicationGlobal```
and reads settings/config from a global variable. This is due to the fact, that we are using ember-cli since more than
one and a half year and this was common at the beginning. This repo should be as similar as possible to the
production app so this is why I kept the globals also in this "app".

Then there is the navigation once with embers ```link-to``` helper,
once with ```ember-href-to``` and once with the [workaround][lnk1] which I posted when I opened the issue.
But my workaround does not produce the same href as embers ```link-to```. When you hover the links
you will notice that the ```link-to``` links still have the base url in it and the links from my 
workaround does not.

Further information can be found in the [issues-thread][lnk2]

[lnk0]: http://localhost:3000/app/
[lnk1]: https://github.com/intercom/ember-href-to/issues/19#issue-100266546
[lnk2]: https://github.com/intercom/ember-href-to/issues/19
