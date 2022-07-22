import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../Redux/actions/ProductAction'
import EditProduct from '../pages/PagesProducts/EditProduct';
import Swal from 'sweetalert2';
import './styles.css';
import { Button } from 'reactstrap';



const ProductList = ({product,categorys}) => {
const dispatch = useDispatch()
// Delete product
    const delet=()=>{
        dispatch(deleteProduct(product._id));
        
        // Sweet Alert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
              )
            }
          })

        }
    return (
        <tr className='thpr'>
        <th scope="row">{product._id}</th>
        <td>{product.name}</td>
        <td>{product.category&&product.category.name}</td>
        <td>{product.price}</td>
        <Button style={{ color: "black", backgroundColor: "gray", border: '2px solid black'}} onClick= {delet} >Delete </Button> 
        
       

        <td><EditProduct categorys={categorys} product={product}/></td>
      </tr>
    )
}

export default ProductList
