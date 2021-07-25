const produto1 = {
	id: 1,
	name: "Pacote 1",
	price: "12 x R$250,00",
};

const produto2 = {
	id: 2,
	name: "Pacote 3",
	price: "12 x R$450,00",
};

const produto3 = {
	id: 3,
	name: "Pacote 3",
	price: "12 x R$550,00",
};

const packages = (() => {
	const fieldValue = localStorage.getItem("bag");
	return fieldValue === null ? [] : JSON.parse(fieldValue);
})();

const cPacote1 = document.getElementById("comprar1");
cPacote1.addEventListener("click", () => {
	packages.push(produto1);
	localStorage.setItem("bag", JSON.stringify(packages));
	alert("Pacote 1 adicionado ao carrinho!");
});

const cPacote2 = document.getElementById("comprar2");
cPacote2.addEventListener("click", () => {
	packages.push(produto2);
	localStorage.setItem("bag", JSON.stringify(packages));
	alert("Pacote 2 adicionado ao carrinho!");
});

const cPacote3 = document.getElementById("comprar3");
cPacote3.addEventListener("click", () => {
	packages.push(produto3);
	localStorage.setItem("bag", JSON.stringify(packages));
	alert("Pacote 3 adicionado ao carrinho!");
});