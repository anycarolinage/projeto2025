const btn = document.getElementById("btn-mostrar-mais");
const sessao = document.getElementById("saiba-mais");

btn.addEventListener("click", function () {
    console.log(sessao.style.display);
    sessao.style.display = sessao.style.display === "none" ? "block" : "none";
    
});

console.log(sessao.style.display);