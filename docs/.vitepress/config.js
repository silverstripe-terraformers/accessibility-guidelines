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
      text: 'Components',
      children: [
        { text: 'Example', link: '/components/example' },
      ]
    }
  ]
}