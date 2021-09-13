
import {initRouter} from "./router"
import {initTitle} from "./components/titulo"
import {initButton} from "./components/boton"
import {initManos} from "./components/manos"
import {initManosPlay} from "./components/manos/manosplay"
import {initTexto} from "./components/texto-instructions"
import { initCountdown} from "./components/countdown"

(function(){
  
    initTitle()
    initButton()
    initManos()
    initManosPlay()
    initTexto()
    initCountdown()
   
    const root = document.querySelector(".contenedor")
    initRouter(root)
    
    
})()