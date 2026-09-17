---
id: upgrading
title: Upgrading to v1
description: What changed in Unpackerr v1 and how to upgrade an existing install.
---

Unpackerr v1 (the next release after 0.16) adds a built-in web UI and an HTTP API.
Starr apps, folders, and hooks can be edited in the browser. Environment variables
still work, but values owned by env are locked in the UI, so most people should
move those settings into the config file.

If you are on 0.16.x or earlier today, read this page before you pull `latest`.

## What changed

- A web UI on port **5656** (queue, history, logs, settings, API docs).
- The HTTP server starts whenever `listen_addr` is set. The default is
  `0.0.0.0:5656`. Set `listen_addr = ""` to turn the server off.
- First start with an empty `ui_password` prints a temporary `admin` password
  in the log. Change it in the UI. It is not shown again. `unpackerr --reset`
  writes a new one and exits.
- Saving settings from the UI rewrites the config file. The process user must
  be able to write that file.
- Starr apps, folders, webhooks, and command hooks use named keys
  (`[sonarr.uhd]`, env `UN_SONARR_uhd_URL`). Old `[[sonarr]]` / `[[folder]]`
  tables still load as `0`, `1`, ….
- **Whisparr** is no longer its own app. Treat it as Radarr. See
  [Whisparr](#whisparr).
- Prometheus scrapes at `/metrics` must send an API key with
  `system:metrics:read` (`Authorization: Bearer` or `X-Api-Key`).
- Docker: mount `/config` if you want the UI to persist settings. Unpackerr
  writes `/config/unpackerr.conf` when that directory exists.

The extractor, Starr polling, and folder watch behave as they did. This release
is mostly about operating the app from a browser instead of a pile of `UN_*`
variables.

## Config file permissions

The UI Save button rewrites the active config file. If that file (or its
directory) is not writable, saves return an error and the change does not stick.

### Linux packages

The service user is `unpackerr`. Packages install `/etc/unpackerr/unpackerr.conf`
mode `0644` and the post-install script chowns leftover `root:root` files.

If you created or edited the file as root, or Save fails:

```bash
sudo chown unpackerr:unpackerr /etc/unpackerr /etc/unpackerr/unpackerr.conf
sudo chmod 0755 /etc/unpackerr
sudo chmod 0644 /etc/unpackerr/unpackerr.conf
sudo systemctl restart unpackerr
```

If you overrode `User=` / `Group=` in a systemd drop-in, chown the file to
**that** user instead.

Logs: `journalctl -u unpackerr -e` (temporary UI password is in here on first
start). Open `http://<host>:5656/`.

### Docker and Compose

Mount an appdata directory on `/config`, and run as the same uid:gid that owns
that directory and your downloads.

```yaml
    ports:
      - "5656:5656"
    volumes:
      - /mnt/appdata/unpackerr:/config
      - /mnt/storage/downloads:/downloads
    user: "99:100"
```

If `/config/unpackerr.conf` was created as root and you later set `user:`,
chown the host folder:

```bash
sudo chown -R 99:100 /mnt/appdata/unpackerr
```

Use the uid:gid from `user:` (unRAID nobody is `99:100`). Hotio images use
`PUID`/`PGID` instead of `user:`; chown to those ids.

Drop `UN_SONARR_*`, `UN_RADARR_*`, and the other Starr/hook env vars after the
settings live in the file. While they remain set, the UI shows those fields as
coming from the environment and will not Save over them.

### Windows and macOS

Tray and menu-bar installs already write under your user
(`~/.unpackerr` or the folder you chose). No extra chmod is usually needed.
Open the UI on `http://127.0.0.1:5656/` after upgrade. The first password is in
**Logs**.

### Seedbox / no-root binary

Keep the config next to the binary (`~/unpackerr/unpackerr.conf`) owned by
your shell user (`chmod 0600` is fine). Listen on a port your account may bind;
the default `0.0.0.0:5656` is fine on a seedbox if the provider allows it.

## unRAID

The [Community Applications](https://github.com/selfhosters/unRAID-CA-templates)
template used to be env-var only: Sonarr/Radarr/Lidarr URLs, API keys, timers,
and a log path, with no `/config` and no port. v1 wants an appdata folder, port
**5656**, and almost none of those variables.

:::tip[Easiest path]
Remove the Unpackerr container (keep the downloads mount path in mind) and
install it again from Apps. The updated template adds `/config`, publishes
5656, and sets `--user 99:100`. Then configure Starr apps in the web UI.
:::

### Keep the existing container

If you would rather edit the current docker:

1. Enable **Advanced View**.
1. Add a path: container `/config`, host `/mnt/user/appdata/unpackerr/`
   (rw).
1. Add a port: container `5656`, host `5656`.
1. Copy any Starr URLs and API keys you still need (screenshot or notepad).
   Removing the env vars before they exist in a config file **drops** those
   apps until you add them in the UI.
1. Remove the old variables: `UN_DEBUG`, `UN_LOG_FILE`,
   `UN_SONARR_*`, `UN_RADARR_*`, `UN_LIDARR_*`, `UN_TIMEOUT`, `UN_PARALLEL`,
   `UN_INTERVAL`, `UN_DELETE_DELAY`, `UN_START_DELAY`, `UN_RETRY_DELAY`, and
   any extra `UN_*` you added. Leave the **Downloads Location** path mount.
1. Extra Parameters should include `--user 99:100` (or the same uid:gid as
   Sonarr/Radarr). The golift image does **not** use `PUID`/`PGID`.
1. Apply. First start writes `/config/unpackerr.conf`. Open the WebUI, log in
   as `admin` with the password from the container log, add your Starr apps,
   Save.

If Save fails, the appdata folder is probably still `root`. From a terminal:

```bash
chown -R 99:100 /mnt/user/appdata/unpackerr
```

Match `99:100` to Extra Parameters.

The download mount must still be identical to Sonarr/Radarr/Lidarr. That has
not changed; see [unRAID](/docs/install/unraid).

## Whisparr

Whisparr speaks the Radarr API. In v1 it is a Radarr instance.

In the config file, rename the table and optionally keep the label:

```toml
# before
[[whisparr]]
  url = "http://whisparr:6969"
  api_key = "32characters"

# after
[radarr.whisparr]
  name = "Whisparr"
  url = "http://whisparr:6969"
  api_key = "32characters"
```

Environment variables: `UN_WHISPARR_*` becomes `UN_RADARR_whisparr_*`
(for example `UN_RADARR_whisparr_URL`). Prefer putting this in the file and
dropping the env vars.

## After upgrade

1. Confirm the UI loads and you can Save a harmless setting (or a Starr
   instance).
2. Watch one completed download extract the way it did on 0.16.
3. If you scrape Prometheus, add an API key with `system:metrics:read`.
4. Optional: open the Starr (or folder/hook) page and Save once so named
   tables replace leftover `[[sonarr]]` arrays.

Day-to-day use after that is on the [Web UI](/docs/install/web-ui) page
(password reset, log lines, reverse proxy).

Need a hand? [Go Lift Discord](https://golift.io/discord) or
[GitHub issues](https://github.com/Unpackerr/unpackerr/issues/new).
