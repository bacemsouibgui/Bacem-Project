import { GET_PRODUCT, GET_PRODUCT_CAT } from "../constants/ActionTypeProduct";

const initState={
    products:[],
};

export const ProductReducer= (state = initState, {type,payload} )=>{
    switch (type) {
        case GET_PRODUCT:
            return{
                ...state,
                products:payload,
            };
        case GET_PRODUCT_CAT:
            return{
                ...state,
                products:payload
            }

        default:
            return state;
    }
};
export default ProductReducer;