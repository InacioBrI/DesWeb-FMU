function calcularINSS(salario) {
  const tipo = localStorage.getItem("tipoContrato");
  if (tipo === "clt") {
    return salario * 0.075; // Simula 7.5% de INSS, por exemplo
  }
  return 0;
}

function salvarRenda() {
  const salarioBruto = parseFloat(document.getElementById("salario").value) || 0;
  const outras = parseFloat(document.getElementById("outras").value) || 0;
  const descontoINSS = calcularINSS(salarioBruto);
  const salarioLiquido = salarioBruto - descontoINSS;
  const totalRenda = salarioLiquido + outras;

  localStorage.setItem("salario", salarioLiquido);
  localStorage.setItem("outras", outras);
  localStorage.setItem("totalRenda", totalRenda);

  window.location.href = "/ProjetoDevWeb/Gastos.html";
}