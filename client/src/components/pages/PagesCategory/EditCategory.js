import React from 'react'
import  { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch,useSelector} from 'react-redux';
import { editCategory } from '../../../Redux/actions/CategoryAction';


const EditCategory=({category}) =>{
const dispatch = useDispatch();
const [name, setName] = useState(category && category.name);
const [imgUrl, setImgUrl] = useState(category && category.imgUrl);
const [description, setDescription] = useState(category && category.description);
const [modal, setModal] = useState(false);
const toggle=()=>{
    setModal(!modal)
    setName(category.name)
    setImgUrl(category.imgUrl)
    setDescription(category.description)

}

const edit=()=>{
    const editCat = {name,imgUrl,description}
    dispatch(editCategory(category._id,editCat));
    toggle();
}
const user = useSelector((state) =>state.authReducer.user);
return (
    <div>

    <Button  color="secondary" onClick={toggle}>Edit</Button>
    

    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit Category</ModalHeader>
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
                    placeholder="Name a placeholder" 
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="imagUrl">ImgUrl</Label>
                    <Input 
                    value={imgUrl}
                    onChange={(e)=> setImgUrl(e.target.value)}
                    type="imagUrl" 
                    name="imagUrl" 
                    id="imagUrl" 
                    placeholder="imagUrl placeholder" 
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Description">Description</Label>
                    <Input 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    type="Description" 
                    name="Description" 
                    id="Description" 
                    placeholder="Description" 
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

export default EditCategory;