---
layout: post
title: "Using Linux as a daily use OS"
date: 23 June 2024
image: pl.svg
alt:
---
Think of this blog post as a follow-up to a previous one, "[I set up another Windows-Linux dualboot][1]". This wasn't originally in plan but at some point after I finished writing that particular blog post I somehow ended up using my Linux installation more on a daily basis, sometimes to the point where I wouldn't boot into Windows at all.

**What that means?** To try keep myself on Linux for a longer time and have less reasons to boot into Windows for anything at all, I finally began completing my Linux installation by fully setting up everything and y'know, installing more of my apps that I use on Windows as well as trying new ones.

For a quick recap, I had this Linux installation from as back as February 2024, my distro of choice is Kubuntu (version 22.04 LTS), which is actually a Ubuntu flavor which uses KDE Plasma as the Desktop Environment, having became a favorite of mine. It runs flawlessly on my main machine, which is a Core i3 IdeaPad 3 laptop from 2021. As previously said, this is a follow-up so if you want the story on how I set it up then take a look at the first blog post to which I linked above.

Anyways, again this part of my Linux journey of course wouldn't be complete without some trials-and-errors, adventuring, and all that stuff.

## Trying Wayland
KDE Plasma 5 (which is currently what I use, since KDE Plasma 6 is not available for Kubuntu yet) comes with X11 by default, but Wayland was also there as an option to use instead provided I install it. I was considering trying Wayland for some time, so I finally did so.

Upon logging in to the Wayland session, the first thing I noticed is that it works better with my screen setup, where my second "monitor" (it's actually a medium-size TV) is on the left side of my laptop screen, which is my main display since I use it most of the time. Basically, all apps follow my display settings, unlike on X11 where some apps like the Dolphin File Manager, System Settings or Kdenlive just always open on the TV screen

### Inconveniences
But then, there comes the problems with Wayland. First inconvenience relates to display. My laptop has an UHD display, so on the default supported screen resolution (1920x1080) everything will appear tiny, that is if your screen zoom is set to 100% - the default. However, if I set the screen zoom to 125%, everything would appear blurry on screen. This is the main reason why I am sticking to the X11 session for now.

Another inconvenience (also another reason why I am sticking to X11) is that occasionally, Wayland Linux on my laptop wouldn't go with the shutdown process beyond these ACPI Errors for some reason (screen was dirty ik ik dont judge):

![]({{ site.url }}{{ site.baseurl }}{{ site.image_src }}28.jpg){: style="max-width: 100%; height: auto;"}

Basically my laptop would be stuck here unless I forcibly turn off my laptop by holding down the power button. For me this is quite frightening, probably has to do with trauma back in 2019 with my previous main laptop's SSD idk *shrug*

Either way, these count as issues with Wayland, it's nothing normal. Given that KDE Plasma 6 has switched from X11 to Wayland as the default windowing system, I hope these issues were fully or at least partly fixed somehow, since if it wasn't for these issues, I would have used the Wayland session instead of the X11 session.

Oh, one last inconvenience to add: this Spectacle bug where screenshots I made (while on the Wayland session) I try to paste over anywhere that have been copied automatically, would just appear corrupted. Workaround is to save the screenshots to device first, but that obviously means extra clicks.

## Oh, VMware...
Eventually I went to try set up VMware on Linux for the first time. Turns out it wasn't as easy as I thought lol.

The first step is pretty simple, first of all for VMware Workstation Pro you have to download a `.bundle` file, which is the only format VMware made Workstation available on Linux. Immediately after that, the most "fun" part begins: actually installing it.

First off, you cannot just click on the `.bundle` file from the file manager, since it is not an executable! You'll have to open a terminal, then run some command to make the `.bundle` file executable, then run it from the terminal, and... just hope it does its thing.

It wasn't the easiest process, until you meet the GUI setup wizard. That is quite easy to pass through, until the next big hard step comes, as soon as you finish going through the setup wizard. Basically, you have to manually download and install the `vmmon` and `vmnet` kernel modules separately. Additionally if you have Secure Boot enabled, some extra steps would be required as well. Particularly, you **also** have to sign both modules manually. This was the most step with most hassle involved, especially given I never tried VMware on Linux at all before.

## Editing with Kdenlive
Exploring other Linux software, I went to give Kdenlive another try as a video editor for YouTube (another try as in, I've used Kdenlive 6 years prior). From a first impression, Kdenlive is a pretty good Linux video editor, it is actually made by the same developer behind the desktop environment I am using (KDE).

Using it longer, I realized it may... not.... suit me well, especially with the 'professional' level of video editing I'm doing. The available options to add text to video especially (which for me is a must since I don't voiceover) are kinda ehhy, they barely suit my needs at all:
* **Subtitles**: they stay only in a fixed position in the video. As a solution for simple textboxes that explain what I'm doing (in the style of numerous modern-day niche small Wintubers I know), it works, but when you want to seem like a little bit more professional, like put text in specific part, this obviously won't work, the feature's name says it all.
* **Dynamic Text**: this is the closest thing to a text thing in Kdenlive that would actually work. However it comes with limitations; it is actually just an effect you have to add for a whole entire clip in the timeline. You cannot add multiple lines either etc.

If Kdenlive wants to be a good enough video editor for Linux, imo there's room for some improvements to make it easier to use and make videos with it and all. Though it is definitely on a good path compared to like 6 years ago, for starters and like video editing that isn't too much of a value into it is actually something I could recommend: I have used it to edit [several gameplay videos of SuperTux 2][3] (which is yet another game I started to play on Linux a while ago, definitely good to kill time), as well as one Windows Beta installation & exploration video (which you'll see as part of the [summer videos I'm working on][4] 👀)

