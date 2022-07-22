import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getPanier } from '../../Redux/actions/PanierActions';
import {deletepanier} from '../../Redux/actions/PanierActions';
import { Table} from 'react-bootstrap';
import Swal from 'sweetalert2';


const Panier = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPanier());
       
    }, [])
    
    const panier = useSelector(state => state.panierReducer.panier)

    const delette = (idpanier)=>{  
      
        dispatch(deletepanier(idpanier)) ;
        // Sweet Alert
        Swal.fire({
            title: 'Are you sure?',
            text: "Your purchase is Canceled!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your basket has been deleted.',
                'success'
              )
            }
          })

    }

    return (
        <div>
            {(!panier)? <h1>You don't have any product in your Card</h1>:
            panier && panier.listProducts.map(product=>
            <div className='container m-4'style={{display:"flex",flexDirection:"row",justifyContent:'space-between', alignItems:'center'}}>
                <img src={product && product.product.imgUrl} width='250px' height='100px'/>
           

                <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            
            <th >{product && product.product.name}</th>
            <th>Price:{product && product.product.price}</th>
            <th>Qty: {product && product.quantity}</th>
            <th>Total : {product.quantity*product.product.price}</th>
          </tr>
        </thead>
       
      </Table>
                
               
            </div>

            )
            }

            <div className='container m-4'style={{display:"flex",flexDirection:"row",justifyContent:'space-between', alignItems:'center'}}>
            <span className='btn btn-success' onClick={()=>Swal.fire({
                                                              position: 'top-end',
                                                              icon: 'success',
                                                             title: 'Your order is successfull',
                                                             showConfirmButton: false,
                                                             timer: 1500
})
}>Pay</span>
            <th className='btn btn-danger'onClick={()=>delette(panier._id)}>Clear the basket</th>
            </div>
           
        </div>

    )
}

export default Panier
