import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import { logout } from '../Redux/actions/authAction';
import './style.css';
import Image from './log.png';

const AppNavBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
      <div className ='navbar'>
        <NavItem >
          <span >
            <strong >{(user && user.role === "user") ?
              <div >
                <img id='imgpr' src={`${user.imgUser}`}></img>
                <span id = 'name'>{` ${user.name} ${user.lastName}`}</span>
                
                <Link to="/Panier"><img width="30px" height='30px' src="https://cdn-icons-png.flaticon.com/512/1136/1136140.png">
                </img></Link>
              </div>
             
              : <Link style={{marginLeft: '900px'}} to="/dashboard"><Button color="info">Dashboard</Button></Link>}
              
            </strong>
          </span>
          <NavLink style={{ marginLeft: '10px'}} href="/" onClick={logoutUser}>
            {' '}
            <div  className='btnn'>
                <Button color="danger">
              logout
                </Button>
                </div>
          </NavLink>
        </NavItem>
      </div>
    </Fragment>
  );
  const guestLinks = (
    <Fragment >
      <NavItem className='pr-2'>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar expand="sm" >
      <NavbarBrand href="/"><img id='imgnav' src={Image}alt=""/></NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuth ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavBar;