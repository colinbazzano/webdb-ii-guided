// Update with your config settings.

/*
  this file contians instructions knex needs to connect to the database.

  each key on the exported object has the configuration for a database environment (dev, staging, production, etc.)
*/

module.exports = {
  // teaches knex to connect to the development database
  development: {
    client: "sqlite3", // the database driver
    useNullAsDefault: true, // only needed when using SQLite3.
    connection: {
      filename: "./data/produce.db3" // where is the database file?
    }
  },
  migrations: {
    directory: "./data/migrations" // will be created automatically if it doesn't exist
  },
  seeds: {
    directory: "./data/seeds" // will be created automatically if it doesn't exist
  }
};
