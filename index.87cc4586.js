function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequire9acc;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var a={id:n,exports:{}};return t[n]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){o[n]=e},e.parcelRequire9acc=a),a.register("7PhYn",(function(e,t){var o,a;n(e.exports,"resolve",(()=>o),(n=>o=n)),n(e.exports,"register",(()=>a),(n=>a=n));var i={};a=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)i[e[t]]=n[e[t]]},o=function(n){var e=i[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a("7PhYn").register(JSON.parse('{"di8mO":"index.87cc4586.js","74Myn":"fondo.b04fa3d6.png","407lu":"piedra.60203d08.png","cQkp1":"papel.9f7b03c8.png","gtmBI":"tijera.cad77ea3.png","b2lbc":"star-ganaste.6b0ecb05.png","6aabG":"star-perdiste.57a2220b.png","lXOS9":"empate.ff7010fb.jfif"}'));var i;function r(n){var e=document.createElement("style");e.textContent=`\n    .conteiner {\n       \n        background-image:url(${i});\n        background-repeat: round;\n        padding-top: 115px;\n        padding-bottom: 0px;\n        padding-left:auto;\n        padding-rigth:auto;\n        margin-bottom:0px\n    }\n    `;const t=document.createElement("div");t.classList.add("conteiner");const o=document.createElement("div");o.innerHTML="<titulo-comp>Piedra Papel ó Tijeras</titulo-comp>";const a=document.createElement("div");a.innerHTML="\n    <button-comp>Empezar</button-comp>\n",a.addEventListener("click",(e=>{e.preventDefault(),n.goTo("/dwf-m5-desafio/instructions")}));const r=document.createElement("section");return r.innerHTML="<manos-comp></manos-comp>",t.appendChild(o),t.appendChild(a),t.appendChild(e),t.appendChild(r),t}a.register("kVZsc",(function(e,t){var o;n(e.exports,"getBundleURL",(()=>o),(n=>o=n));var a={};function i(n){return(""+n).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var e=a[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(n)return i(n[2])}return"/"}(),a[n]=e),e}})),i=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("74Myn");const s={data:{currentGame:[],history:[]},listeners:[],getState(){return this.data},setState(n){this.data=n;for(const n of this.listeners)n();localStorage.setItem("save-history",JSON.stringify(this.getState().history))},subscribe(n){this.listeners.push(n)},currentGame(n,e){const t=this.getState();t.history.push({myPlay:n,computerPlay:e}),this.setState({...t,currentGame:{myPlay:n,computerPlay:e}})},result(n){let e;return e=2===n.myPlay&&0===n.computerPlay?"perdiste":0===n.myPlay&&2===n.computerPlay||n.myPlay>n.computerPlay?"ganaste":n.myPlay===n.computerPlay?"empate":"perdiste",e},loadHistory(){const n=this.getState(),e=localStorage.getItem("save-history");e?this.setState({...n,history:JSON.parse(e)}):localStorage.setItem("save-history",JSON.stringify({myPlay:0,computerPlay:0}))},deleteHistory(){const n=this.getState();localStorage.setItem("save-history",JSON.stringify({myPlay:0,computerPlay:0})),this.setState({...n,history:[{myPlay:0,computerPlay:0}]})}};var c;c=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("407lu");var d;d=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("cQkp1");var l;l=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("gtmBI");var p;p=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("b2lbc");var m;m=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("6aabG");var u;u=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("lXOS9");const h=[{path:/\/dwf-m5-desafio\/welcome/,component:r},{path:/\/dwf-m5-desafio/,component:r},{path:/\/dwf-m5-desafio\/instructions/,component:function(n){var e=document.createElement("style");e.textContent=`\n    .conteiner {\n       \n        background-image:url(${i});\n        background-repeat: round;\n        padding-top: 130px;\n        padding-bottom: 0px;\n        padding-left:auto;\n        padding-rigth:auto;\n        margin-bottom:0px;\n        height: 100%;\n    }\n    `;const t=document.createElement("div");t.classList.add("conteiner");const o=document.createElement("div");o.innerHTML="<texto-comp>Presioná jugar\n    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</texto-comp>";const a=document.createElement("div");a.innerHTML="\n    <button-comp>¡Jugar!</button-comp>\n",a.addEventListener("click",(e=>{e.preventDefault(),n.goTo("/dwf-m5-desafio/play")}));const r=document.createElement("section");return r.innerHTML="<manos-comp></manos-comp>",t.appendChild(o),t.appendChild(a),t.appendChild(e),t.appendChild(r),t}},{path:/\/dwf-m5-desafio\/play/,component:function(n){s.getState(),s.loadHistory(),s.subscribe((()=>{const e=s.getState();var i;i=e,o.remove(),h.innerHTML=`<img class="mano" src=${r[i.currentGame.computerPlay]}>`,t.appendChild(h),a.remove(),g.innerHTML=`<img class="mano" src=${r[i.currentGame.myPlay]}>`,t.appendChild(g),x.innerHTML='\n    <button-comp class= "button">volver a jugar</button-comp>\n',x.addEventListener("click",(e=>{e.preventDefault(),n.goTo("/dwf-m5-desafio/play")})),y.innerHTML='\n    <button-comp class= "button">borrar historial</button-comp>\n',y.addEventListener("click",(n=>{n.preventDefault(),s.deleteHistory()})),setTimeout((()=>{!function(n){h.style.opacity="0.07",h.style.position="absolute",g.style.opacity="0.07",g.style.position="absolute";let e,o=s.result(n.currentGame);"ganaste"===o?(e=p,t.style.backgroundImage="none",t.style.backgroundColor="rgba(136, 137, 73, 0.9)"):"perdiste"===o?(e=m,t.style.backgroundImage="none",t.style.backgroundColor="rgba(137, 73, 73, 0.9)"):"empate"===o&&(e=u,t.style.backgroundImage="none",t.style.backgroundColor="rgba(58, 140, 160, 0.9)"),f.innerHTML=`\n    <div class="star">\n    <img class="fin" src=${e}>\n    <h2 class="resultado-title">${o}</h2>\n    </div>\n    <div class="score">\n        <h3 class="score-title">Score</h3>\n        <p class="score-yo">vos:${v().vos}</p>\n        <p class="score-pc">maquina:${v().maquina}</p>\n    </div>\n`,t.appendChild(f),t.appendChild(x),t.appendChild(y)}(i)}),2e3)}));var e=document.createElement("style");e.textContent=`\n    .conteiner {\n        background-image:url(${i});\n        background-repeat: round;\n        padding:50px;\n        margin-bottom:0px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n        height:800px\n        width:100%;\n    }\n    .mano{\n        width: 160px;\n        height: 310px;\n        margin:0 auto;\n    }\n    .pc-mano{\n        transform: rotate(0.5turn);\n        position: relative;\n        top: 0px;\n        margin:10px auto;\n        display: flex;\n        justify-content: center;\n    }\n    .mi-mano{\n        position: relative;\n        bottom: 0px;\n        margin:0px auto;\n        display: flex;\n        justify-content: center;\n        padding-top: 50px;\n    }\n    .fin{\n        width: 250px;\n        height: 250px;\n        position: relative;\n        left: 40px;\n        top: 10px;\n    }\n    .score{\n        margin:20px auto;\n        border: solid 3px;\n        border-radius: 2px;\n        width: 260px;\n        height: 220px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        background-color: white;\n    }\n    .score-title{\n        align-self: center;\n        font-family: "Odibee Sans";\n        font-size: 55px;\n        margin: 10px;\n    }\n    .resultado-title{\n        font-family: "Odibee Sans";\n        font-size: 55px;\n        color:white;\n        position: relative;\n        top:10px;\n        right: 140px;\n    }\n    .score-yo{\n        font-family: "Odibee Sans";\n        font-size: 45px;\n        align-self: flex-end;\n        margin: 10px;\n    }\n    .score-pc{\n        font-family: "Odibee Sans";\n        font-size: 45px;\n        align-self: flex-end;\n        margin: 10px;\n    }\n    .button-page{\n        margin: 0px auto;\n        height: 100px;\n        align-items:center;\n        position: relative;\n    }\n    .gano{\n        background-image:none;\n        background-color: #888949 ;\n    }\n    .perdio{\n        background-image:none;\n        background-color: #894949 ;\n    }\n    .star{\n        display:flex;\n        justify-content: center;\n        align-items:center;\n    }\n    `;const t=document.createElement("div");t.classList.add("conteiner");const o=document.createElement("section");o.innerHTML="<countdown-comp></countdown-comp>";const a=document.createElement("section");a.innerHTML="<manos-play></manos-play>";let r=[c,d,l];const h=document.createElement("div"),g=document.createElement("div"),f=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div");function v(){const n=s.getState(),e={vos:0,maquina:0};for(const t of n.history){const n=s.result(t);"ganaste"===n?e.vos++:"perdiste"===n&&e.maquina++}return e}return x.classList.add("button-page"),y.classList.add("button-page"),h.classList.add("pc-mano"),g.classList.add("mi-mano"),t.appendChild(o),t.appendChild(e),t.appendChild(a),t}}];!function(){!function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.textContent;var e=document.createElement("style");e.textContent='\n        .title{\n            font-family: "Source Serif Pro";\n            font-size: 80px;\n            font-weight: normal;\n            max-width: 600px;\n            margin: 20px auto;\n            text-align: center;\n            padding: 0px 20px;\n            color: #009048\n        }\n        ';var t=this.attachShadow({mode:"open"});t.appendChild(e);var o=document.createElement("h1");o.classList.add("title"),o.textContent=n,t.appendChild(o)}}customElements.define("titulo-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.textContent;var e=document.createElement("style");e.textContent='\n        .button-container{\n            max-width: 360px;\n            margin: 20px auto;\n            padding: 0px 20px;\n\n        }\n        .button{\n            background-color: #006CFC;\n            font-family: "Odibee Sans";\n            font-size: 45px;\n            color: white;\n            width: 100%;\n            text-align: center;\n            height: 80px;\n            border: solid 10px;\n            border-color: #001997;\n            border-radius: 5px;\n}\n        }\n        ';var t=this.attachShadow({mode:"open"});t.appendChild(e);var o=document.createElement("button");o.classList.add("button"),o.textContent=n;var a=document.createElement("div");a.classList.add("button-container"),a.appendChild(o),t.appendChild(a)}}customElements.define("button-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){var n=document.createElement("style");n.textContent="\n        \n        .manos-conteiner{\n            max-width: 300px;\n            margin:0px auto;\n            display: flex;\n            justify-content: space-around;\n            height: 100px;\n            position: relative;\n            bottom: -70px;\n        }\n        .mano{\n            width: 56px;\n            height: 128px;\n        }\n        .jugada{\n            position: relative;\n            bottom: 50px; \n        }\n        ",this.shadow.innerHTML=`\n            \n            \n        <div class="manos-conteiner">\n            <img class="mano piedra" src=${c}>\n            <img class="mano papel" src=${d}>\n            <img class="mano tijera" src=${l}>\n        </div>\n            \n        `,this.shadow.appendChild(n)}}customElements.define("manos-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.computerPlay=Math.floor(3*Math.random()),this.render()}render(){s.getState();var n=document.createElement("style");n.textContent="\n        \n        .manos-conteiner{\n            background: inherit;\n            max-width: 300px;\n            margin:0px auto;\n            display: flex;\n            justify-content: space-around;\n            height: 400px;\n            position: relative;\n            bottom: -90px;\n        }\n        .mano{\n            width: 110px;\n            height: 240px;\n            opacity: 0.5;\n        }\n        .jugada{\n            position: relative;\n            bottom: 50px;\n            opacity: 1; \n        }\n        ",this.shadow.innerHTML=`\n        <div class="manos-conteiner">\n            <img class="mano piedra" src=${c}>\n            <img class="mano papel" src=${d}>\n            <img class="mano tijera" src=${l}>\n        </div>     \n        `;const e=this.shadow.querySelector(".piedra");e.addEventListener("click",(()=>{e.classList.add("jugada"),s.currentGame(0,this.computerPlay)}));const t=this.shadow.querySelector(".papel");t.addEventListener("click",(()=>{t.classList.add("jugada"),s.currentGame(1,this.computerPlay)}));const o=this.shadow.querySelector(".tijera");o.addEventListener("click",(()=>{o.classList.add("jugada"),s.currentGame(2,this.computerPlay)})),this.shadow.appendChild(n)}}customElements.define("manos-play",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.textContent;var e=document.createElement("style");e.textContent='\n        .title{\n            font-family: "Source Serif Pro";\n            font-size: 40px;\n            font-weight: normal;\n            max-width: 300px;\n            margin: 20px auto;\n            text-align: center;\n            padding: 0px 20px;\n            color: #000000\n        }\n        ';var t=this.attachShadow({mode:"open"});t.appendChild(e);var o=document.createElement("p");o.classList.add("title"),o.textContent=n,t.appendChild(o)}}customElements.define("texto-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render(),s.subscribe((()=>{s.getState()}))}render(){this.textContent;var n=document.createElement("style");n.textContent='\n        \n        .countdown-conteiner{\n            margin:0px auto;\n             width: 200px;\n             height: 200px;\n             border: solid 20px;\n            -moz-border-radius: 50%;\n            -webkit-border-radius: 50%;\n             border-radius: 50%;\n            background: with;\n            margin-top:150px;\n            margin-bottom:50px;\n            display:flex;\n            justify-content: center;\n            align-item:center;\n        }\n        .countdown{\n            font-size: 160px; \n            font-family: "Source Serif Pro";\n            margin:0;\n        }\n        .button{\n            margin:100px auto;\n            display: flex;\n            justify-content: center;\n            align-item:center;\n        }\n        ',this.shadow.innerHTML='\n            \n            \n        <div class="countdown-conteiner">\n            <p class ="countdown"></p>\n        </div>\n            \n        ',s.getState();let e=4;const t=setInterval((()=>{if(e--,this.shadow.querySelector(".countdown").textContent=e.toString(),0===e){clearInterval(t),this.shadow.querySelector(".countdown").remove(),this.shadow.querySelector(".countdown-conteiner").remove();const n=document.createElement("div");n.innerHTML='\n            <button-comp class= "button">Reiniciar</button-comp>\n            ',n.addEventListener("click",(n=>{n.preventDefault(),location.reload()})),this.shadow.appendChild(n)}return e}),1e3);this.shadow.appendChild(n)}}customElements.define("countdown-comp",n)}();!function(n){function e(n){history.pushState({},"",n),t(n)}function t(t){for(const o of h)if(o.path.test(t)){const t=o.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(t)}}location.host.includes("github.io")?e("/dwf-m5-desafio"):t(location.pathname),window.onpopstate=function(){t(location.pathname)}}(document.querySelector(".contenedor"))}();
//# sourceMappingURL=index.87cc4586.js.map
