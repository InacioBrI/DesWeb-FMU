async function loadHTML(id, file) {
    try {
      const response = await fetch(file);
      const content = await response.text();
      document.getElementById(id).innerHTML = content;
    } catch (error) {
      console.error("Erro ao carregar:", file, error);
    }
  }

  loadHTML("header", "includes/header.html");
  loadHTML("footer", "includes/footer.html");