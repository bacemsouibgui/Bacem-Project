import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';
import { addProduct } from '../../../Redux/actions/ProductAction';

function AddProduct({categorys}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
const add=()=>{
    dispatch(addProduct({name,imgUrl,price,category}));

    // Sweet Alert
    Swal.fire({
      position: 'top-end',
      icon: 'success',
     title: 'You added a new product',
     showConfirmButton: false,
     timer: 1500
})

    toggle()
    setName('');
    setImgUrl('');
    setPrice('')
    setCategory('')
};

    return (
<div>

<Button color="info" onClick={toggle}>Add Product</Button>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form >
        <FormGroup >
                    <Label for="name">Name</Label>
                    <Input 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="name" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    />
        </FormGroup>
        <FormGroup>
                    <Label for="Product Image">Image</Label>
                    <Input 
                    value={imgUrl}
                    onChange={(e)=>setImgUrl(e.target.value)}
                    type="text" 
                    name="imgUrl" 
                    id="imgUrl" 
                    placeholder="Image Product" 
                    />
        </FormGroup>
        <FormGroup>
        <Label for="exampleSelect">Category</Label>
        <Input type="select" name="select" id="category" onChange={e=>setCategory(e.target.value)}>
          <option>Select category..</option>
          {categorys&&categorys.map(category=><option value={category._id}>{category.name}</option>)}
        </Input>
      </FormGroup>
        <FormGroup>
                    <Label for="Price">price</Label>
                    <Input 
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    type="price" 
                    name="price" 
                    id="price" 
                    placeholder="Price" 
                    />
            </FormGroup>
        </Form>
        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
</div>

)}
     

export default AddProduct
