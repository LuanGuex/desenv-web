const ul = document.querySelector(".lista");

ul.addEventListener("click", function(event) {
    if (event.target.tagName === "INPUT") return;
    
    const li = event.target.closest("li");
    if (li) {
        li.remove();
    }
});

function criarTarefa(event){
    event.preventDefault();
    const form = event.target;
    const input = form.children[1];
    const valorTxt = input.value;
    if (valorTxt === "") return;
    
    const textoSpan = document.createElement("span")
    const checkbox = document.createElement("input")
    const li = document.createElement("li")
    const ul = document.querySelector(".lista")

    textoSpan.textContent = valorTxt;
    checkbox.type = "checkbox";

    textoSpan.appendChild(checkbox);
    li.appendChild(textoSpan);
    ul.appendChild(li);

    input.value = "";

}