import express from 'express';
import Knex from 'knex';

import { Model } from 'objection';

import knexfile from './knex/knexfile';

// Init Knex
const knex = Knex(knexfile.development);
knex.migrate.latest();

// Bind the Knex instance to Objection Model base class
Model.knex(knex);

const { SERVER_PORT } = process.env;

const server = express()
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

server.listen(SERVER_PORT, () => {
  console.log(`Server now listening on port ${SERVER_PORT}`);
});