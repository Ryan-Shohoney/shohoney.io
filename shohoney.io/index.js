const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const { KnexAdapter } = require('@keystonejs/adapter-knex');
const User = require('./lists/user/user.schema');
const Post  = require('./lists/post/post.schema');
const { GraphQLApp } = require('@keystonejs/app-graphql');

const PROJECT_NAME = "shohoney.io";

process.env.KNEX_URI = 'postgres://ryguy:password123@localhost:5432/shohoney_io';
const knexAdapter = new KnexAdapter({dropDatabase: true});

const addUsers = async _ => {
  const users = keystone.lists.User.adapter.findAll();
  if(!users.length) {
    keystone.createItems({
      User: [
        {
          name: 'admin',
          email: 'admin@shohoney.io',
          isAdmin: true,
          password: 'password'
        }
      ]
    });
  }
  console.log('user added');
}

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: knexAdapter,
  onConnect: addUsers
});
const nextApp = new NextApp({
  dir: 'app'
});

keystone.createList('User', User);
keystone.createList('Post', Post);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});


module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    // To create an initial user you can temporarily remove the authStrategy below
    new AdminUIApp({  authStrategy }),
    nextApp
  ],
};
