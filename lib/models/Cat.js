const pool = require('../utils/pool');

class Cat {
  id;
  name;
  type;
  color;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.color = row.color;
  }

  //GET
  static async getAllCats() {
    const { rows } = await pool.query(`
SELECT * from cats;`);
    return rows.map((row) => new Cat(row));
  }

  static async getCat(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM cats
    WHERE ID = $1`,
      [id]
    );
    return new Cat(rows[0]);
  }
}

module.exports = { Cat };
