CREATE DATABASE IF NOT EXISTS fcd2;

USE fcd2;


DROP TABLE IF EXISTS user_status;
DROP TABLE IF EXISTS p_position;
DROP TABLE IF EXISTS foot;
-- DROP TABLE IF EXISTS opponent;
-- DROP TABLE IF EXISTS surface;
-- DROP TABLE IF EXISTS p_status;
-- DROP TABLE IF EXISTS m_result;
-- DROP TABLE IF EXISTS place;
-- DROP TABLE IF EXISTS training;
-- DROP TABLE IF EXISTS presence;
-- DROP TABLE IF EXISTS match_play;
DROP TABLE IF EXISTS players;


CREATE TABLE user_status (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(255)
);
INSERT INTO
user_status(id, `label`)
VALUES
  ("Administrateur"),
  ("Joueurs");



CREATE TABLE p_position (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(255)
);

INSERT INTO
p_position(`label`)
VALUES
  ("GK"),
  ("DC"),
  ("DG"),
  ("DD"),
  ("ALG"),
  ("ALD"),
  ("MDef"),
  ("MC"),
  ("MD"),
  ("MG"),
  ("MO"),
  ("ATG"),
  ("ATD"),
  ("ATT"),
  ("Entraineur");

CREATE TABLE foot (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(255)
);

INSERT INTO
foot(id, `label`)
VALUES
("gauche"),
("droit");



-- CREATE TABLE opponent (
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   team VARCHAR(255)
-- );


-- CREATE TABLE surface (
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `label` VARCHAR(255)
-- );


-- CREATE TABLE p_status (
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `label` VARCHAR(255)
-- );


-- CREATE TABLE m_result (
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `label` VARCHAR(255)
-- );


-- CREATE TABLE place (
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   `label` VARCHAR(255)
-- );



-- CREATE TABLE training (
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   train_date DATE,
--   surface_id INT
-- );



-- CREATE TABLE presence (
--   id_players INT,
--   id_training INT,
--   id_match_play INT,
--   id_t_status INT
--  );



-- CREATE TABLE match_play (
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   m_day DATE,
--   opponent_id VARCHAR(255),
--   place_id VARCHAR(255),
--   surface_id INT,
--   m_result INT,
--   score INT,
--   presence_id INT
--   );

CREATE TABLE players (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  lastName VARCHAR(255) NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  birthday DATE,
  p_age INT,
  phone_num INT,
  `password` VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  FOREIGN KEY (id p_position) INT REFERENCES p_position (id p_position),
  FOREIGN KEY (id foot) INT REFERENCES foot (id foot)
);


INSERT INTO
  players (id, lastName, firstName, birthday, p_age, phone_num,  email, `password`, p_position_id, foot_id, user_status)
VALUES
  (
    1
    "BADER",
    "Gilles",
    04/06/1982,
    40,
    0689859757,
    "bluetoothdu67@gmail.com",
    "azerty123",
    1,
    2,
    2
  ),
  (
    2
    "BARTHELME",
    "Guillaume",
    12/02/1999,
    23,
    0635247659,
    "bluetoothdu67@gmail.com",
    "azerty123",
    2,
    2,
    2
  ),
  (
    3
    "BOUQUEY",
    "Maxence",
    12/03/2002,
    20,
    0683158747,
    "bluetoothdu67@gmail.com",
    "azerty123",
    3,
    1,
    2
  ),
  (
    4
    "BRONN",
    "Adrien",
    14/12/1994,
    28,
    0604454627,
    "bluetoothdu67@gmail.com",
    "azerty123",
    3,
    1,
    2
  ),
  (
    5
    "CHAPPEL",
    "Luc",
    29/01/1994,
    28,
    0638654567,
    "bluetoothdu67@gmail.com",
    "azerty123",
    3,
    1,
    2
  ),
  (
    6
    "COLLE",
    "Benjamin",
    20/01/2002,
    20,
    0612554088,
    "bluetoothdu67@gmail.com",
    "azerty123",
    11,
    2,
    2
  ),
  (
    7
    "EL ARABI",
    "Khalil",
    09/08/1997,
    25,
    0643879260,
    "bluetoothdu67@gmail.com",
    "azerty123",
    11,
    2,
    2
  ),
  (
    8
    "GIARDINO",
    "Loic",
    22/09/2004,
    18,
    0613343369,
    "bluetoothdu67@gmail.com",
    "azerty123",
    7,
    2,
    2
  ),
  (
    9
    "Han",
    "David",
    18/06/1993,
    29,
    0687177139,
    bluetoothdu67@gmail.com,
    "azerty123",
    7,
    2,
    2
  ),
  (
    10
    "HAUSWALD",
     "Alexis",
    29/08/1995,
    27,
    0624361366,
    "bluetoothdu67@gmail.com",
    "azerty123",
    14,
    2,
    2
  ),
  (
    11
    "HEILIGENSTEIN",
    "Geoffrey",
    18/06/2001,
    21,
    0648767696,
    "bluetoothdu67@gmail.com",
    "azerty123",
    14,
    2,
    2
  ),
  (
    12
    	"LAUREAUX",
    "Steve",
    27/02/1993,
    29,
    0652274181,
    "bluetoothdu67@gmail.com",
    "azerty123",
    14,
    2,
    2
  ),
  (
    13
    "LOPEZ",
    "Florian",
    01/05/1993,
    29,
    0652709292,
    "bluetoothdu67@gmail.com",
    "azerty123",
    8,
    2,
    2
  ),
  (
    14
    "LUTZ",
    "Serge",
    04/02/1989,
    33,
    0635029360,
    "bluetoothdu67@gmail.com",
    "azerty123",
    4,
    2,
    2
  ),
  (
    15
    "PERROTEY",
    "Alexandre",
    08/08/1999,
    23,
    0659894842,
    "bluetoothdu67@gmail.com",
    "azerty123",
    4,
    2,
    2
  ),
  (
    16
    "RICHERT",
    "Gregory",
    20/06/1980,
    42,
    0651773272,
    "guil.wernert@gmail.com",
    "entraineur123",
    15,
    2,
    1
  ),
  (
    17
    "SATI",
    "Akin",
    17/03/1999,
    23,
    0672846587,
    "bluetoothdu67@gmail.com",
    "azerty123",
    2,
    2,
    2
  ),
  (
    18
    "SCHOTT",
    "Arthur",
    23/05/2001,
    21,
    0762587887,
    "bluetoothdu67@gmail.com",
    "azerty123",
    8,
    2,
    2
  ),
  (
    19
    "SEYLER",
    "Quentin",
    19/10/2001,
    21,
    0789511170,
    "bluetoothdu67@gmail.com",
    "azerty123",
    8,
    2,
    2
  ),
  (
    20
    "SOULIER",
    "Victor",
    11/05/2001,
    21,
    0781805627,
    "bluetoothdu67@gmail.com",
    "azerty123",
    1,
    2,
    2
  ),
  (
    21
    "SUTTER",
    "Maxime",
    11/08/2000,
    22,
    0608977377,
    "bluetoothdu67@gmail.com",
    "azerty123",
    14,
    2,
    2
  ),
  (
    22
    "THOMAS",
    "JULIEN",
    22/04/1993,
    29,
    0675911042,
    "bluetoothdu67@gmail.com",
    "azerty123",
    8,
    2,
    2
  ),
  (
    23
    "WERNERT",
    "Guillaume",
    10/06/1983,
    39,
    0632302768,
    "guil.wernert@gmail.com",
    "entraineur123"
    15,
    1,
    1
  );
