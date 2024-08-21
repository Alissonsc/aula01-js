//Exibir no terminal
console.log("Olá Mundo");
//Exibir no navegador
document.write("Olá Navegador !");
//Um alerta
alert("Alerta de Confirmação!");

//Utilizar duas barras é um comentario dentro do terminal
/*

utilizar o barra asterístico é comentario em grande
quanntidade ou bloco inteiro 
*/

//string

//Capturar o nome do Aluno
var nome = window.prompt("Informe o nome:");

// Guardar a primeira nota
var nota1 = window.prompt("Digite a nota 1:");

//converte a nota1 de texto para decimal
nota1 = parseFloat(nota1);

//Guardar a segunda nota
var nota2 = window.prompt("Digite a nota 2:");

//converte a nota2 de texto para decimal
nota2 = parseFloat(nota2);

//calculo a média das duas notas
var media = (nota1 + nota2)/2;

//Gero a mensagem de exibição do nome e da média do aluno
var mensagem = nome + " , você obteve a média : " + media;
window.alert(mensagem);


window.alert("A média das notas é: " + media);
