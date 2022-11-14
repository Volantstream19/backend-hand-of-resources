const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Cat Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/dogs/:id should return a single dog', async () => {
    const response = await request(app).get('/dogs/1');
    expect(response.body).toEqual({
      id: '1',
      name: 'Chewy',
      type: 'Lhaso apso',
      weight: 30,
    });
  });

  it('/dogs should return a list of a dogs', async () => {
    const response = await request(app).get('/dogs');
    expect(response.body).toEqual([
      {
        id: '1',
        name: 'Chewy',
        type: 'Lhaso apso',
        weight: 30,
      },
      {
        id: '2',
        name: 'Leia',
        type: 'Shitzu',
        weight: 20,
      },
      {
        id: '3',
        name: 'AR-15',
        type: 'German Sheperd',
        weight: 110,
      },
      {
        id: '4',
        name: 'Winston',
        type: 'SilverBack Gorilla',
        weight: 1500,
      },
    ]);
  });

  afterAll(() => {
    pool.end();
  });
});
