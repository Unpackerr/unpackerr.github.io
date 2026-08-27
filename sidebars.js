/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  someSidebar: [
    'introduction',
    {
      Installation: [
        'install/choosemethod',
        {Docker: ['install/docker', 'install/compose', 'install/unraid', 'install/truenas-scale']},
        'install/freebsd',
        'install/macos',
        'install/windows',
        {Linux: ['install/linux', 'install/archlinux', 'install/seedbox']},
      ],
    },
    'install/configuration',
    'unpackerr/faq',
    'unpackerr/troubleshooting',
    'unpackerr/download-clients',
    {
      type: 'category',
      label: 'xt',
      collapsed: false,
      items: ['xt'],
    },
    {
      type: 'html',
      value: '<a href="https://golift.io"><img src="https://docs.golift.io/integrations/golift.png" /></a>',
      defaultStyle: true,
    },
  ],
};

export default sidebars;
