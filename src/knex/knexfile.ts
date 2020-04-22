/**
 * Migraatiot komennolla
 * npx knex --knexfile .\src\knex\knexfile.ts migrate:make initial_models -x ts
 * tai yarnilla nyt ku se on scripteissä
 * yarn migrate:make 'nimi'
 */

export = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/dev.sqlite3.db',
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,

    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      directory: __dirname + '/migrations',
    },

    seeds: {
      directory: __dirname + '/seeds',
    },
  },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,

  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },

  //   migrations: {
  //     directory: __dirname + '/migrations',
  //   },

  // },

  production: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/dev.sqlite3.db',
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },
};
