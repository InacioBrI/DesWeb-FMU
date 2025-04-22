
function baixarResumo() {
    const resumo = `Resumo Financeiro:\n\n` +
    `Tipo de contrato: ${localStorage.getItem("tipoContrato")}\n` +
    `Salário bruto: R$${localStorage.getItem("salario")}\n` +
    `Outras rendas: R$${localStorage.getItem("outras")}\n` +
    `Gastos totais: ${localStorage.getItem("gastos")}\n` +
    `Essenciais: ${localStorage.getItem("essenciais") || 0}%\n` +
    `Lazer: ${localStorage.getItem("lazer") || 0}%\n` +
    `Investimentos: ${localStorage.getItem("investimento") || 0}%`;

    const blob = new Blob([resumo], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resumo-financeiro.txt";
    link.click();
}