const AbstractManager = require("./AbstractManager");

class PlayersManager extends AbstractManager {
  constructor() {
    super({ table: "players" });
  }

  insert(player) {
    return this.connection.query(
      `insert into ${this.table} (lastName, firstName, p_age, phone_num, email, password, p_position_id, foot_id, user_status_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        player.lastName,
        player.firstName,
        player.p_age,
        player.phone_num,
        player.email,
        player.password,
        player.p_position_id,
        player.foot_id,
        player.user_status_id,
      ]
    );
  }

  update(player) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [player.title, player.id]
    );
  }
}

module.exports = PlayersManager;
