const pool = require('../utils/pool');

class Car {
  id;
  type;
  name;
  color;
  year;

  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.name = row.name;
    this.color = row.color;
    this.year = row.year;
  }

  //GET
  static async getAllCars() {
    const { rows } = await pool.query(`
SELECT * from cars;`);
    return rows.map((row) => new Car(row));
  }

  static async getCar(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM cars
    WHERE ID = $1`,
      [id]
    );

    return new Car(rows[0]);
  }
}

module.exports = { Car };
