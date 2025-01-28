document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      let longText = this.previousElementSibling.querySelector(".long");
  
      if (longText.style.display === "none" || longText.style.display === "") {
        longText.style.display = "block";
        this.textContent = "View Less";
      } else {
        longText.style.display = "none";
        this.textContent = "Read More";
      }
    });
  });
  