import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from 'reactstrap';

import { registerUser } from '../../Redux/actions/authAction';

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgUser, setImgUser] = useState('');
  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = () => {
    const newUser = { name, lastName, email, password,imgUser };
    dispatch(registerUser(newUser));
    history.push('/');
    setEmail('');
    setName('');
    setLastName('');
    setPassword('');
    setImgUser('');
  };

  return (
    <div>
      <NavLink style={{marginLeft: '900px'}} className="btn btn-primary text-white" onClick={toggle} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                value={name}
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="name">Last Name</Label>
              <Input
                type="text"
                value={lastName}
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="mb-3"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
               <Label for="avatar">Picture</Label>
              <Input
                type="avatar"
                value={imgUser}
                name="avatar"
                id="avatar"
                placeholder="Picture"
                className="mb-3"
                onChange={(e) => setImgUser(e.target.value)}
              /> 
              <Button
                color='primary'
                style={{ marginTop: '2rem' }}
                block
                onClick={handleRegister}
              >
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;
