const { Text, CalendarDay, Relationship, Select } = require('@keystonejs/fields');
const {AccessControl} = require('../accessControl');
const Post = {
  fields:{
    name: {
      type: Text
    },
    date: {
      type: CalendarDay
    },
    author: {
      type: Relationship,
      ref: 'User'
    },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' }, 
        { label: 'Published', value: 'published' }
      ]
    }
  },
  access: {
    read: AccessControl.IsAdminOrOwner,
    update: AccessControl.IsAdminOrOwner,
    create: AccessControl.IsAdminOrOwner,
    delete: AccessControl.IsAdminOrOwner,
  }
}

module.exports = Post
