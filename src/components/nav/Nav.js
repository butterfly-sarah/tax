import { faBars, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import './nav.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

 function Nav(){
    const {t, i18n}=useTranslation()
    function change(option){
    i18n.changeLanguage(option.target.value)
}
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
            <select onChange={change}>
                <option value="en"> English</option>
                <option value="ar">العربية</option>
            </select>
            </div>
        </div>
        
    </div>)
}
export default Nav;