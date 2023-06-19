window.addEventListener("DOMContentLoaded", function() {
 
  const jogadorDetalhes = JSON.parse(localStorage.getItem("jogadorDetalhes"));

  const  detalhesContainer = document.getElementById("detalhesContainer");

  const img = document.createElement("img");
  img.src = jogadorDetalhes.imagem;
  detalhesContainer.appendChild(img);

  const pNome = document.createElement("p");
  pNome.textContent = "Nome: " + jogadorDetalhes.nome;
  detalhesContainer.appendChild(pNome);

  const pPosicao = document.createElement("p");
  pPosicao.textContent = "Posição: " + jogadorDetalhes.posicao;
  detalhesContainer.appendChild(pPosicao);

  const pNomeCompleto = document.createElement("p");
  pNomeCompleto.textContent = "Nome Completo: " + jogadorDetalhes.nome_completo;
  detalhesContainer.appendChild(pNomeCompleto);

  const pNascimento = document.createElement("p");
  pNascimento.textContent = "Data de Nascimento: " + jogadorDetalhes.nascimento;
  detalhesContainer.appendChild(pNascimento);

  const pAltura = document.createElement("p");
  pAltura.textContent = "Altura: " + jogadorDetalhes.altura;
  detalhesContainer.appendChild(pAltura);

  const pDescricao = document.createElement("p");
  pDescricao.textContent = "Descrição: " + jogadorDetalhes.descricao;
  detalhesContainer.appendChild(pDescricao);
});

function voltar() {
  history.back();
}
