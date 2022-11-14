-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS birds;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS cats;


-- CATS TABLE
CREATE TABLE cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    color VARCHAR NOT NULL
);
-- CARS TABLE
CREATE TABLE cars (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    color VARCHAR NOT NULL,
    year INT NOT NULL
);
-- BIRDS TABLE
CREATE TABLE birds (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    color VARCHAR NOT NULL
);
-- CARS VALUES
INSERT INTO cars (type, name, color, year)
VALUES
    ('Honda',
    'Accord',
    'Green',
    2002),

    ('Ferrari',
    '458',
    'Red',
    2021),

    ('Bugatti',
    'Veyron',
    'Black and Orange',
    2022),

    ('Toyota',
    'Camry',
    'Blue',
    1998),

    ('Honda',
    'Prelude',
    'White',
    1996);

-- BIRDS VALUES
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

-- CATS VALUES
INSERT INTO
    cats (name, type, color)
VALUES
    (
        'Garfield',
        'Lazy',
        'Orange'
    ),
    (
        'Darwin',
        'Curious',
        'Grey'
    ),
    (
        'Render',
        'Fender',
        'Bender'
    ),
    (
        'Blah',
        'Happy',
        'Black'
    );