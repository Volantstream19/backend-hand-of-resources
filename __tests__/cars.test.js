const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Car Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cars/:id should return a single bird', async () => {
    const response = await request(app).get('/cars/1');
    expect(response.body).toEqual({
      id: '1',
      name: 'Accord',
      type: 'Honda',
      color: 'Green',
      year: 2002,
    });
  });

  it('/cars should return a list of a cars', async () => {
    const response = await request(app).get('/cars');
    expect(response.body).toEqual([
      {
        id: '1',
        name: 'Accord',
        type: 'Honda',
        color: 'Green',
        year: 2002,
      },
      {
        id: '2',
        name: '458',
        type: 'Ferrari',
        color: 'Red',
        year: 2021,
      },
      {
        id: '3',
        name: 'Veyron',
        type: 'Bugatti',
        color: 'Black and Orange',
        year: 2022,
      },
      {
        id: '4',
        name: 'Camry',
        type: 'Toyota',
        color: 'Blue',
        year: 1998,
      },
      {
        id: '5',
        name: 'Prelude',
        type: 'Honda',
        color: 'White',
        year: 1996,
      },
    ]);
  });

  it('/cars should return new car', async () => {
    const newCar = {
      name: 'Aventador',
      type: 'Lamborghini',
      color: 'Yellow',
      year: 2022,
    };
    const response = await request(app).post('/cars').send(newCar);
    expect(response.body).toEqual({
      id: expect.any(String),
      ...newCar,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
