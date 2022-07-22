import { combineReducers } from 'redux';
import authReducer from './authReducer';
import ProductReducer from './ProductReducer';
import category from './category';
import panierReducer from './PanierReducer';
export default combineReducers({ authReducer,ProductReducer, category,panierReducer});
