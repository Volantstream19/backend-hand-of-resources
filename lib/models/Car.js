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

  static async insert({ name, type, color, year }) {
    const { rows } = await pool.query(
      `
      INSERT INTO cars (name, type, color, year) VALUES ($1, $2, $3, $4) RETURNING *
      `,
      [name, type, color, year]
    );
    return new Car(rows[0]);
  }

  static async updateCarId(id, carName) {
    const carRow = await Car.getCar(id);
    const carData = { ...carRow, ...carName };
    const { rows } = await pool.query(
      `
    UPDATE cars
    SET name = $2
    WHERE id = $1
    RETURNING *
    `,
      [id, carData.name]
    );
    return new Car(rows[0]);
  }
}

module.exports = { Car };
