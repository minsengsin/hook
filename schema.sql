DROP DATABASE IF EXISTS hook;

CREATE DATABASE hook;

USE hook;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);
