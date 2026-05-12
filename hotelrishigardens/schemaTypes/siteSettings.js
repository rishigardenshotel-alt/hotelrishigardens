export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {name: 'hotelName', title: 'Hotel Name', type: 'string'},
    {name: 'phone', title: 'Contact Phone', type: 'string'},
    {name: 'email', title: 'Contact Email', type: 'string'},
    {name: 'whatsapp', title: 'WhatsApp Number', type: 'string'},
    {name: 'address', title: 'Full Address', type: 'text'},
    {name: 'heroImage', title: 'Hero Background', type: 'image'},
  ]
}