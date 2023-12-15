import { faBars, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import './nav.css'
import { Link } from 'react-router-dom';
function change(option){
    localStorage.setItem('lang',option.target.value);
    window.location.reload();
}
 function Nav(){
    const lang=localStorage.getItem('lang')||'en';
    return(
    <div className='d-flex justify-content-around p-4 navbar'>
        <h1>Tax Hub</h1>
        <div className='items'>
            <Link className='mx-2 navlink' >Home</Link>
            <Link className='mx-2 navlink' >About</Link>
            <Link className='mx-2 navlink' >Services</Link>
            <Link className='mx-2 navlink' >Blogs</Link>
            <Link className='mx-2 navlink' >Contact Us</Link>
        </div>
        <div className='d-flex'>
            <div className='mx-4'>
            <FontAwesomeIcon icon={faUser} className='mx-2'/>
            <FontAwesomeIcon icon={faBars} />
            </div>
            <div>
            <FontAwesomeIcon icon={faGlobe} className='mx-2'/>
            <select onChange={change} value={lang}>
                <option value="en">English</option>
                <option value="ar">العربية</option>
            </select>
            </div>
        </div>
        
    </div>)
}
export default Nav;