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

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path='/admin' element={<Main/>}>
        <Route path='/admin/blogs' element={<Blogs/>}/>
        <Route path='/admin/addblog' element={<Addblog/>}/>
        <Route path='/admin/services' element={<Services/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/admin/adduser' element={<Adduser/>}/>
        </Route>
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