### Other video editing software?
That said, I'm definitely questioning if Kdenlive should definitely be my permanent video editor or not. On Windows I've been editing with DaVinci Resolve, which is very advanced (I didn't even fully learn it, there's a lot of stuff in it).

Resolve is cross-platform, meaning it is available on all the three main desktop operating systems (Windows, Mac, *Linux*). So I went to install it, but it also ended up (for some reason) to be more complicated to make it run on Linux than it can run on Windows, where I can rely on it to make videos with at least the same production value as my previous video editor(s) (Vegas Pro and Camtasia) as I've pretty much learnt how to do so.

My issue with Resolve on Linux AFAIK is actually pretty common if you look it up on the internet, it happens even on higher-spec machines than my laptop. I still have to get around to see if I can make it work somehow, but right now as I'm writing this blog post I don't have the time to do so, *the clock is ticking*.

Other than Kdenlive and DaVinci Resolve I don't really recall any other good video editors for Linux that could be well-suited for YouTube videos with the rather medium level of production value seen on my channe~ wait I just reminded myself right now as I'm writing this, Shotcut is a thing

I went to look up Shotcut and from screenshots it looks kinda promising, worth a try in the future idk??? FYI Shotcut is much like Kdenlive and Resolve a cross-platform video editor, so... yeah.

## Trivia
It's time for some additional trivia as the blog post is almost about to end. As a TL:DR; there were quite some things I've worked on entirely on Linux, for one there were the SuperTux 2 videos and a Windows beta install & explore video that I've edited and exported on Linux, the thumbnails I made for the two SuperTux 2 videos were made entirely on Linux using my photo editing software of choice (GIMP) on which I already have advanced graphic desiging skills on from the Windows version.

One thing worth as a trivia is that [whole redesign of this blog and the switch of this website to the tabbed layout][2] **was made entirely on Linux!** Probably my biggest project so far with this title. For this the necessary stuff I use on Windows were already on Linux: my programming software of choice is Visual Studio Code, which does have a Linux version. Jekyll, which is what this website uses, uses the Ruby programming language, which one can get on Linux as well, one interesting thing is that `jekyll serve` (which is the command one uses to locally preview a Jekyll site) actually does its thing much faster than on Windows, though I've also seen GIMP open faster on Linux than on Windows, it's quite a difference isn't it? 👀

Also what I haven't mentioned previously before is that I take advantage of several other cool features in Linux/KDE. KDE Connect is a good example, it *just works* as the software to link my phone to my PC, it is perfect, like have how much phone battery left and all that stuff seen on my laptop screen, as well as eventual notifications and even wireless file transfers. Though at the times when I actually want to use it, sometimes it would be a complete hassle to keep my phone and laptop connected, despite that they use the same home Wi-Fi.

## Conclusion
Do I still want a Windows-Linux dualboot? The answer is: yes, kind of (I am still not fully sure about it). Although an eventual reorganization of my SSD partition setup *yet again* would be honestly a good idea in the long term to accomodate this (FYI I only have a 256GB SSD, allocating this space between 3 partitions for Windows, Linux & data has to be done with some careful thinking). Goal this time would be to allocate more space to my data partition and less space to my Windows partition, for convenience.

However not now though, probably next fall around the time (or close to) when Windows 11 24H2 is supposed to release, since I kinda want to downgrade to Windows 10, so that's one reason I'm getting why to reorganize my partition setup again.

Anyways, that's all from me! See y'all in the next blog post...

[1]: /2024/03/30/i-set-up-another-windows-linux-dualboot.html
[2]: /2024/04/25/whats-new-on-lynxmic-website-blog.html
[3]: https://www.youtube.com/playlist?list=PL6GUDnHoT4rcXNo9lwSERwDL9V3iTwA_0
[4]: /2024/06/17/important-announcement-regarding-youtube-channel.html
[5]: https://lynxmic.github.io