const inputEmail = document.getElementById("email");
const buttonEmail = document.getElementById("bEmail");

buttonEmail.addEventListener("click", () => {
	const key = "email";
	const value = inputEmail.value;

	if (key && value) {
		localStorage.setItem(key, value);
		alert("E-mail cadastrado com sucesso!");
	} else {
		alert("Insira seu Email!");
	}
});