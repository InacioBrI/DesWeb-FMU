window.onload = function () {
  const gastos = JSON.parse(localStorage.getItem("gastos")) || {};
  const salario = parseFloat(localStorage.getItem("salario")) || 0;
  const outras = parseFloat(localStorage.getItem("outras")) || 0;

  const rendaTotal = salario + outras;

  const categoriasEssenciais = ["Moradia", "Alimento", "Transporte", "Saude", "Assinaturas", "Educacao", "Outros"];
  const categoriaLazer = "Lazer";
  const categoriaInvestimento = "Investimento";

  let totalEssenciais = 0;
  let totalLazer = 0;
  let totalInvestimento = 0;

  for (let categoria in gastos) {
    const valor = parseFloat(gastos[categoria]) || 0;

    if (categoriasEssenciais.includes(categoria)) {
      totalEssenciais += valor;
    } else if (categoria === categoriaLazer) {
      totalLazer += valor;
    } else if (categoria === categoriaInvestimento) {
      totalInvestimento += valor;
    }
  }

  function calcularPercentual(valor) {
    return rendaTotal > 0 ? ((valor / rendaTotal) * 100).toFixed(2) : "0.00";
  }

  const pEssenciais = calcularPercentual(totalEssenciais);
  const pLazer = calcularPercentual(totalLazer);
  const pInvestimento = calcularPercentual(totalInvestimento);

  document.getElementById("valor-essenciais").textContent = pEssenciais + "%";
  document.getElementById("valor-lazer").textContent = pLazer + "%";
  document.getElementById("valor-investimento").textContent = pInvestimento + "%";

  localStorage.setItem("essenciais", pEssenciais);
  localStorage.setItem("lazer", pLazer);
  localStorage.setItem("investimento", pInvestimento);
};

function irParaAnalise() {
  window.location.href = "/ProjetoDevWeb/AnaliseGastos.html";
}