CREATE TABLE IF NOT EXISTS category(
    id SERIAL PRIMARY KEY,
    name VARCHAR(55),
    description VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price decimal(10, 2),
    category_id INT, FOREIGN KEY(category_id) REFERENCES category(id)
);