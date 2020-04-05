require('dotenv').config();
//Note this is just for the CLI not used for prod because of compliation error.
module.exports = {
  name: 'default',
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: [
    'src/**/*.entity.ts'
  ],
  migrations: [
    'src/db/migrations/*.ts'
  ],
  seeds: ['src/db/seeds/**/*.seed.ts'],
  factories: ['src/db/factories/**/*.factory.ts'],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
};
