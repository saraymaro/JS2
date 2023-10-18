
// Frase aleatoria
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

  // Frase aleatoria por categoria
document.addEventListener("DOMContentLoaded", function () {
  const thisElement = document.getElementById("fraseC");
  const btnC = document.getElementById("btnC");

  btnC.addEventListener("click", fetchChuckNorrisCategoria);

  function fetchChuckNorrisCategoria() {
    const categorySelect = document.getElementById("category-select");
    const selectedCategory = categorySelect.value;
    const url = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const frase = data.value;
        thisElement.textContent = frase;
      })
      .catch((error) => {
        console.error("Error al obtener la frase de Chuck Norris:", error);
        thisElement.textContent = "No se pudo obtener la frase en este momento.";
      });
  }
});

// Frase aleatoria por palabra de texto
document.addEventListener("DOMContentLoaded", function () {
  const elementThis = document.getElementById("fraseT");
  const btnG = document.getElementById("btnG");

  btnG.addEventListener("click", fetchChuckNorrisTexto);

  function fetchChuckNorrisTexto() {
      const textSearch = document.getElementById("search");
      const text = textSearch.value;
      const url = `https://api.chucknorris.io/jokes/search?query=${text}`;

      fetch(url)
          .then((response) => response.json())
          .then((data) => {
              const frase = data.result;

              if(frase.length > 0){
                  const randomFrase = Math.floor(Math.random() * frase.length);
                  const fraseRandom = frase[randomFrase].value;
                  elementThis.textContent = fraseRandom
              } else {
                  elementThis.textContent = "No existen frases con esa palabra.";
              }
          })
          .catch((error) => {
              console.error("Error al obtener la frase de Chuck Norris:", error);
              elementThis.textContent =
                  "No se pudo obtener la frase en este momento.";
          });
  }
});
