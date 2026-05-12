export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {name: 'phone', title: 'Phone Number', type: 'string'},
    {name: 'whatsapp', title: 'WhatsApp Number', type: 'string'},
    {name: 'primaryColor', title: 'Primary Color', type: 'string'},
    {name: 'heroTitle', title: 'Hero Title Text', type: 'string'},
    {name: 'heroImage', title: 'Hero Image', type: 'image', options: {hotspot: true}},
  ]
}