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
}

module.exports = { Car };
