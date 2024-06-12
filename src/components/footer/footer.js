document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
  
  });
  document.addEventListener("DOMContentLoaded", function() {
    fetch("/src/components/footer/footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
});