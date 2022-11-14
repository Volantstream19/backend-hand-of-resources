const pool = require('../utils/pool');

module.exports = class Dog {
  id;
  name;
  type;
  weight;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.weight = row.weight;
  }

  //GET
  static async getAllDogs() {
    const { rows } = await pool.query(`
    SELECT * from dogs;`);
    return rows.map((row) => new Dog(row));
  }

  static async getDog(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM dogs
    WHERE ID = $1`,
      [id]
    );
    return new Dog(rows[0]);
  }
};
