-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS birds;

CREATE TABLE birds (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    color VARCHAR NOT NULL
);

INSERT INTO
    birds (name, type, color)
VALUES
    (
        'Steven',
        'Hen',
        'Red'
    ),
    (
        'Johnathan',
        'Cardinal',
        'Orange'
    ),
    (
        'Boolean',
        'Resplendent Quetzal',
        'Teal'
    ),
    (
        'Steph',
        'Goose',
        'Grey'
    );