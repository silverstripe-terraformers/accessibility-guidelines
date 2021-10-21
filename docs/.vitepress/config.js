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
      ]
    },
    {
      text: 'Generic',
      children: [
        { text: 'Animations', link: '/generic/animations' },
      ]
    },
    {
      text: 'Components',
      children: [
        { text: 'Example', link: '/components/example' },
        { text: 'Accordion', link: '/components/accordion/accordion' },
      ]
    }
  ]
}