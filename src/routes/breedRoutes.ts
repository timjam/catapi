import express, { Request, Response } from 'express';
import Breed from '../models/Breed';

const registerApi = (breedRouter: express.Router) => {
  breedRouter.get('/breeds/', async (req: Request, res: Response) => {
    const { name } = req.query;
    let breeds;
    if (!name) {
      breeds = await Breed.query().orderBy('name');
    } else {
      breeds = await Breed.query().where('name', 'like', `%${name}%`).orderBy('name');
    }
    res.send(breeds);
  });

  breedRouter.get('/breeds/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const breed = await Breed.query().findById(id);
    res.send(breed);
  });

}

export default registerApi;
