---
id: truenas-scale
title: TrueNAS
description: Install Unpackerr on TrueNAS SCALE or Community Edition.
---

The TrueCharts catalog is discontinued. Install Unpackerr with Portainer, Dockge,
or a custom app.

## Portainer

On TrueNAS SCALE ElectricEel and later (and TrueNAS Community Edition), Docker
containers are supported. To simplify installation, install a container manager
such as Portainer or Dockge from the built-in application catalogue.
This guide uses Portainer.

![Portainer App Install](/img/screenshots/truenas/portainer-install.png)
![Portainer UI Open](/img/screenshots/truenas/portainer-ui.png)

Generate `docker-compose.yml` with the [Unpackerr config generator](https://notifiarr.com/unpackerr)
or write it yourself. See [Docker Compose](/docs/install/compose) for a minimal
example. Map the same download folder your Starr apps use, and set `user:` to
the correct uid and gid.

In Portainer, navigate to stacks, and add a new stack.

![Portainer Instance](/img/screenshots/truenas/portainer-instance.png)
![Stacks Section](/img/screenshots/truenas/stacks-section.png)

Name it `unpackerr` and paste the contents of your compose file.

![Stacks List](/img/screenshots/truenas/stacks-list.png)
![Create Unpackerr Stack](/img/screenshots/truenas/create-stack.png)

Confirm the host directory mapping and user/group IDs for your TrueNAS instance,
then create the stack.

![Deploy Stack](/img/screenshots/truenas/deploy-stack.png)

Portainer deploys the stack from here.
When it is running, open the unpackerr stack and review the logs.
You should see pending files for connected applications being extracted.

![Log View](/img/screenshots/truenas/log-view.png)

## TrueNAS Custom App

There may be a way to install Unpackerr directly without a container manager.
If you work that out, please [edit this page](https://github.com/Unpackerr/unpackerr.github.io/blob/main/docs/install/truenas-scale.md)
so others can benefit from your tribulations.
