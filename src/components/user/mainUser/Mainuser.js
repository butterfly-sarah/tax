import { Link, Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import './mainuser.css'
import { useState } from "react";

function Mainuser(){
const [paperDropdown ,setpaperDropdown] = useState(true)
const [serviceDropdown ,setserviceDropdown] = useState(false)
const handleShowDropdown = (drop)=>{
    switch (drop) {
      case 'paper':
          setpaperDropdown(true)
          setserviceDropdown(false)
        break;
      case 'service':
          setpaperDropdown(false)
          setserviceDropdown(true)
        break;
        default:
            break;
    }
}
    return(
        <>
        <Nav/>
        <div className="main row p-0 m-0">
        <div className="col-sm-12 col-md-2">
            <div className="mx-auto side">
            <h3 className="py-5 mb-5 ps-3">Dashboard</h3>
            <div className="py-3 ps-3 dashitems">
                <Link className="header" to={'/user/perpapers'}>papers</Link>
                <Link to={'/user/perpapers'}>personal papers</Link>
                <Link to={'/user/compapers'}>company papers</Link>
                <Link className="header" to={'/user/services'}>services</Link>
                <Link>request new service</Link>
                <Link>ongoing</Link>
                <Link to={'/user/services'}>all services</Link>
                <Link className="header">settings</Link>
            </div>
            <div className="py-3 logout">
                <Link className="mx-auto">Logout</Link>
            </div>
            </div>
            <div className="dropside">
            <div className="links d-flex justify-content-around mt-3">
                <Link className="header" to={'/user/perpapers'} onClick={()=>handleShowDropdown("paper")}>papers</Link>
                <Link className="header" to={'/user/services'} onClick={()=>handleShowDropdown("service")}>services</Link>
                <Link className="header">settings</Link>
            </div>
            <div className="mt-4 row">
                {
              paperDropdown ?( <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
                papers
              </button>
              <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                <li ><Link className='dropdown-item text-dark' to="/user/perpapers">personal papers</Link></li>
                <li><Link className='dropdown-item text-dark' to="/user/compapers">company papers</Link></li>
              </ul>
            </div>):''
            }
                {
              serviceDropdown ?( <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
                services
              </button>
              <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                <li ><Link className='dropdown-item text-dark' to="">request new service</Link></li>
                <li ><Link className='dropdown-item text-dark' to="">ongoing</Link></li>
                <li><Link className='dropdown-item text-dark' to="/user/services">all services</Link></li>
              </ul>
            </div>):''
            }
            </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-9">
            {/* <Allservices/> */}
            {/* <Perpapers/> */}
            {/* <Compapers/> */}
            <Outlet/>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Mainuser;