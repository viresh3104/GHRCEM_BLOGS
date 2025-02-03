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


function updateHref() {
  const link = document.getElementById("dynamic-link");

  if (window.innerWidth <= 768) {
    link.setAttribute("href", "#scroll-manage");
  } else {
    link.setAttribute("href", "#blogs");
  }
}

// Run on page load
updateHref();

// Run when window resizes
window.addEventListener("resize", updateHref);


// https://codepen.io/michellebarker/pen/gOMBPQj

  
  