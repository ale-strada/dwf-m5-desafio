
const state = {
    data:{ 
    currentGame:[],
    history:[]
    },
    listeners:[],
    getState(){
        return this.data;
    },
    setState(newState){
    this.data = newState;
    for (const cb of this.listeners) {
        cb();
    }
    localStorage.setItem("save-history",JSON.stringify(this.getState().history))
    },
    
    subscribe(callback:(any)=>any){
    this.listeners.push(callback);
     },
    currentGame(myPlay, computerPlay){
       const lastState = this.getState()
       lastState.history.push({myPlay,computerPlay})
       this.setState({
           ...lastState,
           currentGame:{myPlay,computerPlay}
       })
    },
    result(currentState){
    
    let resultado
    if(currentState.myPlay ===2 && currentState.computerPlay === 0 ){
    resultado = "perdiste"

    } else if (currentState.myPlay ===0 && currentState.computerPlay === 2 ){
        resultado = "ganaste"
    }
    else if(currentState.myPlay > currentState.computerPlay)
    {
        resultado = "ganaste"
    }
    else if(currentState.myPlay === currentState.computerPlay){
        resultado= "empate"
    }
    else{
        resultado = "perdiste"
    }
    return resultado;
    },

    loadHistory(){
        const lastState = this.getState();
        const historial = localStorage.getItem("save-history")
        this.setState({
            ...lastState,
            history:JSON.parse(historial)
        })
    },
    deleteHistory(){
        const lastState = this.getState();
        localStorage.setItem("save-history",JSON.stringify({myPlay:0, computerPlay:0}))
        this.setState({
            ...lastState,
            history:[{myPlay:0, computerPlay:0}]
        })
    }
    
    };

    export {state};