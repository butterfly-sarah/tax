import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function SignUp() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "rgb(255, 255, 255)"}}>
                <div className="left-nav">
                    <a href="index.html" className="logo">Tax Hub </a>
                </div>
            </nav>
            <div className="contact-line"></div>
            <div className="p-5 text-center">
                <h2 className="h2-login mb-3" style={{color:"cornflowerblue "}}>SIGN UP</h2>
            </div>

            <div className="container form-contact" style={{maxWidth:'600px'}}>
                <form>
                    <div className="d-flex container-lg p-3 flex-row g-3 
                     row flex-wrap ">
                    <div className="col-xs-12 col-md-6 ">
                        <label className=""   htmlFor="first-name">First name</label>
                        <input type="text" className="input w-100 form-control " id="first-name"/>
                    </div>
                    <div className="col-xs-12 col-md-6 gy-3 ">
                        <label className=""  htmlFor="last-name">Last name</label>
                        <input type="text" className="input w-100 form-control" id="last-name"/>
                    </div>
                    </div>

                    <div className="col-xs-12 row g-0 p-3  pe-4    ">
                    <label className=""  htmlFor="email">Email</label>
                    <input type="email" className="input  w-10 form-control" id="email"/>
                    </div>

                    <div className=" d-flex flex-row  gx-3  row  p-3 w-100 flex-wrap ">
                    <div className="col-xs-12 col-md-6">
                    <label className=""  htmlFor="password">Password</label>
                    <input type="password" className="input w-100 form-control" id="password"/> 
                    </div>

                    <div className="col-xs-12 col-md-6 ">
                    <label className=" pt-2"  htmlFor="confirm-Password">Confirm Password</label>
                    <input type="password" className="input w-100 form-control" id="confirm-Password"/>        
                    </div>

                    </div>
                    
                    <small className=" text-secondary" style={{fontSize: "18px", display: "block", marginBottom: "10px"}}>Do you have An Account? <a href="login.html">Login</a></small>
                    <button type=" submit" className="send-now btn btn-primary" id="submit">Submit</button>
                </form> 
                </div>
        </>
    )
}

export default SignUp;
