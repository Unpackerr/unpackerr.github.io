---
id: freebsd
title: FreeBSD
description: Install Unpackerr on a FreeBSD server.
---

import ArchiveAccess from './includes/archiveaccess.md';

1. Download a package from the [latest release](https://github.com/Unpackerr/unpackerr/releases/latest).
1. Install it with `pkg add`. Older packages were labeled with the wrong architecture
   ([issue 352](https://github.com/Unpackerr/unpackerr/issues/352)); if `pkg` refuses
   the file, use `pkg add -f`.
1. Edit the config file at `/etc/unpackerr/unpackerr.conf`,
   or [generate one](https://notifiarr.com/unpackerr) and start it.
1. Not many folks use FreeBSD, but we can try to help if you drop by the [Discord](https://golift.io/discord).

<ArchiveAccess />

## Permissions

On FreeBSD the app runs as user `unpackerr`.
The username is hard coded in [the rc file](https://github.com/Unpackerr/unpackerr/blob/main/init/bsd/freebsd.rc.d).
If you wish to change the user, edit the rc file. This process will change and get better in the future.
