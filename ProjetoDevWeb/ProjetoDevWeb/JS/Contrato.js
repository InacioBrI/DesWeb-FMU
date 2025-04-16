const botoes = document.querySelectorAll('.botao-selecao');
    let tipoSelecionado = null;

    botoes.forEach(botao => {
      botao.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('selecionado'));
        botao.classList.add('selecionado');
        tipoSelecionado = botao.getAttribute('data-tipo');
      });
    });

    function continuar() {
      if (tipoSelecionado) {
        alert("Você selecionou: " + tipoSelecionado.toUpperCase());
        // Aqui você pode redirecionar ou salvar a escolha
      } else {
        alert("Por favor, selecione um tipo de contrato.");
      }
    }