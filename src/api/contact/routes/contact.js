module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.index',
    },
    {
      method: 'POST',
      path: '/appointement',
      handler: 'contact.appointement',
    }
  ]
}