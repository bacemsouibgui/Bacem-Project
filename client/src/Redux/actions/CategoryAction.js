import axios from 'axios';

import {GET_CATEGORY} from '../constants/ActionType'

export const getCategory = ()=> async dispatch=>{
    try {
        const res = await axios.get('api/category');
        dispatch({
            type:GET_CATEGORY,
            payload: res.data
        })
    } catch (error) {
        console.error(error.message);
    }
}

// ADD CATEGORY
export const addCategory=(newCategory)=> (dispatch)=>{
    const config = {
        headers: {
        'x-auth-token': localStorage.getItem('token'),
        },
    };
    axios.post('/api/category/',newCategory,config)
    .then(res=>dispatch( getCategory()))
    .catch(Error=>console.log(Error))
}
// DELETE CATEGORY
    export const deleteCategory=(idCategory)=>(dispatch)=>{
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        axios.delete(`/api/category/delete/${idCategory}`,config)
        .then(res=>dispatch( getCategory()))
        .catch(Error=>console.log(Error))
        }

// EDIT CATEGORY
    export const editCategory=(idCategory,editCat)=>async (dispatch)=>{
       try {
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
           const res = await axios.put(`/api/category/edit/${idCategory}`,editCat,config)
            dispatch( getCategory())
            
       } 
       catch (error) {
        console.log(error.message)
       }
    };