let imagen = require ("url:../../img/fondo.png")
export function initPageInstructions(params){

    var style = document.createElement ("style")
    style.textContent = `
    .conteiner {
       
        background-image:url(${imagen});
        background-repeat: round;
        padding-top: 130px;
        padding-bottom: 0px;
        padding-left:auto;
        padding-rigth:auto;
        margin-bottom:0px;
        height: 100%;
    }
    `
    const div = document.createElement("div")
    div.classList.add ("conteiner")

    const titulo = document.createElement("div")
    titulo.innerHTML = `<texto-comp>Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</texto-comp>`

    const button = document.createElement("div")
    button.innerHTML = `
    <button-comp>¡Jugar!</button-comp>
`
    button.addEventListener("click",(e)=>{
    e.preventDefault()
    params.goTo("/play")    
    })

    const sectionFooter = document.createElement("section")
    sectionFooter.innerHTML = `<manos-comp></manos-comp>`
    

div.appendChild(titulo)
div.appendChild(button)
div.appendChild(style)
div.appendChild(sectionFooter)


return div
   }