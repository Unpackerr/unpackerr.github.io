---
id: homepage
title: Homepage
description: Show Unpackerr queue counts on a Homepage dashboard.
---

[Homepage](https://gethomepage.dev/) can show Unpackerr queue counts with its
[custom API widget](https://gethomepage.dev/widgets/services/customapi/).
`GET /api/stats` returns those counts as JSON.

## API key

The widget calls Unpackerr on a timer. Give it a key from **Settings → Web
server**. The header is `X-Api-Key`. `Authorization: Bearer` plus the same
key also works. Details are on
[API keys and metrics](/docs/install/web-ui#api-keys-and-metrics).

1. Under **Custom roles**, add a role named `homepage` and select
   `system:stats:read`.
2. Under **API keys**, add a key, assign the `homepage` role, and
   **Generate** the secret. Save, then copy the key into `services.yaml`.

A key on the built-in `admin` role can read stats as well. The `homepage`
role above is limited to this endpoint.

## services.yaml

Homepage fetches `url` from the Homepage process. That address has to open
from the Homepage container or host. When both apps share a Docker network,
use the Unpackerr service name and port `5656`. `href` is the link people
click, so that one can be the public site.

With `urlbase` set to `/unpackerr`, the stats path is
`http://unpackerr:5656/unpackerr/api/stats`.

```yaml
- Unpackerr:
    icon: unpackerr
    href: https://unpackerr.example.com
    description: Automated Archive Extractions
    widget:
      type: customapi
      url: http://unpackerr:5656/api/stats
      headers:
        X-Api-Key: your-api-key
      refreshInterval: 10000
      display: block
      mappings:
        - field: queued
          label: Queued
          format: number
        - field: extracting
          label: Extracting
          format: number
        - field: finished
          label: Finished
          format: number
        - field: failed
          label: Failed
          format: number
```

`icon: unpackerr` is the
[dashboard icon](https://dashboardicons.com/icons/unpackerr).
`refreshInterval` is milliseconds. `10000` is ten seconds, which matches the
widget default.

## Fields

`queued`, `waiting`, `extracting`, `extracted`, `imported`, `deleted`, and
`failed` are items in that state right now.

| Field | Meaning |
| --- | --- |
| `queued` | Queued for extract. |
| `waiting` | Waiting, before the extract queue. |
| `extracting` | Extract in progress. |
| `extracted` | Extracted, waiting on import. |
| `imported` | Imported by a Starr app. |
| `deleted` | Deleted, or a delete still running. |
| `failed` | Extract failed, or delete failed. |

Items with nothing to extract are left out of these counts.

`finished` and `retries` keep climbing for the life of the process.
`finished` goes up when a deleted item ages out of history, and when you
forget an item that was already deleted. `retries` goes up on each extract
restart.

| Field | Meaning |
| --- | --- |
| `hookOK` | Webhook deliveries that succeeded. |
| `hookFail` | Webhook deliveries that failed. |
| `cmdOK` | Command-hook runs that succeeded. |
| `cmdFail` | Command-hook runs that failed. |
| `starrs` | Configured Starr apps. |
| `folders` | Watched folders. |
| `webhooks` | Webhooks. |
| `cmdhooks` | Command hooks. |

Each internal channel is an object with `len` and `cap`. A Homepage field
uses a dot, such as `stackXtractr.len`.

| Field | Channel |
| --- | --- |
| `stackXtractr` | Starr extract callbacks. |
| `stackFS` | Folder-watch filesystem events. |
| `stackFolder` | Folder-watch extract callbacks. |
| `stackHook` | Webhook and command-hook delivery. |
| `stackDel` | File deletes. |
| `stackTask` | Config apply and queue actions. |

`starrQueues` is one object per configured Starr app, in Settings order.
`starrQueues.0` is the first app. Each object has `app`, `name`, `url`,
`queued`, `retrieved`, `complete`, `match`, `issues`, `downloading`,
`updatedAt`, and `error`. `queued` on that object is the Starr activity
queue. Unpackerr's own `queued` count is the table above.

```yaml
- field: starrQueues.0.queued
  label: First app queued
  format: number
```

Change the index to pick another app, and set the label to that app's name.
