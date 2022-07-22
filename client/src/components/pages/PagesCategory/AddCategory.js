import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom'
import { addCategory } from '../../../Redux/actions/CategoryAction';
import Swal from 'sweetalert2';

function AddCategory() {
    
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const [Cancel, setCancel] = useState(false);
    const dispatch = useDispatch();
const add=()=>{
    dispatch(addCategory({name,imgUrl,description}));

        // Sweet Alert
    Swal.fire({
        position: 'top-end',
        icon: 'success',
       title: 'You added a new Category',
       showConfirmButton: false,
       timer: 1500
})
    setCancel(!Cancel)
};
    return (
<div>
        {
            Cancel? (
<Redirect to="/dashboard"/>
            ):(

        <Form style={{width:"400px",margin:"100px",padding:"50px"}}>
        <FormGroup >
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
                    <Label for="imgUrl">ImgUrl</Label>
                    <Input 
                    value={imgUrl}
                    onChange={(e)=>setImgUrl(e.target.value)}
                    type="imgUrl" 
                    name="imgUrl" 
                    id="imgUrl" 
                    placeholder="imgUrl placeholder" 
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
                <Button onClick={add}>Validate</Button>
                <Button onClick={()=>setCancel(!Cancel)} color='info'>Cancel</Button>
        </Form>)

}

</div>
);
};

export default AddCategory;