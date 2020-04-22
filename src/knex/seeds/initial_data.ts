import * as Knex from 'knex';
import tables from '../constants';

const BREED_LIST = [
  {
    name: 'Persian',
    description: 'Fluffy cat',
    temperament: 'Angry',
    origin: 'Persia',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg'
  },
  {
    name: 'Bengal',
    description: 'Skinny little leopard',
    temperament: 'Chill',
    origin: 'Bengal jungle',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Paintedcats_Red_Star_standing.jpg/800px-Paintedcats_Red_Star_standing.jpg'
  },
  {
    name: 'British shorthair',
    description: 'Looks like a normal cat. Likes monocles and tea',
    temperament: 'Aristocratic',
    origin: 'Windsor castle',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Britishblue.jpg/800px-Britishblue.jpg'
  },
  {
    name: 'Siamese',
    description: 'Bright eyed night owl. Always bundled with another unit',
    temperament: 'Sneaky',
    origin: 'Somewhere Far-East',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg'
  },
  {
    name: 'Russian Blue',
    description: 'Great cousin for the Prussian Blue',
    temperament: 'Aggressive',
    origin: 'Russia',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Russian_blue.jpg/800px-Russian_blue.jpg'
  },
  {
    name: 'Himalayan',
    description: 'Thought to be a yeti, but is actually much more',
    temperament: 'Ice cold',
    origin: 'US & UK',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Himalayan_CAT.jpg'
  },
  {
    name: 'European shorthair',
    description: 'Was kicked out of the Beatles, because of that short hair',
    temperament: 'Aristocratic',
    origin: 'Sweden',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/European_shorthair_procumbent_Quincy.jpg/1920px-European_shorthair_procumbent_Quincy.jpg'
  }
];

export async function seed(knex: Knex): Promise<any> {
  return knex(tables.BREED_TABLE).del()
    .then(() => {
      return knex(tables.BREED_TABLE).insert(BREED_LIST);
    });
};