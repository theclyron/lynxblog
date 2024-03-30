---
# Use ## to start a subheading in the blog post.
layout: post
title: "I set up another Windows-Linux dualboot"
date: 30 March 2024
image: 23.jpg # default: default.png
alt: Kubuntu 22.04 LTS installing
---
For a while I've been considering to try Linux on a real computer again (being that the last time I ran Linux on such was in 2020). This time I wanted to set up the Windows-Linux dualboot on my main laptop, the IdeaPad 3, and went for Kubuntu 22.04 LTS this time around, mostly for KDE Plasma and everything it has to offer. Notably this was also the first Windows-Linux dualboot I've done on UEFI, as all previous ones were on BIOS/Legacy.

For short, this was a good experience but with some woes, though I want to share with y'all most-if-not-my-entire experience I had through this blog post...

## Preparing the "terrain"
Prior to setting up dualboot, I considered some changes 'n stuff were needed to do, mainly partition setup changes. Prior to the dualboot I used to have a double-partition setup on a Samsung 256GB SSD, my laptop's sole storage drive. Half was for Windows the (C: drive) and another for data (the D: drive).

To make way for a Linux partition I've took a notable size off the D: drive, which now only has 54.8GB of space (used for ISOs, VMs etc). The rest of its 110GB were left unallocated before being used for a Linux partition that was created in the Linux installer.

However, before actually doing the dualboot I went to reinstall Windows 11 from the C: drive, while also disabling Optane in favor of AHCI (yes im aware reinstallation wasnt necessary but i wanted a fresh start okay). Prior to doing this I have made sure to clean up my drive of unneeded data (whilst [moving over my archive in other mediums][1], an archive which held a significant amount of space).

Optane came enabled by default on my laptop but I didn't see any additional advantages over AHCI, contrarily there was additional unnecessary hassle (such as having to inject an Optane driver everytime I try to use the Windows Recovery Environment (WinRE) or the Setup, which could be a problem if I'm not home; I had Windows break to an unbootable state one day to the point I was almost about to reinstall before I went to use the Uninstall Updates feature in WinRE, at least that was at home, it could've been worse), so this was obviously for the good. With Optane disabled, now it's safe to say there shouldn't be any major obstacles in the way of a Windows-Linux dualboot, right?

## Installing Kubuntu & applications
Now for the main point of this blog post, actually installing Linux. Prior to doing so I went to test it by running it through the USB flash drive with the Linux distro I was considering using. All went well, so I've gone to the main installation process, using all what I left unallocated from my D: drive. Fast forward, the installation finished in approx. 10 minutes (NVMe FTW).

<div style="text-align: center;">
<img class="is-hidden-mobile" width="50%" height="auto" src="{{ site.url }}{{ site.baseurl }}{{ site.image_src }}24.png">
<img class="is-hidden-widescreen" src="{{ site.url }}{{ site.baseurl }}{{ site.image_src }}24.png">
</div>

The next step was installing applications, such as my browser etc. To this point I didn't install every of my programs that I use on Windows and run on Linux, as I didn't get there yet (I have other things to do at this moment), I've only installed the programs I tend to use on more on a daily basis. However what I did install was some games I used/wanted to play on Linux for quite some time (Extreme Tux Racer, Quadrapassel, etc), the latter being a Tetris-like game (a looong time passed since I last played some Tetris, so why not) - good games to kill time ngl.

I also proceeded to install GNOME Boxes, since I have had a YT video idea with it for quite a while (I have made the video ever since, [click here to watch!][3]). In fact, another reason why I set up this Windows-Linux dualboot was to enable myself to more video ideas that aren't strictly Windows related.

## Issues...
...because without them this Linux experience wouldn't feel complete, right? Everyone has to go through some issues at some point, right? I'm no exception!

I am mostly speaking hardware wise, the good part is that most stuff work flawlessly (double-screen setup etc), however there are some issues on this side. A minor issue I had was that my touchpad would only partially work out of the box, so a mouse was kinda a must. Was able to fix this issue and at least have a fully working touchpad (if not with the gestures/precision functionality since I didn't even got there) by turning on a specific option in System Settings - more specifically, Tap-to-click.

The biggest issue I've had (and still have) was with Bluetooth, it's literally a hassle to work with. I have a pair of wireless earphones that I use on a daily basis, until recently I was able to pair them but as of now they simply just refuse to connect on Linux (they do still pair and connect just fine on Windows). It just seems my Linux system just has a particular problem with my wireless earphones since I was able to connect another pair (an older one I have) just fine.

<div style="text-align: center;">
<img class="is-hidden-mobile" width="50%" height="auto" src="{{ site.url }}{{ site.baseurl }}{{ site.image_src }}25.png">
<img class="is-hidden-widescreen" src="{{ site.url }}{{ site.baseurl }}{{ site.image_src }}25.png">
</div>

I was able to fix this in the short-term by loading an older version of the Linux kernel through the GRUB menu but that since auto-uninstalled. I have attempted to reinstall the said older version but then Linux wouldn't boot at all with the older version for some reason, I have zero clue as to why, if you ask me, no, I only have moderate Linux experience at most, not something really advanced, but not too basic either.

Back to the Bluetooth subject, I have also tried every other potential "solutions", even the most basic ones, to no avail, so I'm stuck on Linux with the older pair of wireless earphones I have, which is aging and thus battery life is shorter over time. Just as I'm writing this part of the blog post I've been thinking it may be more of a headphone issue since they also refuse to connect to my old G50-70 laptop running Windows 11, but the other pair does.

In a more general speaking wise regarding Bluetooth, sometimes audio would just play really odd, but that's usually fixed by disconnecting and reconnecting my earphones. Also, another issue is that sometimes trying to shutdown/restart my laptop would just sit at the UEFI manufacturer logo forever unless I hard reset, this is an issue that I believe 99% of the time could've been associated with Bluetooth-audio. That said, just staring at the UEFI logo with hard reset being your only solution to turn off/restart is really frightening at least for me.

I've also had the whole OS freeze once, again to the point where I had to hard reset (for the record I am on X11 window system, I didn't yet bother to try Wayland since well... X11 just does its job for me anyway. Maybe in the future?).

## Anyways, what else..?
Well I think that's all the words I have to say about this new Linux experience I've been having.

For sure I may still keep this dualboot for a while, I don't have any concrete plans to drop this off really as of now, after all only time has the final say. For now I'll probably keep this till for at least another few months, until my Kubuntu installation receives the 24.04 LTS Noble Numbat update, then I'll be making a decision.

The main reason I have gone with a Long-Term Support (LTS) release this time around mostly has to do with convenience, the last Windows-Linux dualboot I had which was on a ThinkPad T61 involved general releases of Xubuntu, another main flavor of Ubuntu except it comes with the XFCE desktop environment out of the box rather than KDE Plasma.

General non-LTS releases only have 9 months of support, although it's acknowledgable that there's plenty of time to update, I was always of the verge of ending up with an unsupported release. The main difference between now and the dualboot I had on the T61 is that my dualboot is set up on my main laptop, but still I don't really wanna bother upgrading every 6 months to the next major version, whatever that would be.

Again, just wanted to share with y'all my experience with KDE Plasma for the first 1.5 months as someone who considers themselves to be a moderate Linux user who already had other Windows-Linux dualboots on several other computers in the past, all in the form of a blog post. Nothing is perfect, but it's at least good, good job has been done out there by the KDE developers. :)

[1]: /blog/2024/01/02/finding-new-place-for-personal-data-archive.html
[2]: https://github.com/ungoogled-software/ungoogled-chromium
[3]: https://www.youtube.com/watch?v=uqPx0zHH028