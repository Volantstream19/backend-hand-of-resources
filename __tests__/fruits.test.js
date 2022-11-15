const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Fruits Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/fruits/:id should return a single fruit', async () => {
    const response = await request(app).get('/fruits/1');
    expect(response.body).toEqual({
      id: '1',
      type: 'Apple',
      texture: 'Crisp',
      sweetness: 5,
    });
  });

  it('/fruits should return a list of a fruits', async () => {
    const response = await request(app).get('/fruits');
    expect(response.body).toEqual([
      {
        id: '1',
        type: 'Apple',
        texture: 'Crisp',
        sweetness: 5,
      },
      {
        id: '2',
        type: 'Pineapple',
        texture: 'Soft',
        sweetness: 8,
      },
      {
        id: '3',
        type: 'Bananas',
        texture: 'Soft',
        sweetness: 4,
      },
      {
        id: '4',
        type: 'Watermelon',
        texture: 'Soft, Juicy, Delicious',
        sweetness: 5,
      },
      {
        id: '5',
        type: 'Caribbean June Plum',
        texture: 'Firm',
        sweetness: 5,
      },
      {
        id: '6',
        type: 'Chokecherries',
        texture: 'Soft',
        sweetness: 7,
      },
      {
        id: '7',
        type: 'Rasberries',
        texture: 'Soft',
        sweetness: 5,
      },
      {
        id: '8',
        type: 'Lime',
        texture: 'Tart',
        sweetness: 10,
      },
    ]);
  });

  it('/fruits should return new fruit', async () => {
    const newFruit = {
      type: 'Ball',
      texture: 'Soft',
      sweetness: 10,
    };
    const response = await request(app).post('/fruits').send(newFruit);
    expect(response.body).toEqual({
      id: expect.any(String),
      ...newFruit,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
