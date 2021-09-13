let imagen = require ("url:../../img/fondo.png")

export function initPageWelcome(params){
    
    var style = document.createElement ("style")
    style.textContent = `
    .conteiner {
       
        background-image:url(${imagen});
        background-repeat: round;
        padding-top: 115px;
        padding-bottom: 0px;
        padding-left:auto;
        padding-rigth:auto;
        margin-bottom:0px
    }
    `
    const div = document.createElement("div")
    div.classList.add ("conteiner")

    const titulo = document.createElement("div")
    titulo.innerHTML = `<titulo-comp>Piedra Papel ó Tijeras</titulo-comp>`

    const button = document.createElement("div")
    button.innerHTML = `
    <button-comp>Empezar</button-comp>
`
    button.addEventListener("click",(e)=>{
    e.preventDefault()
    params.goTo("/dwf-m5-desafio/instructions")    
    })

    const sectionFooter = document.createElement("section")
    sectionFooter.innerHTML = `<manos-comp></manos-comp>`
   
div.appendChild(titulo)
div.appendChild(button)
div.appendChild(style)
div.appendChild(sectionFooter)


return div
}