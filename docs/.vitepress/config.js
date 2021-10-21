module.exports = {
  title: 'Accessible Components',
  description: 'Something.',
  themeConfig: {
    sidebar: {
      '/': getSidebar(),
    }
  }
}

function getSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What are these docs for?', link: '/' },
        { text: 'Resources', link: '/resources' },
        { text: 'Getting started', link: '/getting-started' },
      ]
    },
    {
      text: 'Generic',
      children: [
        { text: 'Animations', link: '/generic/animations' },
        { text: 'Images', link: '/generic/image' },
      ]
    },
    {
      text: 'Components',
      children: [
        { text: 'Accordion', link: '/components/accordion/accordion' },
        { text: 'Select', link: '/components/select/select' },
        { text: 'Button', link: '/components/button/button' },
      ]
    }
  ]
}
