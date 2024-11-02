document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".catalog-item").forEach((item) => {
      const minusBtn = item.querySelector(".minus");
      const plusBtn = item.querySelector(".plus");
      const quantidadeElem = item.querySelector(".quantidade");
      const priceElem = item.querySelector(".price");

      const mainPrice = parseFloat(priceElem.innerHTML);
      priceElem.setAttribute("data-original-price", mainPrice);

      let counter = parseInt(quantidadeElem.textContent);
      const maxQuant = parseInt(item.querySelector(".quant").textContent);

      minusBtn.addEventListener("click", () => {
          if (counter > 1) {
              counter--;
              quantidadeElem.textContent = counter;
              priceElem.innerHTML = (mainPrice * counter).toFixed(2);
          }
      });

      plusBtn.addEventListener("click", () => {
          if (counter < maxQuant) {
              counter++;
              quantidadeElem.textContent = counter;
              priceElem.innerHTML = (mainPrice * counter).toFixed(2);
          }
      });
  });

  function ordenarPorMenorPreco(items) {
      return items.sort((a, b) => {
          const priceA = parseFloat(a.querySelector(".price").getAttribute("data-original-price"));
          const priceB = parseFloat(b.querySelector(".price").getAttribute("data-original-price"));
          return priceA - priceB;
      });
  }

  function ordenarPorMaiorPreco(items) {
      return items.sort((a, b) => {
          const priceA = parseFloat(a.querySelector(".price").getAttribute("data-original-price"));
          const priceB = parseFloat(b.querySelector(".price").getAttribute("data-original-price"));
          return priceB - priceA;
      });
  }

  function ordenarPorRecentes(items) {
      return items;
  }

  function ordenarProdutos() {
      const catalog = document.querySelector(".catalog-main");
      const items = Array.from(catalog.getElementsByClassName("catalog-item"));
      const orderBy = document.getElementById("order").value;

      let sortedItems;
      if (orderBy === "low-price") {
          sortedItems = ordenarPorMenorPreco(items);
      } else if (orderBy === "high-price") {
          sortedItems = ordenarPorMaiorPreco(items);
      } else {
          sortedItems = ordenarPorRecentes(items);
      }

      sortedItems.forEach(item => catalog.appendChild(item));
  }

  document.getElementById("order").addEventListener("change", ordenarProdutos);
});
