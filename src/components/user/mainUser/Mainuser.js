import { Link, Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import './mainuser.css'
import Allservices from "../allservices/Allservices";
import Perpapers from "../perpapers/Perpapers";
import Compapers from "../compapers/Compapers";

function Mainuser(){
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
        </div>
        <div className="col-9">
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