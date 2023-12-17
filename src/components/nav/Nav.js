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
        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/home/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/home/services">Services</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/home/blogs">Blogs</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/home/contactus">Contact Us</Link>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0 ms-auto">
    <span className='mx-4'>
            <Link to={"/profile"}><FontAwesomeIcon icon={faUser} className='mx-2'/></Link>
            
            <div class="dropdown-center d-inline">
  <button class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FontAwesomeIcon icon={faBars} />
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/chat">chat</Link></li>
    <li><Link class="dropdown-item" to="/home/login">login</Link></li>
    <li><Link class="dropdown-item" to="/home/register">register</Link></li>
  </ul>
</div>
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