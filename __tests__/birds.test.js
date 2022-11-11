const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Bird Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /birds/:id should return a single bird', async () => {
    const response = await request(app).get('/birds/1');
    expect(response.body).toEqual({
      id: '1',
      name: 'Steven',
      type: 'Hen',
      color: 'Red',
    });
  });

  it('GET /birds should return a list of a birds', async () => {
    const response = await request(app).get('/birds');
    expect(response.body).toEqual([
      {
        id: '1',
        name: 'Steven',
        type: 'Hen',
        color: 'Red',
      },
      {
        id: '2',
        name: 'Johnathan',
        type: 'Cardinal',
        color: 'Orange',
      },
      {
        id: '3',
        name: 'Boolean',
        type: 'Resplendent Quetzal',
        color: 'Teal',
      },
      {
        id: '4',
        name: 'Steph',
        type: 'Goose',
        color: 'Grey',
      },
    ]);
  });

  it('POST /birds should return a new bird value', async () => {
    const newBird = {
      name: 'Jackson',
      type: 'Human',
      color: 'White',
    };
    const response = await request(app).post('/birds').send(newBird);
    expect(response.body).toEqual({
      id: expect.any(String),
      ...newBird,
    });
  });

  it('/birds/:id should update an existing bird', async () => {
    const response = await request(app).put('/birds/1').send({
      type: 'Gangsta',
    });
    expect(response.body.type).toBe('Gangsta');
  });

  afterAll(() => {
    pool.end();
  });
});
