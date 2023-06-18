
function adicionarJogadores() {
  const containerMasculino = document.getElementById("jogadoresMasculinos");
  const containerFeminino = document.getElementById("jogadoresFemininos");

  for (var i = 0; i < jogadores.length; i++) {
    const jogador = jogadores[i];

    const divJogador = document.createElement("div");
    divJogador.classList.add("jogador");

    const img = document.createElement("img");
    img.src = jogador.imagem;
    img.addEventListener("click", function() {
      localStorage.setItem("jogadorDetalhes", JSON.stringify(jogador));
      window.location.href = "detalhes.html";
    });
    divJogador.appendChild(img);

    const pNome = document.createElement("p");
    pNome.textContent = "Nome: " + jogador.nome;
    divJogador.appendChild(pNome);

    if (jogador.elenco === "masculino") {
      containerMasculino.appendChild(divJogador);
    } else if (jogador.elenco === "feminino") {
      containerFeminino.appendChild(divJogador);
    }
  }
}


function exibrDetalhesJogador(jogador) {
 
  localStorage.setItem("jogadorDetalhes", JSON.stringify(jogador));
  
  window.location.href = "detalhes.html";
}


function adicionarEventoAmpliarImagem() {

  var imagensJogadores = document.querySelectorAll(".jogador img");


  imagensJogadores.forEach(function(imagem) {
    imagem.addEventListener("mouseover", function() {
      this.classList.add("ampliar-imagem");
    });

    imagem.addEventListener("mouseout", function() {
      this.classList.remove("ampliar-imagem");

  
      const caixaTexto = this.nextSibling;
      if (caixaTexto.classList.contains("caixa-texto")) {
        caixaTexto.parentNode.removeChild(caixaTexto);
      }
    });
  });
};
function criarElemento(tag, classes, texto) {
  const elemento = document.createElement(tag);
  if (classes) {
    elemento.classList.add(...classes);
  }
  if (texto) {
    elemento.textContent = texto;
  }
  return elemento;
}

