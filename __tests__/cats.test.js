const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Cat Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats/:id should return a single cat', async () => {
    const response = await request(app).get('/cats/1');
    expect(response.body).toEqual({
      id: '1',
      name: 'Garfield',
      type: 'Lazy',
      color: 'Orange',
    });
  });

  it('/cats should return a list of a cats', async () => {
    const response = await request(app).get('/cats');
    expect(response.body).toEqual([
      {
        id: '1',
        name: 'Garfield',
        type: 'Lazy',
        color: 'Orange',
      },
      {
        id: '2',
        name: 'Darwin',
        type: 'Curious',
        color: 'Grey',
      },
      {
        id: '3',
        name: 'Render',
        type: 'Fender',
        color: 'Bender',
      },
      {
        id: '4',
        name: 'Blah',
        type: 'Happy',
        color: 'Black',
      },
    ]);
  });

  it('/cats should return new cat', async () => {
    const newCat = {
      name: 'Steven',
      type: 'Believin this is the new cat',
      color: 'Blue',
    };
    const response = await request(app).post('/cats').send(newCat);
    expect(response.body).toEqual({
      id: expect.any(String),
      ...newCat,
    });
  });

  it('/cats/:id should update a cats', async () => {
    const response = await request(app).put('/cats/1').send({
      name: 'HELLO MY NAME IS',
      type: 'ENERGETIC',
    });
    expect(response.status).toBe(200);
  });

  it('/cats will delete a cat', async () => {
    const response = await request(app).delete('/cats/3');
    expect(response.status).toBe(200);
  });

  afterAll(() => {
    pool.end();
  });
});
