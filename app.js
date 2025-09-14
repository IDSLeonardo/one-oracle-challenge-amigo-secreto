let nomeAmigos = [];
let amigosJaSorteados = [];

function adicionarAmigo() {
  let nome = document.querySelector("#amigo").value;
  if (nome === "") {
    alert("Por favor, digite um nome válido!");
    return;
  }
  nomeAmigos.push(nome);
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = nomeAmigos;
  document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
  if (nomeAmigos.length >= 3) {
    if (amigosJaSorteados.length === nomeAmigos.length) {
      alert("Todos os amigos já foram sorteados");
      return;
    }
    let indiceSorteado = parseInt(Math.random() * nomeAmigos.length);
    let amigoSecreto = nomeAmigos[indiceSorteado];
    while (amigosJaSorteados.includes(amigoSecreto)) {
      indiceSorteado = parseInt(Math.random() * nomeAmigos.length);
      amigoSecreto = nomeAmigos[indiceSorteado];
    }
    amigosJaSorteados.push(amigoSecreto);
    document.querySelector(
      "#resultado"
    ).innerHTML = `O amigo secreto é ${amigoSecreto}`;
  } else {
    alert("Você deve digitar pelo menos três nomes para sortear os amigos!");
  }
}
