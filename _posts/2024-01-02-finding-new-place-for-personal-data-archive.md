---
# Use ## to start a subheading in the blog post.
layout: post
title: "Finding a new place for my personal data archive"
date: 2 January 2024
image: default.png # default: default.png
alt:
---
For the past two-three months, looking to reorganize my storage, I've been adventuring on finding a reliable enough storage medium for my personal data archive, from all the existing options I have.

Until now, ...well, let's start from the point that my current main computer (aka my IdeaPad 3, a laptop) only has a 256GB NVMe Samsung SSD which came out of the box and has served me fairly well over the course of the 2 years plus I've been using this laptop as my daily driver. My SSD is *currently* split into two partitions, one half which is supposed to be for the operating system (Windows), and another for "data".

A good part of the storage space used on the SSD consisted of "archived" data that were barely accessed other than me looking back at them. By extension, what if I tell you that I had archived data on every storage medium I have (and not just my main pc)?

My 2007 ThinkPad T61 (which at this point is more of a testing machine) still hosted a mostly intact backup of my data from a Toshiba Satellite I used to main but no longer own, which included especially stuff from 2017, even 2016. I've moved this backup over to a USB flash drive when I completely wiped the T61's HDD to install Windows 10 LTSB 2015, just a few months ago.

My third laptop, Lenovo G50-70, which was my daily driver from 2018-2021, also had data leftover in it, although not as many, the most "important" file I could still find was a partial RAW recording (which I've however deleted afterwards) for my [Upgrading from Windows 1.0 to Windows 10][1] video, which leads to a "fun" fact about the video which is now my most popular.

Half of the upgrade fest was done from the G50-70 (from 1.0 to XP), and then migrated the virtual machine to my main computer to keep going from XP to 10, this is due to the issues in virtualizing Windows 9x on my main computer (given that it has the 11th gen i3 CPU) on the first hand. On the other hand, my main computer can handle both virtualizing modern Windows and recording at the same time way better than my G50-70 could.

I also had archive data stored on USB flash drives, SD cards and even phone internal storage, not to say I've found data from years ago I've completely forgotten about on the latter.

## Storage options
My first (and most obvious) option was my G50-70's 1TB Western Digital HDD, due to its size, especially after I wiped the whole thing so I could format it to GPT from MBR, last fall. However, there were several disadvantages on using it when it comes to reliability, especially around the HDD's age (accompanied by noticeably slower transfer speeds). That has made me skeptical on using it as a permanent long-term archival storage option.

Later on, as I kept going through my accounts, I found an empty unused free MEGA account with 50GB of storage (the account was created prior to MEGA lowering the amount of storage for *new* free accounts). So in my mind, another possible storage medium was put on the table, considering the 50GB space as well as MEGA's end-to-end encryption (e2ee).

Even then, I'm picky when it comes to what I should store on cloud storage or not. However, I think the best-use case for cloud storage is as a backup, even partial (and by that, what I consider most important of my archives - under my own limits), to which I could resort to incase I'm travelling (being the mobile person I am during summers) or - in the worst case scenario - of a failure of my primary storage medium.

So, a third option arrives: say hello to the HP 14s-fq0xxx. It was initially bought in 2021, but lately it's been under my full possession after one of my family members bought another laptop for themselves. So, now that I *fully* own it, I've soon thought about the potential of this laptop as a data archive storage option.

The laptop is new enough, and that's just my first rationale. Although it only has a 128GB Samsung SSD, collectively my whole archive (that I could retrieve so far) is just a little bit over 30GB, so that's *still* going to last me a long while.

## Preparing the HP laptop
As soon as I got my hands on the HP 14s-fq0xxx, I've made a clean installation of Windows 11 (Home, because that's the edition the laptop came preinstalled with):

<div style="text-align: center;">
<img class="is-hidden-mobile" width="50%" height="auto" src="{{ site.url }}{{ site.baseurl }}{{ site.image_src }}hp.png">
<img class="is-hidden-widescreen" src="{{ site.url }}{{ site.baseurl }}{{ site.image_src }}hp.png">
</div>

As you could tell from the screenshot above, I've already installed several programs to this point, such as Ungoogled Chromium (my main browser), Speccy (open in the pic to show the PC specs), VLC & several others (yeah ik, such a clever choice to have Notepad++ as code editor, don't ask).

I was in the process of migrating my whole archive (as much as possible) to the HP laptop's SSD, this should explain why I had a USB flash drive connected. Nonetheless, I still didn't fully finish setting things up as of this blog post. Obviously my desktop won't look like that mess in the screenshot above, and my data organization won't be the mess that it is ow.

## Conclusion
Other than that, I think this article is pretty much complete, idk what else should I mention, but basically yes this is just only part of my entire reorganization of my entire digital workflow. My workflow used to be a mess for a very long time and I only thought about it last year in May. For most of the second half of last year I put much of my time and effort into fixing this mess together.

Like everything was a mess, I used to have accounts on 536547545 services for which I stopped caring about, created on 47765544 email addresses I created mainly on Google, but also on Outlook and even Yahoo (yes, back when it was still popular), all when I was a simple child (most of the accs were created during 2013-2016). I recently was able to fully address this - well, as much as I could (there are accounts on some services I couldn't get to delete at all, due to various reasons).

The time I felt most discouraged throughout this whole process was the first several weeks after I got [locked out of my personal Google account][2] during the summer which had many of my old stuff leftover (I was only able to restore access months later). Okay yes I admit it was partially my fault since that (despite it used to be actually my main Google account for a few years until I created the account under my alias) I didn't bother to update the recovery methods, but I have reasons to believe it was also Google's fault on their part (I only had access to the recovery email, but was not provided the option to use it)

Otherwise I would've been able to address this quicker by now. Going back on topic, all that said, it's good to get rid of the old and make room for the new. It might not reflect in my workflow too much but every additional amount of free space in my daily-use devices does matter in some way.

[1]: https://youtu.be/XscntGlgvCc
[2]: https://wetdry.world/@lynxmic/110935032773493091