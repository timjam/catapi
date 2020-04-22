import { Model } from 'objection';
import tables from '../knex/constants';

class Breed extends Model {

  static tableName = tables.BREED_TABLE;

  readonly id!: number;
  name!: string;
  description?: string;
  temperament!: string;
  origin!: string;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'temperament', 'origin'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 50 },
        description: { type: 'string', maxLength: 500 },
        temperament: { type: 'string', minLength: 1, maxLength: 50 },
        origin: { type: 'string', minLength: 1, maxLength: 50 },
        imgUrl: { type: 'string', minLength: 1, maxLength: 255 },
        created_date: { type: 'number' },
        modified_date: { type: 'number' }
      }
    };
  }

}

export default Breed;
