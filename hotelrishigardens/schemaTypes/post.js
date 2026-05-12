export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'category', title: 'Category', type: 'string', options: {list: ['infrastructure','restroom','reception','restaurant']}},
    {name: 'bookingLink', title: 'Booking Link', type: 'url'},
  ]
}