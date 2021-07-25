const inName = document.getElementById("iName");
const inEmailSingIn = document.getElementById("emailSingIn");
const inAdress = document.getElementById("adress");
const inCpf = document.getElementById("cpf");
const inBirthDay = document.getElementById("birthDay");
const inPassword = document.getElementById("password");
const buttonSingIn = document.getElementById("bSingIn");

const listaClientes = (() => {
	const fieldValue = localStorage.getItem("listaClientes");
	return fieldValue === null ? [] : JSON.parse(fieldValue);
})();

buttonSingIn.addEventListener("click", () => {
	const cliente = JSON.stringify({
		nome: inName.value,
		email: inEmailSingIn.value,
		endereço: inAdress.value,
		cpf: inCpf.value,
		nascimento: inBirthDay.value,
		senha: inPassword.value,
	});

	listaClientes.push(cliente);
	localStorage.setItem("listaClientes", JSON.stringify(listaClientes));
	alert("Usuário Cadastrado com sucesso!");
});
