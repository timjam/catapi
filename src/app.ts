import express from 'express';
import promiseRouter from 'express-promise-router';
import Knex from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

import { Model } from 'objection';

import registerApi from './routes/breedRoutes';
import knexfile from './knex/knexfile';

// Init Knex
const knex = Knex(knexfile.development);
// Migrate and seed
(async () => {
  await knex.migrate.latest();
  await knex.seed.run();
})();

// Bind the Knex instance to Objection Model base class
Model.knex(knex);

const { SERVER_PORT } = process.env;

const router = promiseRouter();
const server = express()
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(router);

registerApi(router);

server.listen(SERVER_PORT, () => {
  console.log(`Server now listening on port ${SERVER_PORT}`);
});