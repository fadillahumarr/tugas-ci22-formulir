const form = function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;

  let upperCasePassword = /[A-Z]/;
  let lowerCasePassword = /[a-z]/;
  let numbersPassword = /[0-9]/;
  let status = document.getElementById("status");
  if (
    !upperCasePassword.test(password) ||
    !lowerCasePassword.test(password) ||
    !numbersPassword.test(password) ||
    password.length < 8
  )
    return (status.innerText = `Password minimal 8 karakter, mengandung huruf besar,huruf kecil, dan angka`);

  if (name != "" && email != "" && password != "") {
    return swal({
      title: "Login berhasil",
      text: `Selamat datang ${name}`,
      icon: "success",
    });
  } else if (name === "" && email === "") {
    swal({
      title: "Gagal Login",
      text: "Masukkan Nama dan Email",
      icon: "error",
    });
  } else {
    swal({
      title: "Gagal Login",
      text:
        name === "" ? "Masukkan Nama" : email === "" ? "Masukkan Email" : "",
      icon: "error",
    });
  }
};
const loginButton = document.querySelector(".submitright");
loginButton.addEventListener("click", function () {
  form();
});
