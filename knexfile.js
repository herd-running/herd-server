const path = require('path')

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/herd_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  test: {
    client: 'postgresql',
    connection: 'postgresql://localhost/herd_test',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
};

//For Google Cloud deployment

// production: {
//   client: 'pg',
//   connection: {
//     user: process.env.SQL_USER,
//     password: process.env.SQL_PASSWORD,
//     database: process.env.SQL_DATABASE,
//     host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
//   },
//   migrations: {
//     directory: path.join(__dirname, 'db', 'migrations')
//   },
//   seeds: {
//     directory: path.join(__dirname, 'db', 'seeds')
//   }
// }
// }