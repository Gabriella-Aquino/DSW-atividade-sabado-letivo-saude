function calcularIMC(event) {
  event.preventDefault();

  const pesoInput = document.querySelector('input[name="peso"]');
  const alturaInput = document.querySelector('input[name="altura"]');
  const respostaDiv = document.querySelector(".resposta-div");

  const peso = Number(pesoInput.value);
  const altura = Number(alturaInput.value);

  console.log(peso);
  console.log(altura);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    respostaDiv.textContent =
      "Por favor, insira valores válidos para peso e altura.";
    respostaDiv.style.backgroundColor = "red";
    return;
  }

  const imc = peso / (altura * altura);
  console.log(imc);

  let classificacao;
  if (imc < 18.5) {
    classificacao = "Baixo peso";
    respostaDiv.style.backgroundColor = "lightblue";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
    respostaDiv.style.backgroundColor = "lightgreen";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
    respostaDiv.style.backgroundColor = "orange";
  } else if (imc >= 30 && imc < 34.9) {
    classificacao = "Obesidade grau I";
    respostaDiv.style.backgroundColor = "red";
  } else if (imc >= 35 && imc < 39.9) {
    classificacao = "Obesidade grau II";
    respostaDiv.style.backgroundColor = "darkred";
  } else {
    classificacao = "Obesidade grau III";
    respostaDiv.style.backgroundColor = "maroon";
  }

  respostaDiv.textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

document
  .querySelector(".calculadora-form")
  .addEventListener("submit", calcularIMC);
