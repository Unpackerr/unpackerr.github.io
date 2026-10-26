---
id: web-ui
title: Web UI
description: Use the built-in Unpackerr web UI, confirm it is running, and reset the password.
---

Unpackerr v1 ships a browser UI on port **5656**. Use it to watch the extract
queue, read history and logs, and configure Starr apps, folders, and hooks. The
HTTP API is the same server. Coming from 0.16 or earlier? Read
[Upgrading to v1](/docs/install/upgrading) first.

Do not edit the config file unless you have a reason. Save in the UI writes
the file for you. Environment variables still win: a field owned by `UN_*` is
locked in the form until you remove that variable.

## What you get

- **Dashboard** — live extract queue (retry / forget) and Starr poll counts.
  Progress shows archive index, speed/ETA, and countdowns (start delay,
  retry, folder cleanup). Folder WAITING rows show the blocking filename
  when `wait_extensions` is set.
- **History** — completed extracts, with delete and clear.
- **Logs** — follow the app log in the browser (and download rotated files).
- **Settings** — general, Starr, folders, webhooks, command hooks, web server.
  Each Starr or hook row has a Test button that probes without saving.
- **System** — version, hostname, OS, and the folders Unpackerr is logging to.
- **API docs** — OpenAPI for the same process (`/api/openapi.json`).

Windows and macOS also get a tray / menu-bar **WebUI** link that opens the
local URL, plus **Change Password** and **View logs**.

