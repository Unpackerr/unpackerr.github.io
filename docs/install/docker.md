---
id: docker
title: Docker Basics
description: Install Unpackerr using Docker!
---

import ConfigFile from './includes/dockerconfigfile.md';
import DataMount from './includes/dockerdatamount.md';

# Docker Installation

If you're using Docker Compose, this page may still contain valuable information for you. Please read it.

## Availability

Images are available on DockerHub and GHCR.

### DockerHub

GoLift software has a [Docker Open Source Sponsorship](https://docs.docker.com/trusted-content/dsos-program/).
That means there are **no pull limits for any [`golift/*` image on Docker Hub](https://hub.docker.com/u/golift).**
Even if you're not logged in.

This project builds automatically on [Docker Hub](https://hub.docker.com/r/golift/unpackerr) and creates
[ready-to-use multi-architecture images](https://hub.docker.com/r/golift/unpackerr/tags).
The `latest` tag is always a [tagged release on GitHub](https://github.com/Unpackerr/unpackerr/releases).

- Pull the DockerHub image with this command:
  ```shell
  docker pull golift/unpackerr:latest
  ```

### GHCR

GitHub Actions also builds a Docker image and stores it in the
[GitHub container registry](https://github.com/Unpackerr/unpackerr/pkgs/container/unpackerr).
This image is effectively identical to the DockerHub version; use whichever you prefer.
The `latest` tag is always a [tagged release on GitHub](https://github.com/Unpackerr/unpackerr/releases).

- Pull the GHCR image with this command:
  ```shell
  docker pull ghcr.io/unpackerr/unpackerr:latest
  ```

## Example

```shell
docker pull golift/unpackerr
docker run -d -v /mnt/HostDownloads:/downloads \
  -e "UN_SONARR_0_URL=http://sonarr:8989" \
  -e "UN_SONARR_0_API_KEY=kjsdkasjdaksdj" golift/unpackerr
docker logs <container id from docker run>
```

## Config File Example

<ConfigFile />

```shell
docker pull golift/unpackerr
docker run -d -v /mnt/HostDownloads:/downloads -v /folder/with/config/file:/config golift/unpackerr
docker logs <container id from docker run>
```

## Data Mount

<DataMount />

## More Dockers

If you want a container that has a bit more to it, you can try a third party option.
The container provided by golift is built `FROM scratch` so it has nothing more in the
container than a binary and a config file (with our defaults).

- **[@hotio](https://github.com/hotio) maintains a
    [Custom Docker Container](https://hub.docker.com/r/hotio/unpackerr)
    for Unpackerr.** ([repo](https://github.com/hotio/unpackerr))

## Permissions

The `golift` docker container runs as uid 0 (root) by default. This is probably not what you want.
Make sure to set the correct uid and gid with the `--user` parameter. Example:

```bash
# This command runs golift/unpackerr with UID 1000 and GID 100.
docker run --user 1000:100 -d -v /mnt/data:/data -v /mnt/config:/config golift/unpackerr
```

**Replace 1000:100 with the correct uid:gid for your environment.**
One of them must provide write access to your archives.

When using compose, add `user: 1000:100` to the service definition.
Find examples in the [Docker Compose instruction](compose).

### Hotio

The primary difference between the golift and hotio containers is how you set the uid and gid.
Hotio does not use the `--user` parameter and instead sets the UID and GID with environment
variables. *Passing the `--user` parameter to the hotio container will render it inoperable.*
Pass the `PUID` and `PGID` environment variables when using hotio's container. Example:

```bash
# This command runs hotio/unpackerr with UID 1000 and GID 100.
docker run -e PUID=1000 -e PGID=100 -d -v /mnt/data:/data -v /mnt/config:/config hotio/unpackerr
```

## Folder Watcher

The Folder Watch feature uses `inotify` (a.k.a. `fsnotify`) to notice new
archives. Each watch path has its own `interval`. The default is `0s`, which
means filesystem events only — Unpackerr does **not** poll.

Docker bind mounts and CIFS often drop or delay those events, so items never
appear in the queue. Turn polling on for that path:

- Web UI: **Settings → Folders** → **Poll interval** (try `1s`).
- Config: `interval = "1s"` under `[folder.downloads]`.
- Env: `UN_FOLDER_downloads_INTERVAL=1s` (same key as the table).

Leave `interval` at `0s` when native fsnotify works. Polling increases disk
reads. A folder with a poll interval uses the poller only; other folders keep
fsnotify.

v0.x Docker installs auto-polled every 1s via global `folders.interval`
(`UN_FOLDERS_INTERVAL`). That setting is gone. An old `[folders] interval`
line in the file is ignored.

If Unpackerr starts extracting files that are still downloading, raise
`start_delay`, or set `wait_extensions` (for example `.part`, `.crdownload`)
on that folder. Waiting items are rechecked every 5 seconds without turning
the poller on. See [Watch folders](configuration#watch-folders).

**Alternatively, run Unpackerr as a native service instead of in Docker.**
