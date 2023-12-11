
import 'font-awesome/css/font-awesome.min.css';
import upload from '../../../assets/Vector.png'
import { Link } from 'react-router-dom';
function Addblog(){
    return(<div className="blogs pb-3">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
    <div className="row p-0 m-0 p-4">
        <h3 className="col-12 m-0">Add new blog</h3>
    </div>
    <hr/>
    <form>
    <div className='blog-form p-4 my-5 mx-auto  '>
        <div className='row'>
        <div className='col-6'>
        <p>title</p>
        <input type='email' className='w-100' placeholder='your blog title'></input>
        </div>
        <div className='col-6'>
        <p>tags</p>
        <input type='text' className='w-100' placeholder='enter tags'></input>
        </div>
        <div className='col-6'>
        <p >upload photo</p>
        <div className='upload'>
            <img src={upload} className='d-block mx-auto'></img>
        </div>
        </div>
        <div className='col-6'>
        <p >categories</p>
        <input type='text' className='w-100'  placeholder='your blog categories'></input>
        </div>
        <div className='col-12'>
            <p>write down your blogs</p>
            <textarea placeholder='your blog' className='w-100'></textarea>
        </div>
        </div>
        <div className='text-center'>
        <button className=' create px-5 py-2 mt-5 mx-auto'>publish</button>
        </div>
        
       
    </div>
    </form>
    </div>
    )
}
export default Addblog;