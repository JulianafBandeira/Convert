const amount = document.getElementById("amount");


amount.addEventListener("input", () => {
  const hasCharacters = /\D+/g;

  amount.value = amount.value.replace(hasCharacters, "");
});

