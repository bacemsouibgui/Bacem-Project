import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { Spinner } from 'reactstrap';


function NavBar() {
    const dispatch = useDispatch()

    const categorys = useSelector(state => state.category.categorys.category)
    if(!categorys){
        return <Spinner/>
    }
    return (
    
<div className='container mt-2'>
    <ul style={{listStyle:'none',display:'flex',flexDirection:"row", justifyContent:'space-around', paddingTop: "30px"}}>
        {categorys && categorys.map(category => <Link to={`/category/${category._id}`} className="btn btn-secondary border-0"><li key={category._id}>{category.name}</li></Link>)}
        <Link to='/product' className="btn btn-secondary border-0"><li>All Products</li></Link>
    </ul>
</div>
    )
}

export default NavBar