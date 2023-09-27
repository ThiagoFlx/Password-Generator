const CHARS_LOWER_CASE = "abcçdefghijklmnopqrstuvwxyz"
const CHARS_UPPER_CASE = "ABCÇDEFGHIJLMNOPQRSTUVWXYZ"
const SPECIAL_CHARS = "!@#$%^~&*()+?><:{}[]"
const NUMBERS = "0123456789"

const CHARS = [
	CHARS_LOWER_CASE,
	CHARS_UPPER_CASE,
	SPECIAL_CHARS,
	NUMBERS,
]

const genRandom = max => {
	return Math.floor(Math.random() * max);
}

const gerarCaracter = (minusculas, maiusculas, numeros, especiais) => {
	let chars = []

	if (minusculas) {
		chars.push(CHARS_LOWER_CASE)
	}
	if (maiusculas) {
		chars.push(CHARS_UPPER_CASE)
	}
	if (numeros) {
		chars.push(NUMBERS)
	}
	if (especiais) {
		chars.push(SPECIAL_CHARS)
	}

	if (chars.length === 0) {
		alert("Escolha pelo menos um")
	}

	const randomType = genRandom(chars.length)
	const random = genRandom(chars[randomType].length)
	const char = chars[randomType].charAt(random);
	return char;
}

const gerarSenha = () => {
	let senha = "";
	const tamanho = document.getElementById("tamanhoSenha").value
	console.log(tamanho)
	const minusculas = document.getElementById("minusculas").checked
	const maiusculas = document.getElementById("maiusculas").checked
	const numeros = document.getElementById("numeros").checked
	const especiais = document.getElementById("especiais").checked
	console.log(minusculas, maiusculas, numeros, especiais)
	for (let i=0; i <= tamanho; i++) {
		const char = gerarCaracter(minusculas, maiusculas, numeros, especiais)
		// console.log(char)
		senha=senha+char
	}
	console.log(senha)
	document.getElementById("senhap").innerHTML=senha
}

const apagarSenha = () => {
	document.getElementById("senhap").innerHTML=""
}