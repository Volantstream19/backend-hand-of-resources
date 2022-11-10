const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Bird Routes', () => {
  beforeEach(() => {
    return setup(pool);
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
  afterAll(() => {
    pool.end();
  });
});
