const validation = (userData, errors, setErrors) => {
  if (!userData.username)
    setErrors({ ...errors, username: "Completa el campo vacio" });
  else if (userData.username.length > 35)
    setErrors({ ...errors, username: "Tu usuario supero los 35 caracteres" });
  else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  ) {
    setErrors({ ...errors, username: "Tu mail no es valido" });
  } else {
    setErrors({ ...errors, username: "" });
  }
  if (userData.password.length > 6 || userData.password.length < 10) {
    setErrors({ ...errors, password: "Tu contraseña es invalida" });
  } else if (/\d/.test(userData.password)) {
    setErrors({
      ...errors,
      password: "Tu contraseña debe contener al menos un número",
    });
  } else {
    setErrors({ ...errors, password: "" });
  }
};

export default validation;
