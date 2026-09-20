---
id: configuration
title: Application Configuration
description: Unpackerr configurations explained.
---

import Generated from './generated/index.md';
import Global from './generated/global.md';
import Footer from './generated/footer.md';

This is where to learn what each config item is, the default
values for each item, and the name to use in an environment variable.
Expand the blue sections to see excerpts from the
[example docker-compose.yml](https://github.com/Unpackerr/unpackerr/blob/main/examples/docker-compose.yml)
and [example config](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example) files.

## Web UI

:::danger[Web UI]

- Added in v1.0.0 (September 2026).

Most users should use the Web UI to configure Unpackerr.
While you can use this page for reference, you should avoid editing the config file.

- See [Web UI page](web-ui).

:::

Unpackerr has a built in Web UI where you can configure all the settings using a validated form.
The Web UI also makes it easy to see what Unpackerr is doing live and to view the extraction history.
This page exists from a time when configuration required editing a file. Now it's for power users.

**Use the web interface. Don't edit the config file.**

## Config

- Setting a log file is strongly recommended. This makes it much easier to troubleshoot problems.
- To use a config file in Docker, mount `/config` to the container and Unpackerr will write a config file.
  - Update the new file at `/config/unpackerr.conf` and restart the container.
- When using a config file you must uncomment at minimum the `[header.key]` <font color="gray">
  ex. `[radarr.radarr]`</font>, `url` and `api_key`.
- Uncomment means remove the hash `#` at the beginning of the line.
- The config file format is [TOML](https://toml.io).
  - Indentation is not important like YAML files, but it's used for ease of readability.
  - You may use `"` or `'` or `'''` or `"""` to wrap strings. Recommend `'` for paths.

### Two+ Instances

When adding a second (or third+) instance to the __config file__, use another
named table <font color="gray">ex. `[sonarr.0]`, `[sonarr.uhd]`</font> and the
`url`/`api_key`/etc under it. Environment variables use that same key:
`UN_SONARR_0_URL` or `UN_SONARR_uhd_URL`. Array rows from older configs load as
keys `0`, `1`, …. There is no limit to the number of supported instances. This
notation works for all Starr apps, folders, command hooks, and webhooks.

<details>
  <summary>Config examples with multiple instances.</summary>

- Config File example with two Radarrs and two Folders.

```toml
[radarr.0]
 url = "http://radarr"
 api_key = "32characters"

[radarr.uhd]
 name = "4K"
 url = "http://radarr4k"
 api_key = "32morecharacters"

[folder.0]
 path = "/data/downloads/software/"

[folder.games]
 path = "/data/downloads/games/"
```

- Environment Variable example with two Radarrs and two Folders setting the same values as above.

```shell
UN_RADARR_0_URL=http://radarr
UN_RADARR_0_API_KEY=32characters
UN_RADARR_uhd_URL=http://radarr4k
UN_RADARR_uhd_API_KEY=32morecharacters
UN_FOLDER_0_PATH=/data/downloads/software/
UN_FOLDER_games_PATH=/data/downloads/games/
```

</details>

Anything that has a header like `[sonarr.0]` or `[folder.software]` can be repeated with a unique key.

### Whisparr

- Changed in v1.0.0 (September 2026).

Whisparr uses the Radarr API. Configure it as `[radarr.whisparr]` (env `UN_RADARR_whisparr_*`).
Set `name = "Whisparr"` if logs and hooks should keep that label.

### Named instances

- Added in v1.0.0 (September 2026).

Starr apps, folders, webhooks, and command hooks are identified by a short key, not by list position.
In the config file use `[sonarr.uhd]`, `[folder.software]`, `[webhook.discord]`; in env use `UN_SONARR_uhd_URL`,
`UN_FOLDER_software_PATH`, `UN_WEBHOOK_discord_URL`. The optional `name` on Starr and hooks is only a label
(`name = "Starrs & Stripes"`). Existing `[[sonarr]]` / `[[folder]]` / `[[webhook]]` tables still load as keys
`0`, `1`, …. Open that section in the web UI and click Save: Unpackerr rewrites the file to named tables automatically.

### Watch folders

- Changed in v1.0.0 (September 2026).

Folder watch is not Starr. Each `[folder.<key>]` is a path Unpackerr extracts
on its own. The generated tables below list every option.

**Poll interval** is per folder (`interval`, env `UN_FOLDER_<key>_INTERVAL`).
Default `0s` uses filesystem events. Set `1s` (or similar) on Docker and CIFS
when new archives never show in the queue. Global `folders.interval` /
`UN_FOLDERS_INTERVAL` is gone; leftover `[folders] interval` is ignored.
Details: [Docker Folder Watcher](docker#folder-watcher).

**After a restart**, recent folder history returns to the live queue the same
way Starr items do: EXTRACTED still waiting on `delete_after`, EXTRACTFAILED
retries, interrupted EXTRACTING, QUEUED, and WAITING after a retry. A path
you removed from config is not restored. Windows matches watch paths without
regard to drive-letter case.

**Incomplete downloads:** `wait_extensions` keeps the item WAITING while a
matching file exists in that item's top folder (`.part`, `.crdownload`, …).
Nested paths are not scanned. The queue shows the blocking filename.
Recheck is every 5s and does not enable the poller.
Env: `UN_FOLDER_<key>_WAIT_EXTENSION_0=.part`.

**Empty folders:** `skip_empty` (env `UN_FOLDER_<key>_SKIP_EMPTY`) drops
archive-free folders after `start_delay` with no history row and no webhook.

{/* The Global content is generated from here: https://github.com/Unpackerr/unpackerr/tree/main/init/config */}
<Global />

## Secrets and Passwords

If a wrong password is provided, the entire archive must
be read before we know it's a bad password.
Providing many passwords here can drastically slow down
extractions and cause extra disk IO. You may also specify
a password file by providing a "password" in this format: `filepath:/path/to/passwords.txt`.
The file must contain 1 password per line.

:::info[Other Secrets]
You may store any string parameter (except time intervals) into a separate file
by setting the value to `filepath:/path/to/file.txt`. In other words, if you want
your Radarr API key to be read from a separate file, instead of storing it directly
in the config file or environment variables you can do this:

```toml
[radarr.0]
  url = "https://some.url/radarr"
  api_key = "filepath:/etc/secrets/radarr.txt"
```

Or if using environment variables:

```shell
UN_RADARR_0_API_KEY=filepath:/etc/secrets/radarr.txt
```

Then store the API key (and only the API key) in `/etc/secrets/radarr.txt`.

_<font color="gray">This feature was added in Unpackerr v0.14.0.</font>_
:::

{/* This content is generated from here: https://github.com/Unpackerr/unpackerr/tree/main/init/config */}
<Generated/>

## Event IDs

Event IDs are used in command hooks and webhooks.

`0` = all, `1` = queued, `2` = extracting, `3` = extract failed, `4` = extracted,
`5` = imported, `6` = deleting, `7` = delete failed, `8` = deleted, `9` = nothing extracted

The `nothing extracted` event (`9`) only fires for the folder watcher, not Starr apps.

---

<Footer />