Languages: English, Spanish, Greek, Dutch.
[Need more? Ask](https://github.com/Unpackerr/unpackerr/issues/new).

## Make sure it is running

The HTTP server starts whenever `[webserver]` `listen_addr` is set. The default
is `0.0.0.0:5656` (all interfaces). An empty string turns the server **off**.

```toml
[webserver]
  listen_addr = "0.0.0.0:5656"
```

Env equivalent: `UN_WEBSERVER_LISTEN_ADDR=0.0.0.0:5656`. Docker and Compose
must **publish** that port (`5656:5656`). unRAID templates add the port for
you; see [unRAID](/docs/install/unraid).

Then open `http://<host>:5656/` (or `http://127.0.0.1:5656/` on the same
machine). Tray installs: click **WebUI**.

:::tip[Firewall]
`0.0.0.0:5656` is reachable on the LAN. If the page never loads, check the
host firewall and that nothing else is bound to 5656. Binding
`127.0.0.1:5656` is local-only on purpose.
:::

### What to look for in the log

On a healthy start you want lines like these (wording is exact):

```text
 => Starting webserver. Listen address: http://0.0.0.0:5656/ (0 upstreams) auth:password
Generated temporary UI password for user admin: <password>
Change it with --reset or the tray menu. It will not be shown again.
```

The temporary password line appears only when `ui_password` is empty (first
start, or an empty `filepath:` password file). It is printed **once**. Copy it
before you rotate or truncate the log.

A first start may also print `Generated an admin API key named "…"`. That key
is for `/metrics` and scripts, not for the login form.

If the server is off:

```text
 => Webserver Disabled
```

`listen_addr` is empty. Set it and restart.

If the bind failed:

```text
Web Server Failed: listen tcp …: bind: address already in use
```

Something else owns the port, or the process cannot bind it.

`Could not persist config to …` means the file (or `/config` directory) is not
writable. Saves from the UI will fail until you fix ownership. Linux, Docker,
and unRAID chmod notes live on [Upgrading to v1](/docs/install/upgrading).

### Where the log is

- **Linux package:** `journalctl -u unpackerr -e`
- **Docker / unRAID:** container log (`docker logs unpackerr`, or the unRAID
  log view)
- **Windows / macOS tray:** **View logs**
- **Config:** `log_file` (and `webserver.log_file` for HTTP access logs)

Once you can log in, the UI **Logs** page tails the same files. System → Logs
shows the parent folder(s) if you are hunting on disk.

## First login

User is **`admin`** unless you set a username in `ui_password` (`user:pass` or
`filepath:` with `user:pass` in the file). Password is the generated value
from the log, or whatever you put in `ui_password` /
`UN_WEBSERVER_UI_PASSWORD`.

Change it under **Settings → Web server** after you get in. Minimum length is
8 characters. The plaintext never leaves the browser; the UI sends a hash.

:::danger[Empty env password]
Do not set `UN_WEBSERVER_UI_PASSWORD=` (empty). A present empty env value
wipes a stored hash on the next start. Omit the variable entirely if the
password lives in the config file.
:::

## Reset the password

You still know it: **Settings → Web server**, or tray **Change Password**.
Those apply live and rewrite the file.

You forgot it: stop the process, run `unpackerr --reset`, start it again. `--reset`
writes a new password into the config file, prints it, and **exits**. It does
not keep running as the daemon.

Linux package:

```bash
sudo systemctl stop unpackerr
sudo -u unpackerr unpackerr --reset
sudo systemctl start unpackerr
```

Docker / Compose (same `/config` mount as the running container):

```bash
docker compose stop unpackerr
docker compose run --rm unpackerr --reset
docker compose up -d
```

Or a one-shot with the golift image:

```bash
docker run --rm -v /mnt/user/appdata/unpackerr:/config golift/unpackerr --reset
```

Then start the usual container. unRAID: use that `docker run` with your
appdata path, or stop the container and run `--reset` from a console that has
the same `/config` mount.

`--reset` keeps the existing username when one is stored. The new password is
on stdout:

```text
Reset UI password for user "admin" and wrote /config/unpackerr.conf
New "admin" user password: <password>
```

If `UN_WEBSERVER_UI_PASSWORD` is set, that env value overlays the file on the
next start and `--reset` will not stick. Remove the variable, then reset.

`filepath:/path/to/ui.pass` is allowed: live login reads the file, the config
keeps the `filepath:` string. An empty file is rejected on Save (400). At
startup an empty file still generates a temporary `admin` password so you are
not locked out.

## Settings that stay locked

Grey fields come from the environment. Saving will not change the running
value. Drop `UN_SONARR_*`, `UN_RADARR_*`, `UN_WEBSERVER_UI_PASSWORD`, and the
rest after those settings live in the file. Test on a Starr or hook row is
also blocked when the URL, API key, or command is env-owned.

Starr API keys (and most other strings) accept `filepath:/path/to/secret`.
Save and Test expand the file for the live client; the config keeps the
prefix. See [Secrets and Passwords](/docs/install/configuration#secrets-and-passwords).

## Restart required

Most settings apply as soon as you Save. Changing `listen_addr`, TLS certs,
`urlbase`, metrics, pprof, or the HTTP log file needs a process restart. The
Save response sets `restartRequired`; restart the service or container when
you are done editing.

## Reverse proxy

Put Unpackerr behind nginx, Caddy, or SWAG if you want TLS or a subfolder.

- Set `urlbase` to the public path (`/` on a subdomain, `/unpackerr/` on a
  subfolder).
- Add the proxy IP or Docker gateway to `webserver.upstreams` so
  `X-Forwarded-For` / `X-Forwarded-Proto` are trusted (secure cookies, logs,
  optional header auth).
- Proxy **WebSocket** `GET /ws` (or `/unpackerr/ws`) with Upgrade headers.
  Queue, progress, history, and log follow use it.

A copy-pasta nginx example is in the
[repo](https://github.com/Unpackerr/unpackerr/blob/main/examples/nginx.conf.example).

Header auth (`ui_password = "webauth:X-Webauth-User"`) and `noauth` only work
from an address in `upstreams`, so you cannot lock yourself out from a
non-proxy IP.

## API keys and metrics

Login uses the UI user. Prometheus and scripts use an API key
(`X-Api-Key` or `Authorization: Bearer`). Create keys under **Settings → Web
server**. Scrapes of `/metrics` need a key with `system:metrics:read`.

Need a hand? [Go Lift Discord](https://golift.io/discord) or
[GitHub issues](https://github.com/Unpackerr/unpackerr/issues/new).
