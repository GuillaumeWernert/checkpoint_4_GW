const validatePlayer = (player) => {
  if (player.lastName.length < 3 || typeof player.lastName !== "string") {
    return {
      status: false,
      errorMessage: "3 caracteres minimum sur le champ nom",
    };
  }
  if (player.firstName.length < 3 || typeof player.firstName !== "string") {
    return {
      status: false,
      errorMessage: "3 caracteres minimum sur le champ prénom",
    };
  }
  if (player.p_age.length < 3 || typeof player.p_age !== "string") {
    return {
      status: false,
      errorMessage: "1 caracteres minimum sur le champ age",
    };
  }
  if (player.phone_num.length < 3 || typeof player.phone_num !== "string") {
    return {
      status: false,
      errorMessage: "3 caracteres minimum sur le champ numéro de téléphone",
    };
  }
  if (player.password.length < 3 || typeof player.password !== "string") {
    return {
      status: false,
      errorMessage: "3 caracteres minimum sur le champ mot de passe",
    };
  }
  if (player.email.length < 3 || typeof player.email !== "string") {
    return {
      status: false,
      errorMessage: "3 caracteres minimum sur le champ email",
    };
  }
  if (
    player.p_position_id.length < 1 ||
    typeof player.p_position_id !== "string"
  ) {
    return {
      status: false,
      errorMessage: "3 caracteres minimum sur le champ poste",
    };
  }
  if (player.foot_id.length < 1 || typeof player.foot_id !== "string") {
    return {
      status: false,
      errorMessage: "3 caracteres minimum sur le champ pied fort",
    };
  }
  if (
    player.user_status_id.length < 1 ||
    typeof player.user_status_id !== "string"
  ) {
    return {
      status: false,
      errorMessage: "3 caracteres minimum sur le champ statut",
    };
  }
};

export default validatePlayer;
