---
id: xt
title: eXtractor Tool
description: Recursively decompress archives with the xt command-line tool.
---

`xt` is a one-shot command-line extractor built on the same
[xtractr](https://github.com/golift/xtractr) engine as Unpackerr.
Give it files or folders; it recursively decompresses archives it finds.

It is not a daemon and it does not poll Starr apps. Use Unpackerr when you want
ongoing queue or folder watching. Use `xt` when you want to extract a path now.

GitHub: [Unpackerr/xt](https://github.com/Unpackerr/xt)

## Install

### Linux

Alpine and Arch packages are on the [releases](https://github.com/Unpackerr/xt/releases)
page. On Debian/Ubuntu and RedHat/Fedora, install the GoLift repo and `xt`:

```shell
curl -s https://golift.io/repo.sh | sudo bash -s - xt
```

### macOS

```shell
brew install golift/mugs/xt
```

A binary is also on the [releases](https://github.com/Unpackerr/xt/releases) page.

### Windows

Download an `exe` from the [releases](https://github.com/Unpackerr/xt/releases) page
and put it in your `PATH`. It runs in a command or terminal window only.

### FreeBSD

Download a FreeBSD binary from the
[releases](https://github.com/Unpackerr/xt/releases) page and extract it into your
`PATH`. `/usr/local/bin` is a good location.

### Go

```shell
go install golift.io/xt@latest
```

## Usage

```shell
xt [options] [path [path] [path] ...]
xt --job-file /tmp/job1 -j /tmp/job2
```

Paths may be files to extract or directories to search.

| Flag | Meaning |
| --- | --- |
| `-o`, `--output` | Directory to write extracted files. Default: current directory. |
| `-S`, `--squash-root` | If the archive root is a single folder, move its contents up. |
| `-d`, `--max-depth` | How deep to recurse. `0` is unlimited; `1` disables recursion. |
| `-m`, `--min-depth` | Only extract archives this many subdirectories deep or deeper. |
| `-P`, `--password` | Password for encrypted RAR/7z. Repeat the flag for more passwords. |
| `-e`, `--extension` | Only extract these extensions (include the leading dot). Repeatable. |
| `-j`, `--job-file` | Extra jobs from xml, json, toml, or yaml. TOML is the default. |
| `-p`, `--preserve-paths` | Recreate the input directory hierarchy under `--output`. |
| `-V`, `--verbose` | Print extracted file paths. |
| `-D`, `--debug` | Debug output. |
| `-v`, `--version` | Print version and supported extensions, then exit. |
| `-h`, `--help` | Usage. |

`-e` values must match a supported extension. Unknown extensions are ignored.
Run `xt -v` to print the live list.

## Job files

CLI flags build one job. Job files define one or more jobs with their own paths,
output, depths, and passwords. Formats: xml, json, toml, yaml (toml if the
extension is missing).

If `include_suffix` is set, `exclude_suffix` is ignored.

Example TOML:

```toml
paths     = [ '/path1', '/another/path' ]
output    = '.'
passwords = [ 'password1', '''password"With'Specials!''', 'pass3']
exclude_suffix = ['.iso', '.gz']
include_suffix = ['.zip', '.rar', '.r00']
max_depth = 0
min_depth = 1
file_mode = 644
dir_mode  = 755
squash_root = false
verbose   = false
debug_log = false
preserve_paths = false
```

JSON and YAML use camelCase for some keys (`excludeSuffix`, `debugLog`,
`preservePaths`). XML uses `path` / `password` (singular) for the lists.

## Formats

Same [xtractr](https://github.com/golift/xtractr) engine as Unpackerr. Detected by
file extension:

- Zip: `zip`
- RAR: `rar`, `r00`
- 7-Zip: `7z`, `7z.001`
- tar: `tar`, `tar.gz`, `tgz`, `tar.bz2`, `tbz`, `tbz2`, `tar.xz`, `txz`, `tar.z`, `tz`, `tlz`
- gzip / bzip2 / xz / zstd: `gz`, `gzip`, `bz2`, `xz`, `zst`, `zstd`
- Other compressors: `lz4`, `lz`, `lzip`, `lzma`, `lzma2`, `z`, `br`, `brotli`, `s2`, `snappy`, `sz`, `zlib`, `zz`
- Packages and images: `iso`, `cpio`, `cpio.gz`, `cpgz`, `ar`, `deb`, `rpm`
- Cue sheets (FLAC splits): `cue`, `cue.txt`

Multi-file and password-protected archives work with RAR and 7-Zip.
ISO extraction is always available in `xt`; Unpackerr's `extract_isos` setting does
not apply here. `xt -v` prints the extension list from the binary you have.
