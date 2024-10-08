---
id: unraid
title: unRAID
pagination_prev: install/docker
pagination_next: install/configuration
description: Install Unpackerr on your unRAID server!
---

# unRAID Install

Unpackerr is available in the
[Community Applications](https://github.com/selfhosters/unRAID-CA-templates/blob/main/templates/unpackerr.xml)
on unRAID. Install it from the `Apps` page; see screenshot that follows.

![](/img/screenshots/unraid/install1.png "install")

On the install screen, fill in the `URL` and `API_KEY` for one or more of the Starr apps.

:::note Multiple Instances
If you have, for instance, two Radarrs, you can simply add two new variables:
`UN_RADARR_1_URL` and `UN_RADARR_1_API_KEY`. If you have 3, then increase
the `1` to a `2` and so on. This works for all starr apps, folders, webhooks and command
hooks. There is no limit to how many you may configure.
:::

It's also recommend that you set a log file.
It's recommended to put it in your downloads location, and an example follows.

![](/img/screenshots/unraid/bindvolume.png "bind volume")

:::tip Download Location
The most common misconfiguration on unRAID, by far, and it's not even a close second, is
having the correct path mounted for your download location. As you see in the screenshot above,
it's set to `host:/mnt/user/downloads` and `container:/downloads`. This is almost certainly
not what you want. **Do this:**

1. Go into Unraid.
1. Click on Docker.
1. Enable Advanced View; toggle is in the top-right. ![](/img/screenshots/unraid/advancedview.png "advanced view")
1. Look at the mounts for Sonarr and/or Radarr.
   You're looking for the one that begins with `/data <->` or `/downloads <->`.
1. You want to make sure Unpackerr looks *identical*. See below.

![](/img/screenshots/unraid/starrmounts.png "starr mounts")

If the highlighted portions above are not identical to the one below, then things are bound to work poorly.
In other words, if Unpackerr has `/downloads <-> /mnt/user/downloads` and Sonarr has
`/data <-> /mnt/user/downloads`, Unpackerr will not be able to find your files. In this hypothetical, you
must edit the Unpackerr `/downloads` mount, and change the _Container Path_ to `/data` so it matches Sonarr.

![](/img/screenshots/unraid/unpackerrmount.png "unapackerr mount")
:::

## Permissions

Set the UID and GID by adding `--user uid:gid` to the `Extra Parameters`
section of the unraid template after enabling the `Advanced` view.
![](/img/screenshots/unraid/advancedview.png "advanced view")
You must make these match your starr app so hard links work correctly.
**Other containers, use env variables such as `PUID` and `PGID`, but the
Go Lift unpackerr container does not use these.**
e.g. If Sonarr has `PUID` of `99` and `PGID` of `100`, then you must
add **`--user 99:100`** to `Extra Parameters` as shown below.

![](/img/screenshots/unraid/extraparameters.png "extra parameters")

## Video Guide

This guide is provided by a community member, [@Celsian](https://www.youtube.com/@Celsian),
consider giving him a sub and a like.

<iframe height="500" width="100%" src="https://www.youtube.com/embed/FfJqgm69ydA"
frameborder="0" allowfullscreen title="UnRAID Video Guide"
allow="accelerometer: autoplay:clipboard-write; encrypted-media;gyroscope; picture-in-picture" />
