const pool = require('../utils/pool');

class Fruit {
  id;
  type;
  texture;
  sweetness;

  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.texture = row.texture;
    this.sweetness = row.sweetness;
  }

  //GET
  static async getAllFruits() {
    const { rows } = await pool.query(`
    SELECT * from fruits`);
    return rows.map((row) => new Fruit(row));
  }

  static async getFruits(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM fruits
    WHERE ID = $1`,
      [id]
    );
    return new Fruit(rows[0]);
  }

  static async insert({ type, texture, sweetness }) {
    const { rows } = await pool.query(
      `
      INSERT INTO fruits (type, texture, sweetness) VALUES ($1, $2, $3) RETURNING *
      `,
      [type, texture, sweetness]
    );
    return new Fruit(rows[0]);
  }

  static async updateFruitId(id, fruitName) {
    const fruitRow = await Fruit.getFruits(id);
    const fruitData = { ...fruitRow, ...fruitName };
    const { rows } = await pool.query(
      `
    UPDATE fruits
    SET type = $2
    WHERE id = $1
    RETURNING *
    `,
      [id, fruitData.type]
    );
    return new Fruit(rows[0]);
  }
}
module.exports = { Fruit };
