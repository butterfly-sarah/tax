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
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
            <div class="container-fluid " style={{background:"none"}}>
  <Link class="navbar-brand" href="#"><h1>Tax Hub</h1></Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">Services</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">Blogs</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">Contact Us</Link>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0 ms-auto">
    <span className='mx-4'>
            <FontAwesomeIcon icon={faUser} className='mx-2'/>
            <FontAwesomeIcon icon={faBars} />
        </span>
        <FontAwesomeIcon icon={faGlobe} className='mr-sm-2'/>
            <select onChange={change} className='my-2 my-sm-0'>
                <option value="en"> English</option>
                <option value="ar">العربية</option>
            </select>
    </form>
  </div>
  </div>

</nav>
)
}
export default Nav;