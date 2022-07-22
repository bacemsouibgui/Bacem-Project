import React from 'react'
import  { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input } from 'reactstrap';
import Swal from 'sweetalert2';
import {useDispatch,useSelector} from 'react-redux';
import { editProduct } from '../../../Redux/actions/ProductAction';



const EditProduct=({product,categorys}) =>{

const dispatch = useDispatch();
const [name, setName] = useState(product.name);
const [imgUrl, setImgUrl] = useState(product.imgUrl);
const [price, setPrice] = useState(product.price);
const [category, setCategory] = useState(product.category);
const [modal, setModal] = useState(false);

const toggle=()=>{
    setModal(!modal)
    setName(product.name)
    setImgUrl(product.imgUrl)
    setPrice(product.price)
    setCategory(product.category)


}

const edit=()=>{
    const editedPort = {name,imgUrl,price,category}
    dispatch(editProduct(product._id,editedPort));

    // Sweet Alert
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Product has been modified',
        showConfirmButton: false,
        timer: 1500
      })

    toggle();
}
const user = useSelector((state) =>state.authReducer.user);
return (
    <div>
        {
    user && user.role==='admin'? 
    <Button  color="secondary" onClick={toggle}>Edit</Button>:null 
    }

    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}> Edit Product </ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
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
                    <Label for="imgUrl">imgUrl</Label>
                    <Input 
                    value={imgUrl}
                    onChange={(e)=>setImgUrl(e.target.value)}
                    type="imgUrl" 
                    name="imgUrl" 
                    id="imgUrl" 
                    placeholder="imgUrl" 
                    />
                </FormGroup>
                <FormGroup>
        <Label for="exampleSelect">Category</Label>
        <Input type="select" name="select" id="category" onChange={e=>setCategory(e.target.value)}>
          {categorys&&categorys.map(category=><option value={category._id}>{category.name}</option>)}
        </Input>
      </FormGroup>
                <FormGroup>
                    <Label for="price">price</Label>
                    <Input 
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    type="price" 
                    name="price" 
                    id="price" 
                    placeholder="price" 
                    />
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
        <Button onClick={edit} color="primary" >Save</Button>
        <Button onClick={()=>setModal(!Modal)} color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
    </div>
);

}

export default EditProduct
