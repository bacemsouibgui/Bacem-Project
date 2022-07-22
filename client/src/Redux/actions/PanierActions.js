import axios from 'axios';
import { GET_PANIER } from '../constants/ActionType';

// GET PANIER
export const getPanier = () => async(dispatch)=>{
    try {
        const config = {
            headers: {
              'x-auth-token': localStorage.getItem('token'),
            },
          };
        const res = await axios.get('/api/panier/',config);
        dispatch({
            type:GET_PANIER,
            payload:res.data
        })
    }
     catch (error) {
        console.error(error.message);
    }
}
// ADD PANIER
export const addPanier = (newPanier) => async(dispatch)=>{
    try {
        const config = {
            headers: {
              'x-auth-token': localStorage.getItem('token'),
            },
          };
          const res = await axios.post('/api/panier/',newPanier,config);
          dispatch(getPanier())
    } 
    catch (error) {
        
    }
}

// DELETE PANIER
export const deletepanier=(idproduit)=>(dispatch)=>{
  const config = {
      headers: {
      'x-auth-token': localStorage.getItem('token'),
      },
  };
  axios.delete(`/api/panier/delete/${idproduit}`,config)
  .then(res=>dispatch( getPanier() ))
  .catch(Error=>console.log(Error))
  }
