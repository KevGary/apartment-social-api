DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS leases;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS status;

CREATE TABLE users (
  id serial primary key,
  first_name varchar(60),
  last_name varchar(60)
);

CREATE TABLE apartments (
  id serial primary key,
  name varchar(60),
  apartment_number integer,
  street_address varchar(100),
  city varchar(60),
  state varchar(60),
  zip_code integer
);

-- CREATE TABLE leases (
--   id serial primary key,
--   user_id int references users(id) ON DELETE cascade,
--   apartment_id int references apartments(id) ON DELETE cascade
-- );

CREATE TABLE messages (
  id serial primary key,
  content varchar(120),
  timestamp varchar(20)
);


CREATE TABLE status (
  id serial primary key,
  option_1 varchar(80),
  option_2 varchar(80),
  option_3 varchar(80)
);