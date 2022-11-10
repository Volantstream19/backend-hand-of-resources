const pool = require('../utils/pool');

class Bird {
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
  static async getBird(id) {
    const { rows } = await pool.query(
      `
    SELECT * from birds
    WHERE id = $1
    `,
      [id]
    );

    return new Bird(rows[0]);
  }

  //GET
  static async getAll() {
    const { rows } = await pool.query(`
SELECT * from birds;`);
    return rows.map((row) => new Bird(row));
  }

  // Post
  static async insert({ name, type, color }) {
    const { rows } = await pool.query(
      `
    INSERT INTO birds (name, type, color) VALUES ($1, $2, $3) RETURNING *
    `,
      [name, type, color]
    );
    return new Bird(rows[0]);
  }
}

module.exports = { Bird };
