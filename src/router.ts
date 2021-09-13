
import {initPageWelcome} from "./pages/welcome"
import {initPageInstructions} from "./pages/instructions"
import {initPagePlay} from "./pages/play"

const routes = [
    {
        path: /\/dwf-m5-desafio\/welcome/,
        component: initPageWelcome,
    },
    {
        path: /\/dwf-m5-desafio/,
        component: initPageWelcome,
    },
    {
        path: /\/dwf-m5-desafio\/instructions/,
        component: initPageInstructions,
    },
    {
        path: /\/dwf-m5-desafio\/play/,
        component: initPagePlay,
    }
];

export function initRouter(conteiner:Element){
   
    function goTo(path){
        history.pushState({},"",path);
        handleRoute(path);
    }
    
    function handleRoute (route){
        
        for(const r of routes){
            if( r.path.test(route)){
            const el = r.component({goTo:goTo});
            if(conteiner.firstChild){
                conteiner.firstChild.remove();
            }
            conteiner.appendChild(el)
            }
        }
    }

    if (location.host.includes("github.io")){
        goTo("/dwf-m5-desafio")
    }else{
      handleRoute(location.pathname);  
    }
    
    window.onpopstate = function (){
        handleRoute(location.pathname)
    }
}