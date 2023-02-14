function login() {
  const nameInput = document.getElementById("login").value;
  const passwordInput = document.getElementById("passWord").value;

  console.log(passwordInput);

  userName = {
    name: "gabriel",
    password: "123",
  };

  if (nameInput === userName.name && passwordInput === userName.password) {

    alert("Logado!");
  } else {
    alert("Credenciais incorretas.");
  }
}
