import axios from 'axios';

import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
  GET_ALLUSERS
} from '../constants/ActionType';

// Set the user loading
const userLoading = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};

// Register USer
export const registerUser = (formData) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.post('/api/auth/register', formData);
    dispatch({
      type: REGISTER_USER,
      payload: res.data, 
    });
  } catch (error) {
    
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));

  }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
    
  }
};

// GET ALL USERS
export const getAllUsers=()=>async (dispatch)=>{
  try {
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    const res=await axios.get('api/auth/alluser',config);
    dispatch({
      type: GET_ALLUSERS,
      payload: res.data, 
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};


 // DELETE ALLUSERS
export const deleteAllUsers=(idAllUsers)=>(dispatch)=>{
  const config = {
      headers: {
      'x-auth-token': localStorage.getItem('token'),
      },
  };
  axios.delete(`api/auth/delete/${idAllUsers}`,config)
  .then(res=>dispatch(getAllUsers()))
  .catch(Error=>console.log(Error))
  }
  

// Login User
export const loginUser = (formData) => async (dispatch) => {
  dispatch(userLoading());

  try {
    const res = await axios.post('/api/auth/login', formData);
    dispatch({
      type: LOGIN_USER,
      payload: res.data, 
    });
  } catch (error) {
    
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err)=>alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// GET AUTH USER
export const getAuthUser = () => async (dispatch) => {
  dispatch(userLoading());

  try {
    // HEADERS
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    //--------------------------------------------

    const res = await axios.get('/api/auth/user', config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, 
    });
  }
   catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};