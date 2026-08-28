# unpackerr.zip

Source for [https://unpackerr.zip](https://unpackerr.zip). Built with [Docusaurus 3](https://docusaurus.io/).

Logos used by the GitHub README and Discord/Slack webhooks live in `static/img/`
and are served at `https://unpackerr.zip/img/`
(`unpackerr-logo-text.png` / `unpackerr.png`, `logo.png`, `icon.png`).

```console
yarn install
yarn start          # local dev server
yarn build          # production build
yarn lint           # markdownlint-cli2 (same as CI)
codespell docs      # brew install codespell
```

Push to `main` deploys to GitHub Pages.
