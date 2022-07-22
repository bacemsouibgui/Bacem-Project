import {GET_PANIER} from '../constants/ActionType'
const initState = {
    panier :null,
    msg:null
}

const panierReducer =(state= initState,{type,payload})=>{
    switch (type) {
        case GET_PANIER:
            return{
                ...state,
                panier:payload.panier,
                msg:payload.msg
            }
            
        default:
            return state;
    }
}

export default panierReducer    