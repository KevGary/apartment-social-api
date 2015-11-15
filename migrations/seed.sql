INSERT INTO
  users
VALUES
  ( default, 'Kevin', 'Garrr' ),
  ( default, 'Ian', 'Behr' ),
  ( default, 'Andrew', 'Vrabs' ),
  ( default, 'Will', 'Te' ),
  ( default, 'Tom', 'Rom' ),
  ( default, 'Sally', 'Smith' );

INSERT INTO
  apartments
VALUES
  ( default, 'Maple Creek', '1802 19th St', 'Boulder', 'CO', '80302'),
  ( default, 'Timber Ridge', '1025 Adams Cir', 'Boulder', 'CO', '80301'),
  ( default, 'The Hub', '1853 26th St', 'Boulder', 'CO', '80302'),
  ( default, 'Tantra Lake', '1000 W. Moorhead Cir', 'Boulder', 'CO', '80305'),
  ( default, 'Brookside', '2726 Moorhead Ave', 'Boulder', 'CO', '80305'),
  ( default, 'Cavalier', '2900 Aurora Ave', 'Boulder', 'CO', '80303'),
  ( default, 'Coronado', '4977 Moorhead Ave', 'Boulder', 'CO', '80305'),
  ( default, 'Canyon Villa', '2121 Canyon Blvd', 'Boulder', 'CO', '80302'),
  ( default, 'Canterwood', '4970 Meredith Way', 'Boulder', 'CO', '80303'),
  ( default, 'Bear Creek', '3275 Apache Rd', 'Boulder', 'CO', '80303');

INSERT INTO
  leases
VALUES
  ( default, (SELECT id FROM users WHERE first_name = 'Kevin'), (SELECT id FROM apartments WHERE name = 'Maple Creek') ),
  ( default, (SELECT id FROM users WHERE first_name = 'Ian'), (SELECT id FROM apartments WHERE name = 'Maple Creek') ),
  ( default, (SELECT id FROM users WHERE first_name = 'Will'), (SELECT id FROM apartments WHERE name = 'Maple Creek') ),
  ( default, (SELECT id FROM users WHERE first_name = 'Tom'), (SELECT id FROM apartments WHERE name = 'Maple Creek') ),
  ( default, (SELECT id FROM users WHERE first_name = 'Sally'), (SELECT id FROM apartments WHERE name = 'Timber Ridge') ),
  ( default, (SELECT id FROM users WHERE first_name = 'Andrew'), (SELECT id FROM apartments WHERE name = 'Timber Ridge') );
