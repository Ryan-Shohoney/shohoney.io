const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { AccessControl } = require('../accessControl');
const User = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: { type: Checkbox },
    password: {
      type: Password,
    },
  },
  access: {
    read: AccessControl.IsAdminOrOwner,
    update: AccessControl.IsAdminOrOwner,
    create: AccessControl.IsAdmin,
    delete: AccessControl.IsAdmin,
    auth: true
  }
};
module.exports = User;