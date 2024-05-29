const h2Subst = document.getElementById("h2Subst");
const btSubst = document.getElementById("btSubst");

  
btSubst.onclick = () => {
  let naleatorio = Math.floor(Math.random() * 100 + 1);
  h2Subst.innerHTML = naleatorio, i++;
  h2Subst.className = "destaque";
  
};