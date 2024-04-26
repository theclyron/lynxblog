---
layout: post
title: "What's new on the Lynxmic website and blog?"
date: 25 April 2024
image: 26.png
alt:
---

I am excited to announce the new changes to the lynxmic.github.io website and the Lynxmic Blog that I've been working on for the past month. For short, the lynxmic.github.io website has received a large overhaul in design (switching from a scrollable layout to a tabbed layout) while the Lynxmic Blog has been "modernized", if you will.

This is a blog post I'm quickly writing so I can move on from this stuff and concentrate on other things, so it's gonna be brief.

![]({{ site.url }}{{ site.baseurl }}{{ site.image_src }}26.png){: style="max-width: 100%; height: auto;"}

## The new blog redesign
First of all, I want to highlight the new changes to the blog:
* **Bulma has been updated to v1.0.0**. This is part of the basis for the blog redesign; some of the new stuff depend on this.
* The blog's layout is now **consistent with the main lynxmic.github.io website**.
* Enhancements to how images are being loaded/displayed:
   * images attached on blog posts **now use Markdown instead of HTML**, like text content.
   * images now **show properly on RSS readers** (they now properly fit on screen, and aren't being displayed twice anymore)
   * on slow connections, the images will show a **loading skeleton block** when not fully loaded (for now this is only on the homepage).
   * the placeholder/"default" blog post image (that appears on the homepage) has been changed **from a PNG to a SVG**, further making the blog friendly with slow internet speeds (due to the way SVGs work).
* **Light mode has been implemented**, for people who are more comfortable with it.
   * Dark Mode will still be default.
   * To switch to light mode and vice-versa, just click/tap on the <i class="fas fa-moon"></i> button located in the footer.
* Pressing the Shift key will **show system info**, such as user agent or the system date & time (this is mostly a technical/developer feature).
* **Pagination has been fixed**, for real this time. There was a bug where it wouldn't handle more than two pages properly, this has been addressed.
* **About** and **Notifications** pages have been removed, as they were pointless.
* General code cleanup and other minor improvements.

As a heads up, the entire website appears broken when trying to load on Internet Explorer 11, this is probably a Bulma issue which I won't be fixing as there's no point (maybe in the future I may or may not make some kind of retro *Web 1.0-style* version of the website for fun?)

## Website changes
With the blog redesign comes a major update to the main [lynxmic.github.io][1] website as well, which has been also updated to Bulma version 1 as well.

As already mentioned earlier, the website has switched from a scrollable layout to a tabbed layout. The **About tab** (formerly the About section) has been finally completed as well, providing an alternative to the blog's About page that has been removed entirely.

Some of the new changes from the Lynxmic Blog have been ported over to the main website as well (light mode, system info etc), just take a look for yourself ig.

As always, any questions or issues you encounter on the new blog or the tabbed-layout website, open an issue on either the GitHub repository [for the main website][2] or the [blog][3] (depending on case), or alternatively reach out on [email][4] or on the [Discord Server][5]. I am aware of some issues, though I will try to find a fix for them eventually.

Anyways, imma head out, enjoy reading/looking around on the website whatever, I'm gone to focusing on other projects, such as keeping with this tradition I somehow made up on my channel of reviewing new Ubuntu LTS releases (24.04 LTS (Noble Numbat) just released as I'm writing this, currently downloading the .ISO rn 👀). 

![]({{ site.url }}{{ site.baseurl }}{{ site.image_src }}27.png){: style="max-width: 100%; height: auto;"}

Probably this is going to be the final time I'm making one of these videos, since at this point I started caring less and less about whatever Canonical is doing with Ubuntu (and that is despite I have a dualboot with Kubuntu 22.04 LTS which I had for almost 3 months and have been lately using more frequently) but only the future tells after all. I have quite some things to say about and try for myself, soooo... yeah. (EDIT 26/04/2024: [I gave up on this video.][6])

[1]: https://lynxmic.github.io
[2]: https://github.com/Lynxmic/lynxmic.github.io
[3]: https://github.com/Lynxmic/blog
[4]: mailto:thelynxmic@gmail.com?subject=[lynxmic.github.io feedback]
[5]: https://lynxmic.github.io/discord
[6]: https://www.youtube.com/post/UgkxmkhwR4WEf1x6AamhNzbPf8Jlw2NCQf_k
