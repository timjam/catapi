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
    name: 'British shorthair',
    description: 'Looks like a normal cat. Likes monocles and tea',
    temperament: 'Aristocratic',
    origin: 'Windsor castle'
  },
  {
    name: 'Siamese',
    description: 'Bright eyed night owl. Always bundled with another unit',
    temperament: 'Sneaky',
    origin: 'Somewhere Far-East'
  },
  {
    name: 'Russian Blue',
    description: 'Great cousin for the Prussian Blue',
    temperament: 'Aggressive',
    origin: 'Russia'
  },
  {
    name: 'Himalayan',
    description: 'Thought to be a yeti, but is actually much more',
    temperament: 'Ice cold',
    origin: 'US & UK'
  },
  {
    name: 'European shorthair',
    description: 'Was kicked out of the Beatles, because of that short hair',
    temperament: 'Aristocratic',
    origin: 'Sweden'
  }
];

export async function seed(knex: Knex): Promise<any> {
  return knex(tables.BREED_TABLE).del()
    .then(() => {
      return knex(tables.BREED_TABLE).insert(BREED_LIST);
    });
};