document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
  
    footer.addEventListener("mouseover", function() {
      footer.style.backgroundColor = "#444";
    });
  
    footer.addEventListener("mouseout", function() {
      footer.style.backgroundColor = "#333";

    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    fetch("/src/components/footer/footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
});