import * as Knex from 'knex';
import tables from '../constants';

const BREED_LIST = [
  {
    name: 'Persian',
    description: 'Fluffy cat',
    temperament: 'Angry',
    origin: 'Persia'
  },
  {
    name: 'Bengal',
    description: 'Skinny little leopard',
    temperament: 'Chill',
    origin: 'Bengal jungle'
  },
  {
    name: 'British short hair',
    description: 'Looks like a normal cat. Likes monocles and tea',
    temperament: 'Aristocratic',
    origin: 'Windsor castle'
  },
  {
    name: 'Siamese',
    description: 'Bright eyed night owl. Always bundled with another unit',
    temperament: 'Sneaky',
    origin: 'Somewhere Far-East'
  }
];

export async function seed(knex: Knex): Promise<any> {
  return knex(tables.BREED_TABLE).del()
    .then(() => {
      return knex(tables.BREED_TABLE).insert(BREED_LIST);
    });
};