import {  Switch,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import { getAuthUser } from './Redux/actions/authAction';
import  Category from "./components/pages/PagesCategory/Category";
import AppNavBar from './components/AppNavBar';
import PrivateRoute from './components/routes/PrivateRoute';
import Product from './components/pages/PagesProducts/Product'
import AddProduct from './components/pages/PagesProducts/AddProduct';
import Home from './components/pages/Home';
import { getCategory } from './Redux/actions/CategoryAction';
import Dashboard from './components/Admin/Dashboard';
import AddCategory from './components/pages/PagesCategory/AddCategory';
import Panier from './components/pages/Panier';


function App () {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
    dispatch(getCategory())
  }, []);

  
  if (isLoading) {
    return (
      // Spinner
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color:"info"  }}
        />
      </div>
    );
  }
// if not loading
  return (
    <>
      <AppNavBar />
      <Route exact path='/dashboard' component={Dashboard}/>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <PrivateRoute path='/panier' component={Panier}/>
      <Route path='/AddProduct' component={AddProduct}></Route>
      <Route path='/Category/:id' render={(props) => <Category {...props} />}/>
      <Route path='/AddCategory' component={AddCategory}></Route>
      <Route path='/Product' component={Product}  />
      </Switch>
    </>
     
  );
  

}                  
export default App;