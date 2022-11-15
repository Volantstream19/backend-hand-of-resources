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
      age: 16,
    });
  });

  it('/dogs should return a list of a dogs', async () => {
    const response = await request(app).get('/dogs');
    expect(response.body).toEqual([
      {
        id: '1',
        name: 'Chewy',
        type: 'Lhaso apso',
        age: 16,
      },
      {
        id: '2',
        name: 'Leia',
        type: 'Shitzu',
        age: 11,
      },
      {
        id: '3',
        name: 'AR-15',
        type: 'German Sheperd',
        age: 4,
      },
      {
        id: '4',
        name: 'Winston',
        type: 'SilverBack Gorilla',
        age: 190,
      },
    ]);
  });

  it('/dogs should return new dog', async () => {
    const newDog = {
      name: 'Steven',
      type: 'Believin this is the new Dog',
      age: 450,
    };
    const response = await request(app).post('/dogs').send(newDog);
    expect(response.body).toEqual({
      id: expect.any(String),
      ...newDog,
    });
  });

  it('/dogs/:id should update', async () => {
    const response = await request(app).put('/dogs/1').send({
      name: 'IF YOU SEE THIS IT WORKED',
      type: 'ENERGETIC',
    });
    expect(response.status).toBe(200);
  });

  it('/dogs will delete a dog', async () => {
    const response = await request(app).delete('/dogs/3');
    expect(response.status).toBe(404);
  });

  afterAll(() => {
    pool.end();
  });
});
