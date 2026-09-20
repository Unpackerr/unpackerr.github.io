---
id: unraid
title: unRAID
description: Install Unpackerr on your unRAID server!
---

# unRAID Install

Unpackerr is available in
[Community Applications](https://github.com/selfhosters/unRAID-CA-templates/blob/master/templates/unpackerr.xml)
on unRAID. Install it from the **Apps** page.

The golift template mounts **appdata** at `/config`, publishes port **5656** for
the web UI, and runs as `--user 99:100`. Configure Sonarr, Radarr, Lidarr, and
the rest in the browser after install. Do not put Starr URLs and API keys back
into environment variables unless you want those fields locked in the UI.

Upgrading an existing 0.x container? See [Upgrading to v1](/docs/install/upgrading#unraid).

![Community Applications Unpackerr install](/img/screenshots/unraid/install1.png "install")

On the install screen, set **Downloads Location** so it matches your Starr apps
(next section). Leave **appdata** at `/mnt/user/appdata/unpackerr/` unless you
prefer another folder. Apply, then open the WebUI.

First login is user `admin`. The password is printed once in the container log
(`Generated temporary UI password`). Change it in Settings.

:::tip[Download Location]
The most common misconfiguration on unRAID, by far, and it's not even a close
second, is having the correct path mounted for your download location. As you
see in the screenshot below, a host path of `/mnt/user/downloads` with a
container path of `/downloads` is almost certainly not what you want.
**Do this:**

1. Go into Unraid.
1. Click on Docker.
1. Enable Advanced View; toggle is in the top-right.

   ![Enable Docker advanced view](/img/screenshots/unraid/advancedview.png "advanced view")
1. Look at the mounts for Sonarr and/or Radarr.
   You're looking for the one that begins with `/data <->` or `/downloads <->`.
1. You want to make sure Unpackerr looks *identical*. See below.

![Starr app volume mounts](/img/screenshots/unraid/starrmounts.png "starr mounts")

If the highlighted portions above are not identical to the one below, then
things are bound to work poorly. In other words, if Unpackerr has
`/downloads <-> /mnt/user/downloads` and Sonarr has
`/data <-> /mnt/user/downloads`, Unpackerr will not be able to find your files.
In this hypothetical, you must edit the Unpackerr `/downloads` mount, and
change the _Container Path_ to `/data` so it matches Sonarr.

![Unpackerr volume mount](/img/screenshots/unraid/unpackerrmount.png "unpackerr mount")
:::

## Permissions

The template Extra Parameters already include `--user 99:100` (unRAID
`nobody:users`), which matches typical linuxserver Starr containers. Change it
if your Sonarr/Radarr uid:gid is different. **Other containers use `PUID` and
`PGID`; the golift image does not.**

![Unpackerr Extra Parameters UID and GID](/img/screenshots/unraid/extraparameters.png "extra parameters")

The appdata folder and the config file inside it must be writable by that
same user, or the UI cannot Save. If needed:

```bash
chown -R 99:100 /mnt/user/appdata/unpackerr
```

## Video Guide

This guide is provided by a community member, [@Celsian](https://www.youtube.com/@Celsian),
consider giving him a sub and a like. It was recorded against the old env-var
template; ignore the Sonarr/Radarr variable fields and use the web UI instead.
The download-path matching still applies.

<iframe height="500" width="100%" src="https://www.youtube.com/embed/FfJqgm69ydA"
frameborder="0" allowfullscreen title="UnRAID Video Guide"
allow="accelerometer: autoplay:clipboard-write; encrypted-media;gyroscope; picture-in-picture" />
