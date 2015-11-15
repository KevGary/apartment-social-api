DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS apartments;

CREATE TABLE users (
  id serial primary key,
  first_name varchar(60),
  last_name varchar(60)
);

CREATE TABLE apartments (
  id serial primary key,
  name varchar(60),
  apartment_number,
  street_address varchar(100),
  city varchar(60),
  state varchar(60),
  zip_code numeric
);