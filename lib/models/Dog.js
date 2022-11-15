const pool = require('../utils/pool');

module.exports = class Dog {
  id;
  name;
  type;
  age;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.age = row.age;
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

  static async insert({ name, type, age }) {
    const { rows } = await pool.query(
      `
      INSERT INTO dogs (name, type, age) VALUES ($1, $2, $3) RETURNING *
      `,
      [name, type, age]
    );
    return new Dog(rows[0]);
  }

  static async updateDogId(id, dogName) {
    const dogRow = await Dog.getDog(id);
    const dogData = { ...dogRow, ...dogName };
    const { rows } = await pool.query(
      `
    UPDATE dogs
    SET name = $2
    WHERE id = $1
    RETURNING *
    `,
      [id, dogData.name]
    );
    return new Dog(rows[0]);
  }
  static async delete(id) {
    const { rows } = await pool.query(
      `
    DELETE from dogs
    WHERE ID = $1
    RETURNING *
    `,
      [id]
    );
    return new Dog(rows[0]);
  }
};
