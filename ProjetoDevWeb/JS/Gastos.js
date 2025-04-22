function salvarGastos() {
  const campos = ["Moradia", "Alimento", "Transporte", "Saude", "Assinaturas", "Lazer", "Educacao", "Investimento", "Outros"];
  let gastos = {};

  campos.forEach(id => {
    gastos[id] = parseFloat(document.getElementById(id).value) || 0;
  });

  localStorage.setItem("gastos", JSON.stringify(gastos));
  window.location.href = "/ProjetoDevWeb/PlanoAcao.html";
}