const { Relationship } = require('@keystonejs/fields');
const { AccessControl } = require('../accessControl');
const Author = {
  fields: {
    user : {
      type: Relationship,
      ref: 'User'
    },
    posts: {
      type: Relationship,
      ref: 'Post',
      many: true
    }
  },
  access: {
    read: AccessControl.IsAdminOrOwner,
    update: AccessControl.IsAdminOrOwner,
    create: AccessControl.IsAdmin,
    delete: AccessControl.IsAdmin
  }
};
module.exports = Author;