---
id: freebsd
title: FreeBSD
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on a FreeBSD server.
---

import ArchiveAccess from './includes/archiveaccess.md';

1. Download a package from the [latest release](https://github.com/Unpackerr/unpackerr/releases/latest).
1. Install it with `pkg add -f` (the force flag is required because the package has
   [a bug](https://github.com/Unpackerr/unpackerr/issues/352))
1. Edit the config file at `/etc/unpackerr/unpackerr.conf`,
   or [generate one](https://notifiarr.com/unpackerr) and start it.
1. Not many folks use FreeBSD, but we can try to help if you drop by the [Discord](https://golift.io/discord).

<ArchiveAccess />

## Permissions

On FreeBSD the app runs as user `unpackerr`.
The username is hard coded in [the rc file](https://github.com/Unpackerr/unpackerr/blob/main/init/bsd/freebsd.rc.d).
If you wish to change the user, edit the rc file. This process will change and get better in the future.
