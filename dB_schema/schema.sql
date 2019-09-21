DROP DATABASE IF EXISTS arcsurf_db;
CREATE DATABASE arcsurf_db;
USE arcsurf_db;
CREATE TABLE products(
  productID INT AUTO_INCREMENT NOT NULL,
  productName VARCHAR(50) NOT NULL,
  productTag VARCHAR(25) NOT NULL,
  productURL VARCHAR(255) NOT NULL,
  productDesc VARCHAR(255) NOT NULL,
  PRIMARY KEY (productID)
);
CREATE TABLE pricing(
  ID INT AUTO_INCREMENT NOT NULL,
  price INT NOT NULL,
  productID INT NOT NULL,
  PRIMARY KEY(ID),
  FOREIGN KEY (productID) REFERENCES products(productID)
);
CREATE TABLE contacts(
  ID INT AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  subjectLine VARCHAR(50),
  email VARCHAR(50),
  form TEXT,
  PRIMARY KEY (ID)
);