export default {
  name: 'post',
  title: 'Gallery & Blog',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'category', title: 'Category', type: 'string', options: {
      list: ['Rooms', 'Restaurant', 'Garden', 'Reception', 'Events']
    }},
    {name: 'postedDate', title: 'Posted Date', type: 'date'},
  ]
}