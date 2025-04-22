const categorias = {
  Essenciais: ["Moradia", "Alimento", "Transporte", "Saude"],
  Lazer: ["Assinaturas", "Lazer"],
  Investimento: ["Educacao", "Investimento", "Outros"]
};

function calcularPorcentagens() {
  const gastos = JSON.parse(localStorage.getItem("gastos")) || {};
  const total = Object.values(gastos).reduce((acc, val) => acc + val, 0);

  let resultados = {};
  for (const [categoria, chaves] of Object.entries(categorias)) {
    const soma = chaves.reduce((acc, chave) => acc + (gastos[chave] || 0), 0);
    resultados[categoria] = ((soma / total) * 100).toFixed(1);
  }

  return resultados;
}

function mostrarDados() {
  const container = document.getElementById("dados-gastos");
  const porcentagens = calcularPorcentagens();
  container.innerHTML = Object.entries(porcentagens)
    .map(([categoria, valor]) => `<p><span class="categoria">${categoria.toUpperCase()}</span> <span class="porcentagem">${valor}%</span></p>`)
    .join("");
}

mostrarDados();