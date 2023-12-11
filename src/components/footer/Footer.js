import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

function Footer(){
    return(
        <div className="text-center footer px-5 py-3">
        <h1 className="text-light p-3">Tax Hub</h1>
        <div className='line'></div>
        <div className='py-3'>
            <Link className='mx-2 navlink' >Home</Link>
            <Link className='mx-2 navlink' >About</Link>
            <Link className='mx-2 navlink' >Services</Link>
            <Link className='mx-2 navlink' >Blogs</Link>
            <Link className='mx-2 navlink' >Contact Us</Link>
        </div>
        <div className='line'></div>
        <div>
        <FontAwesomeIcon icon={faTwitter} className="text-light p-3"/>
        <FontAwesomeIcon icon={faSquareFacebook}  className="text-light p-3"/>
        <FontAwesomeIcon icon={faLinkedin} className='text-light p-3'/>
        </div>
        </div>
    )
}
export default Footer;