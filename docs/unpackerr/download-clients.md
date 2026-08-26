---
id: download-clients
title: Download Clients
description: How download clients relate to Unpackerr.
---

Unpackerr does not talk to torrent or Usenet clients. It polls Starr app queues
and optionally watches folders. The client only matters for categories, paths,
and whether it already unpacks the download.

## Categories and labels

Unknown queue items are often missing a category (or label/tag, depending on
the client). Configure categories in each Starr app so downloads are associated
with the right instance. See the [FAQ](/docs/unpackerr/faq) for unknown items.

## Paths

The download client, Starr apps, and Unpackerr must see the same download path
inside their containers (or on disk). See [Troubleshooting](/docs/unpackerr/troubleshooting)
for good and bad mount examples.

## Do not double-unpack

If the download client already unpacks archives, Unpackerr has nothing to extract.
Leave client unpacking **or** use Unpackerr; not both.

## SABnzbd

SABnzbd can unpack on its own. If that is enough, you do not need Unpackerr for
those downloads.

- Navigate to [Job Actions](https://sabnzbd.org/wiki/extra/job-options) in
  [Categories](https://sabnzbd.org/wiki/configuration/4.2/categories)
- Set the value to `+Unpack` or `+Delete`

## NZBGet

[NZBGet](https://nzbget.com/) is actively maintained again. Unpackerr is still
useful if NZBGet is not unpacking completed jobs, or if you want Starr-queue
driven extraction and cleanup.
