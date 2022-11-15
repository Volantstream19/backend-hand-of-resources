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
}
module.exports = { Fruit };
