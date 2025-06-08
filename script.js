const tela = document.getElementById("tela");

function inserir(valor) {
  tela.value += valor;
}

function limpar() {
  tela.value = '';
}

function calcular() {
  try {
    tela.value = eval(tela.value);
  } catch {
    tela.value = "Erro";
  }
}
