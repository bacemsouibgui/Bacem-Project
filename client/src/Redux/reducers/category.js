import { GET_CATEGORY } from "../constants/ActionType";

const initState={
    categorys:[],
    isLoading:true
}

const category= (state = initState, {type,payload} )=>{
    switch (type) {
        case GET_CATEGORY:
            return{
                ...state,
                categorys:payload,
                isLoading:false
            };
        default:
            return state;
    }
};
export default category;