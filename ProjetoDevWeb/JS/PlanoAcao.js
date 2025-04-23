window.onload = () => {
  const gastos = JSON.parse(localStorage.getItem("gastos")) || {};
  const renda = parseFloat(localStorage.getItem("salario") || 0) + parseFloat(localStorage.getItem("outras") || 0);

  const categorias = {
    essenciais: ["Moradia", "Alimento", "Transporte", "Saude", "Assinaturas", "Educacao", "Outros"],
    lazer: ["Lazer"],
    investimento: ["Investimento"]
  };

  const totais = { essenciais: 0, lazer: 0, investimento: 0 };

  for (const [categoria, valor] of Object.entries(gastos)) {
    const val = parseFloat(valor) || 0;
    if (categorias.essenciais.includes(categoria)) totais.essenciais += val;
    else if (categorias.lazer.includes(categoria)) totais.lazer += val;
    else if (categorias.investimento.includes(categoria)) totais.investimento += val;
  }

  const calc = v => renda > 0 ? ((v / renda) * 100).toFixed(2) + "%" : "0.00%";

  document.getElementById("valor-essenciais").textContent = calc(totais.essenciais);
  document.getElementById("valor-lazer").textContent = calc(totais.lazer);
  document.getElementById("valor-investimento").textContent = calc(totais.investimento);

  // Guarda os dados para outras páginas, se necessário
  localStorage.setItem("essenciais", calc(totais.essenciais));
  localStorage.setItem("lazer", calc(totais.lazer));
  localStorage.setItem("investimento", calc(totais.investimento));
};

function irParaAnalise() {
  window.location.href = "/ProjetoDevWeb/AnaliseGastos.html";
}
