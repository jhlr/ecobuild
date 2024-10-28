document.querySelectorAll(".catalog-item").forEach((item) => {
    const minusBtn = item.querySelector(".minus");
    const plusBtn = item.querySelector(".plus");
    const quantidadeElem = item.querySelector(".quantidade");
    const priceElem = item.querySelector(".price");
    
    let mainPrice = parseFloat(priceElem.textContent);
    let counter = parseInt(quantidadeElem.textContent);
    const maxQuant = parseInt(item.querySelector(".quant").textContent);

    minusBtn.addEventListener("click", () => {
      if (counter > 1) {
        counter--;
        quantidadeElem.textContent = counter;
        priceElem.textContent = (mainPrice * counter).toFixed(2);
      }
    });

    plusBtn.addEventListener("click", () => {
      if (counter < maxQuant) {
        counter++;
        quantidadeElem.textContent = counter;
        priceElem.textContent = (mainPrice * counter).toFixed(2);
      }
    });
  });