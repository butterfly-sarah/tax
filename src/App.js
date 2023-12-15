import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/admin/mainAdmin/Main';
import Mainuser from './components/user/mainUser/Mainuser';
import Allservices from './components/user/allservices/Allservices';
import Perpapers from './components/user/perpapers/Perpapers';
import Compapers from './components/user/compapers/Compapers';
import Blogs from './components/admin/blogs/Blogs';
import Addblog from './components/admin/blogs/Addblog';
import Services from './components/admin/services/Services';
import Users from './components/admin/users/users';
import Adduser from './components/admin/users/adduser';

import Layout from "./components/Layout/Layout";
import Aboutpage from "./components/About/About";
import Contactus from "./components/Contactuspage/Contact";
import Layoutdashboard from "./components/Layout/Layoutdashboard";
import Homepage from './components/Homepage/Home';
import Blogss from './components/Blogs/Blog';
import Servicess from './components/Services/Services';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Main/>}>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/addblog' element={<Addblog/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/adduser' element={<Adduser/>}/>
        </Route>
        <Route path="/home" element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="about" element={<Aboutpage/>}/>
            <Route path="services" element={<Servicess/>}/>
            <Route path="blogs" element={<Blogss/>}/>
            <Route path="contactus" element={<Contactus/>}/>
        </Route>
        <Route path="/dashbodrd" element={<Layoutdashboard/>}></Route>
       <Route path='/user' element={<Mainuser/>}>
        <Route path='/user/services' element={<Allservices/>}/>
        <Route path='/user/perpapers' element={<Perpapers/>}/>
        <Route path='/user/compapers' element={<Compapers/>}/>
        </Route>
       </Routes>
       </BrowserRouter>
    </div>
    </>
  );
}

export default App;
