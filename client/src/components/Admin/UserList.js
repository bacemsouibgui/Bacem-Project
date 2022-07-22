import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteAllUsers} from '../../Redux/actions/authAction';
import Swal from 'sweetalert2';



const UserList = ({users}) => {
    const dispatch = useDispatch();
    const delet=(users_id)=>{
        dispatch(deleteAllUsers(users_id));

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
        'This User has been deleted.',
        'success'
      )
    }
  })
        }
    return (
        <tr >
        <th scope="row" >{users._id}</th>
        <td>{users.name}</td>
        <td>{users.lastName}</td>
        <td>{users.email}</td>
        <button  style={{ color: "secondary", backgroundColor: "gray", border: '2px solid black'}} onClick={()=>delet(users._id)} >Delete</button>
        </tr>
            

    )
}

export default UserList;
