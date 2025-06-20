---
id: truenas-community-edition
title: TrueNAS Community Edition
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on TrueNAS Community Edition using TrueNAS Apps.
---

# TrueNAS Community Edition Install

## TrueNAS Apps

1. Navigate to TrueNAS Apps.

   ![TrueNAS Apps](/img/screenshots/truenas-community-edition/01_truenas_apps.png)

2. Click 'Discover Apps' in the top right corner.

   ![Discover Apps](/img/screenshots/truenas-community-edition/02_discover_apps.png)

3. Search for 'Unpackerr' and install it.

   ![Search Apps](/img/screenshots/truenas-community-edition/03_search_unpackerr.png)

4. Configure Unpackerr's general and network parameters. If you have a specific user ID and group ID configured for a user to access all of your Starr apps and media data then use the IDs for that user. I use `3000` for UID and `3000` for GID because that's the UID and GID of the user that manages all of my NAS media content and Starr apps. Yours is most likely different. Make sure 'Host Network' is checked. 

   ![Configure General and Network](/img/screenshots/truenas-community-edition/04_config_gen_and_network.png)

5. Configure Unpackerr's storage and resource parameters. By default, a `config` directory isn't created by TrueNAS. Make sure to add a storage type of `ixVolume` and mount it at `/config` and Unpackerr will add its configuration file here. Also make sure to point to your downloads folder where your torrent client for Starr apps puts its files with a Host Path Additional Storage entry. I have an SSD dataset called `apps` where all my TrueNAS apps run. In that folder I created a `downloads` folder and then a `qbt` folder for qBitTorrent. My QBT is configured to download to `/mnt/apps/downloads/qbt` via qBitTorrent configuration. Make sure to use the correct folder for your configuration.

   ![Configure General and Network](/img/screenshots/truenas-community-edition/05_config_storage_and_resources.png)

6. Navigate to Sonarr and get the URL and the API key. The URL is in your browser and the API key is shown below the contents of this screenshot.

   ![Get Sonarr Configuration](/img/screenshots/truenas-community-edition/06_sonarr_config.png)

7. Navigate to Radarr and get the URL and the API key. The URL is in your browser and The API key is shown below the contents of this screenshot.

   ![Get Radarr Configuration](/img/screenshots/truenas-community-edition/07_radarr_config.png)

8. Navigate to the [Generator](https://notifiarr.com/unpackerr) and input your preferred configuration values AND Sonarr / Radarr configuration and click 'Generate'. Do not include `/settings/general` in the Sonarr or Radarr URL and make sure to include the port. 

   ![Generate Updated Unpackerr Config](/img/screenshots/truenas-community-edition/08_unpackerr_config_generator.png)

9. Find your default Unpackerr configuration file. Go to TrueNAS -> System -> Shell - `cd / && find . -type f -name "unpackerr.conf"`

   ![Locate Default Unpackerr Config](/img/screenshots/truenas-community-edition/09_locate_packerr_config.png)

10. `cd` to your Unpackerr docker configuration directory and create a new config file.
    1. `cd ./mnt/.ix-apps/app_mounts/unpackerr/config/` or similar. Get the correct directory from the previous step
    2. Backup the existing file - `cp unpackerr.conf unpackerr.conf.bak`
    3. Create a new configuration file - `nano unpackerr.conf.2`
    4. Paste the config from the generator
    5. Save and close - CTRL + X -> CTRL + Y
    6. Delete the original config (it's backed up) - `rm unpackerr.conf`
    7. Use the new config - `mv unpackerr.conf.2 unpackerr.conf`

11. Ensure permissions are correct for new files. `ls -laR ./mnt/.ix-apps/app_mounts/unpackerr`. Permissions should be set to the user ID you specified in the permissions step. By default, the root user or web UI user is used to run the interactive shell in the web. This may or may not match the user you use to run all of your Starr apps or plex / samba shares, etc.

12. Restart Unpackerr so it reads the new configuration file. It should now start unpacking values. Make sure to check the logs to verify it's running.

    ![Locate Default Unpackerr Config](/img/screenshots/truenas-community-edition/12_pt1_view_logs.png)

    ![Locate Default Unpackerr Config](/img/screenshots/truenas-community-edition/12_pt2_view_logs.png)

    ![Locate Default Unpackerr Config](/img/screenshots/truenas-community-edition/12_pt3_verify_logs.png)

You should see multiple critical pieces of information in the logs:
* The UID and GID of the user that needs access to all of your media should be output: `Unpackerr vX.Y.Z Starting! UID: 1234, GID: 1234...`
* You should see a valid Sonarr and Radarr configuration in the final log output:
  * `Sonarr Config: 1 server: http://YOUR_LOCAL_SONARR_URL:YOUR_LOCAL_SONARR_PORT`
  * `Radarr Config: 1 server: http://YOUR_LOCAL_RADARR_URL:YOUR_LOCAL_RADARR_PORT`
* If you already have Sonarr / Radarr items ready to be unpacked, you will see the queue immediately created:
  * `[Radarr] Updated X items Queued`
  * `[Sonarr] Updated Y Items Queued`
