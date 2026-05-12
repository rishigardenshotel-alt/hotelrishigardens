export default {
  name: 'room',
  title: 'Rooms',
  type: 'document',
  fields: [
    {name: 'type', title: 'Room Type', type: 'string', description: 'e.g., Deluxe Suite'},
    {name: 'price', title: 'Price per Night', type: 'string'},
    {name: 'image', title: 'Main Image', type: 'image', options: {hotspot: true}},
    {name: 'amenities', title: 'Amenities', type: 'array', of: [{type: 'string'}]},
  ]
}