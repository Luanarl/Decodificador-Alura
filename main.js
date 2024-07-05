var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#resultado");

function criptografarTexto() {
    
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('resultado').innerHTML = `
    <textarea readonly id="input-texto">${resultCripto}</textarea>
    <button class="cont botoes__copiar" onclick="copiarTexto('${resultCripto}')">Copiar</button>
  `;
}

function descriptografartexto() {
    var texto = textInput.value;

    var  resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

    document.getElementById('resultado').innerHTML = `
        <textarea readonly id="input-texto">${resultDescripto}</textarea>
        <button class="cont botoes__copiar" onclick="copiarTexto('${resultDescripto}')">Copiar</button>
      `;
}

function copiarTexto(texto) {
  var tempInput = document.createElement("textarea");
  tempInput.value = texto;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(tempInput);

}