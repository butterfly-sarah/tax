import '../register/page.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <>
        {/* <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "rgb(255, 255, 255)"}}>
            <div className="left-nav">
                <h2 className="logo">Tax Hub </h2>
            </div>
        </nav> */}

        <div className="p-5 text-center" >
        <h2 className="h2-login mb-3" style={{ color: "cornflowerblue" }}>LOGIN</h2>
        </div>
        <div className="container mt-5" style={{maxWidth:"550px"}}>
        <form className="form-contact w-100 mx-auto">
            <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="input form-control" id="email" aria-describedby="emailHelp" />
            <small className="text-secondary">Do Not You have An Account?
                Sign up
            </small>
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="input form-control" id="password" />
            </div>
            <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
            </div>
            <button type="submit" className="w-50 d-block  rounded-pill  mx-auto  btn btn-primary" id="submit">Submit</button>
        </form>
        </div>
        </>
    )
}

export default Login;
