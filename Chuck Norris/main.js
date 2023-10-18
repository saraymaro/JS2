
document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.getElementById("frase");
    const btn = document.getElementById("btn");
  
    btn.addEventListener("click", fetchChuckNorrisFrase);
  
    function fetchChuckNorrisFrase() {
      const apiUrl = "https://api.chucknorris.io/jokes/random";
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const frase = data.value; 
          quoteElement.textContent = frase;
        })
        .catch((error) => {
          console.error("Error al obtener la frase de Chuck Norris:", error);
          quoteElement.textContent = "No se pudo obtener la frase en este momento.";
        });
    }
  });
  