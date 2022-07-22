import axios from 'axios';
import {GET_PRODUCT, GET_PRODUCT_CAT} from '../constants/ActionTypeProduct'


// GET PRODUCT
export const getProduct=()=>(dispatch)=>{
axios.get('/api/product')
.then(res=>dispatch({type:GET_PRODUCT,payload:res.data}))
.catch(Error=>console.log(Error))
}

// GetProductByCategory
export const getProductCat=(catID)=>(dispatch)=>{
axios.get(`/api/product/${catID}`)
.then(res=>dispatch({type:GET_PRODUCT_CAT,payload:res.data}))
.catch(Error=>console.log(Error))
}

// ADD PRODUCT
export const addProduct=(newProduct)=> (dispatch)=>{
    const config = {
        headers: {
        'x-auth-token': localStorage.getItem('token'),
        },
    };
    axios.post('/api/product/add',newProduct,config)
    .then(res=>dispatch( getProduct()))
    .catch(Error=>console.log(Error))
}
// DELETE PRODUCT
    export const deleteProduct=(idProduct)=>(dispatch)=>{
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        axios.delete(`/api/Product/delete/${idProduct}`,config)
        .then(res=>dispatch( getProduct()))
        .catch(Error=>console.log(Error))
        }

// EDIT PRODUCT
    export const editProduct=(idProduct,editedPort)=>async (dispatch)=>{
    try {
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.put(`/api/product/edit/${idProduct}`,editedPort,config)
            dispatch( getProduct())
            
    } catch (error) {
        console.log(error.message)
    }
    };