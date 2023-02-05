CREATE DATABASE IF NOT EXISTS fcd2;

USE fcd2;


DROP TABLE IF EXISTS user_status;
DROP TABLE IF EXISTS p_position;
DROP TABLE IF EXISTS foot;
DROP TABLE IF EXISTS players;


CREATE TABLE user_status (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(255)
);
INSERT INTO
user_status(id, `label`)
VALUES (
    1,
    "Administrateur"
  ),(
    2,
    "Joueurs"
  );



CREATE TABLE
  p_position (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(255)
);

INSERT INTO
  p_position (
    id,
    `label`
  )
VALUES (
    1,
    "GK"
  ), (
    2,
    "DC"
  ), (
    3, "DG"
  ), (
    4,
    "DD"
  ), (
    5,
    "ALG"
  ), (
    6,
    "ALD"
  ), (
    7,
    "MDef"
  ), (
    8,
    "MC"
  ), (
    9,
    "MD"
  ), (
    10,
    "MG"
  ), (
    11,
    "MO"
  ), (
    12,
    "ATG"
  ), (
    13,
    "ATD"
  ), (
    14,
    "ATT"
  ), (
    15,
    "Entraineur"
  );

CREATE TABLE
  foot (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(255)
);

INSERT INTO
foot (
  id,
  `label`
  )
VALUES (
  1,
  "gauche"
), (
  2,
  "droit"
);


CREATE TABLE
  players (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    lastName VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    p_age INT,
    phone_num INT,
    email VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    p_position_id INT NOT NULL,
    CONSTRAINT fk_p_position FOREIGN KEY (p_position_id) REFERENCES p_position (id),
    foot_id INT NOT NULL,
    CONSTRAINT fk_foot_id FOREIGN KEY (foot_id) REFERENCES foot (id),
    user_status_id INT NOT NULL,
    CONSTRAINT fk_user_status_id FOREIGN KEY (user_status_id) REFERENCES user_status (id)
);


INSERT INTO
  players (
    id,
    lastName,
    firstName,
    p_age,
    phone_num,
    email,
    `password`,
    p_position_id,
    foot_id,
    user_status_id
  )
VALUES (
    1,
    "BADER",
    "Gilles",
    40,
    0689859757,
    "bluetoothdu67@gmail.com",
    "azerty123",
    1,
    2,
    2
  ), (
    2,
    "BARTHELME",
    "Guillaume",
    23,
    0635247659,
    "bluetoothdu67@gmail.com",
    "azerty123",
    2,
    2,
    2
  ), (
    3,
    "BOUQUEY",
    "Maxence",
    20,
    0683158747,
    "bluetoothdu67@gmail.com",
    "azerty123",
    3,
    1,
    2
  ), (
    4,
    "BRONN",
    "Adrien",
    28,
    0604454627,
    "bluetoothdu67@gmail.com",
    "azerty123",
    3,
    1,
    2
  ), (
    5,
    "CHAPPEL",
    "Luc",
    28,
    0638654567,
    "bluetoothdu67@gmail.com",
    "azerty123",
    3,
    1,
    2
  ), (
    6,
    "COLLE",
    "Benjamin",
    20,
    0612554088,
    "bluetoothdu67@gmail.com",
    "azerty123",
    11,
    2,
    2
  ), (
    7,
    "EL ARABI",
    "Khalil",
    25,
    0643879260,
    "bluetoothdu67@gmail.com",
    "azerty123",
    11,
    2,
    2
  ), (
    8,
    "GIARDINO",
    "Loic",
    18,
    0613343369,
    "bluetoothdu67@gmail.com",
    "azerty123",
    7,
    2,
    2
  ), (
    9,
    "Han",
    "David",
    29,
    0687177139,
    "bluetoothdu67@gmail.com",
    "azerty123",
    7,
    2,
    2
  ), (
    10,
    "HAUSWALD",
     "Alexis",
    27,
    0624361366,
    "bluetoothdu67@gmail.com",
    "azerty123",
    14,
    2,
    2
  ), (
    11,
    "HEILIGENSTEIN",
    "Geoffrey",
    21,
    0648767696,
    "bluetoothdu67@gmail.com",
    "azerty123",
    14,
    2,
    2
  ), (
    12,
    "LAUREAUX",
    "Steve",
    29,
    0652274181,
    "bluetoothdu67@gmail.com",
    "azerty123",
    14,
    2,
    2
  ), (
    13,
    "LOPEZ",
    "Florian",
    29,
    0652709292,
    "bluetoothdu67@gmail.com",
    "azerty123",
    8,
    2,
    2
  ), (
    14,
    "LUTZ",
    "Serge",
    33,
    0635029360,
    "bluetoothdu67@gmail.com",
    "azerty123",
    4,
    2,
    2
  ), (
    15,
    "PERROTEY",
    "Alexandre",
    23,
    0659894842,
    "bluetoothdu67@gmail.com",
    "azerty123",
    4,
    2,
    2
  ), (
    16,
    "RICHERT",
    "Gregory",
    42,
    0651773272,
    "guil.wernert@gmail.com",
    "entraineur123",
    15,
    2,
    1
  ), (
    17,
    "SATI",
    "Akin",
    23,
    0672846587,
    "bluetoothdu67@gmail.com",
    "azerty123",
    2,
    2,
    2
  ), (
    18,
    "SCHOTT",
    "Arthur",
    21,
    0762587887,
    "bluetoothdu67@gmail.com",
    "azerty123",
    8,
    2,
    2
  ), (
    19,
    "SEYLER",
    "Quentin",
    21,
    0789511170,
    "bluetoothdu67@gmail.com",
    "azerty123",
    8,
    2,
    2
  ), (
    20,
    "SOULIER",
    "Victor",
    21,
    0781805627,
    "bluetoothdu67@gmail.com",
    "azerty123",
    1,
    2,
    2
  ), (
    21,
    "SUTTER",
    "Maxime",
    22,
    0608977377,
    "bluetoothdu67@gmail.com",
    "azerty123",
    14,
    2,
    2
  ), (
    22,
    "THOMAS",
    "JULIEN",
    29,
    0675911042,
    "bluetoothdu67@gmail.com",
    "azerty123",
    8,
    2,
    2
  ), (
    23,
    "WERNERT",
    "Guillaume",
    39,
    0632302768,
    "guil.wernert@gmail.com",
    "Entraineur123",
    15,
    1,
    1
);
