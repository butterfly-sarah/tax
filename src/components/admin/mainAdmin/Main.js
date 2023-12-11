import { Link, Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import './main.css'
import Services from "../services/Services";
import Users from "../users/users";
import Blogs from "../blogs/Blogs";
import Adduser from "../users/adduser";
import Addblog from "../blogs/Addblog";

function Main(){
    return(
        <>
        <Nav/>
        <div className="main row p-0 m-0">
        <div className="col-sm-12 col-md-2">
            <div className="mx-auto side">
            <h3 className="py-5 mb-5 ps-3">Dashboard</h3>
            <div className="py-3 ps-3 dashitems">
                <Link className="header" to={'/users'}>users</Link>
                <Link to={'/users'}>all users</Link>
                <Link to={'/adduser'}>add new</Link>
                <Link className="header" to={'/blogs'}>blogs</Link>
                <Link to={'/blogs'}>all blogs</Link>
                <Link to={'/addblog'}>add new</Link>
                <Link className="header" to={'/services'}>services</Link>
                <Link>unread</Link>
                <Link>ongoing</Link>
                <Link to={'/services'}>all services</Link>
                <Link className="header">analytics</Link>
                <Link className="header">settings</Link>
            </div>
            <div className="py-3 logout">
                <Link className="mx-auto">Logout</Link>
            </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-9">
            {/* <Services/> */}
            {/* <Users/> */}
            {/* <Blogs/> */}
            {/* <Adduser/> */}
            {/* <Addblog/> */}
            <Outlet/>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Main;