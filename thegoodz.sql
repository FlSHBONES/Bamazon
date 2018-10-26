DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tire iron", "tools", 14.50, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("office chairs", "office", 111.12, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ice cream pints (lime only)", "food", 3.50, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("red wagon wheels", "general", 3.00, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("used t-shirts", "apparel", 14.50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("refurbished screwdrivers", "tools", 3.49, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("120 oz dark coffee", "food", 20.01, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("steel cups", "cups ", 1.20, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jeans (OSFA)", "apparel", 32.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("red wagons (no wheels)", "general", 50.50, 3);

SELECT * FROM bamazonDB.products;

