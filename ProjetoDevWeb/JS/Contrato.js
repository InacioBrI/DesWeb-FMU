document.addEventListener("DOMContentLoaded", () => {
  const opcoes = document.querySelectorAll(".option");
  let tipoSelecionado = null;

  opcoes.forEach((opcao) => {
    opcao.addEventListener("click", () => {
      opcoes.forEach((o) => o.classList.remove("selected"));
      opcao.classList.add("selected");
      tipoSelecionado = opcao.getAttribute("data-tipo");
    });
  });

  window.continuar = function () {
    if (tipoSelecionado) {
      localStorage.setItem("tipoContrato", tipoSelecionado);
      window.location.href = "/ProjetoDevWeb/Rendas.html";
    } else {
      alert("Por favor, selecione um tipo de contrato.");
    }
  };
});