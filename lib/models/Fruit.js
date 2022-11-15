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
}
module.exports = { Fruit };
