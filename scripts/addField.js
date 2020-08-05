// procurar o botão
document.querySelector("#add-time")
// quando clicar o botao
.addEventListener("click", cloneField)
//executar a ação
function cloneField() {
    // duplicar campos, escolha os campos
   const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    // pegar os campos, escolha os campos que vc quer pegar
    const fields = newFieldContainer.querySelectorAll("input")

    // para cada = forEach
    fields.forEach(function(field) {
        //pegar o field na hr
        field.value = ""
    })

    // colocar na pagina, escolha onde colocar
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    
    
