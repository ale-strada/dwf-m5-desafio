
import {initPageWelcome} from "./pages/welcome"
import {initPageInstructions} from "./pages/instructions"
import {initPagePlay} from "./pages/play"

const routes = [
    {
        path: /\/welcome/,
        component: initPageWelcome,
    },
    {
        path: /\/instructions/,
        component: initPageInstructions,
    },
    {
        path: /\/play/,
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

    if (location.pathname == "/"){
        goTo("/welcome")
    }else{
      handleRoute(location.pathname);  
    }
    
    window.onpopstate = function (){
        handleRoute(location.pathname)
    }
}