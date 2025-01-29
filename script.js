function reader() {
  const lowers = document.querySelectorAll(".lower"); // Get all elements with class "lower"
  const btns = document.querySelectorAll("#read-more");

  btns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      const lower = lowers[index]; // Get corresponding .lower element
      if (lower.style.display === "none" || lower.style.display === "") {
        lower.style.display = "block";
        btn.innerText = "- Read Less";
      } else {
        lower.style.display = "none";
        btn.innerText = "+ Read More";
      }
    });
  });
}
reader();

// https://codepen.io/michellebarker/pen/gOMBPQj
