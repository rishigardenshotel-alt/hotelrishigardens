export default {
  name: 'bookingSite',
  title: 'Booking Site',
  type: 'document',
  fields: [
    {name: 'name', title: 'Site Name', type: 'string'},
    {name: 'logo', title: 'Logo', type: 'image'},
    {name: 'link', title: 'Booking Link', type: 'url'},
    {name: 'discount', title: 'Discount Text', type: 'string'},
    {name: 'order', title: 'Display Order', type: 'number'},
  ]
}