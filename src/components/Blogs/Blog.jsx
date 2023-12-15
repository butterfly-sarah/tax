import "./Blog.css"
import image from "../images/67f541fabe9cb675c89c649e827cbaaa.jpg"
import AOS from 'aos';
import { useEffect } from "react";
import Footer from "../footer/Footer";

function Blogss() {
  useEffect(()=>{
    AOS.init({duration:1200})
  },[])
    return ( <>
    <div   className="container-blog">
    <div   className="header-blog"></div> 
    <div data-aos="fade-up"   className="info-blogs">
      <h1>Our Blogs</h1>
      <p>Explore Our Recent blogs to enrichen your information and keep up with new events</p>
    </div> 
      
  <div data-aos="fade-down"   className="image-one-and-info d-flex flex-row gap-3 flex-wrap justify-content-center ">
    <div  className="img-1 col-xs-12 col-md-5 col-lg-4">
      <img src={image}/>
    </div>    
    <div   className="col-xs-12 col-md-6 col-lg-7">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae ducimus asperiores dolorem expedita est nemo nam provident, fugit deserunt facilis ut alias?</p>
      <a href="">Read More</a>
    </div> 
  </div> 
  
   <div data-aos="fade-up"   className="search">
    <form >
      <div   className="input-group">
        <input type="text"   className="form-control-search" placeholder="Search..." name="search" />
        <div   className="input-group-btn">
          <button   className="btn btn-default" type="submit"><i   className="icon-sr fas fa-search"></i></button>
        </div>
      </div>
    </form>
   </div>
   
<div  data-aos="fade-up" className="flex-section">
   <div   className="flex-countainer ">
    <div   className="flex-container d-flex flex-row gap-3 flex-wrap justify-content-center ">

      <div data-aos="fade-down-right" className="p-3 col-xs-12 col-md-5 col-lg-3">
        <div   className="img-div1">
          <img src={image}/>
        </div>    
        <div   className="info-div1">
          <h1>Lorem ipsum dolor sit amet</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos non magni. Est soluta corporis, modi, eveniet odio, exercitationem quidem excepturi ut fugit veniam placeat ex commodi in! Impedit, quas.</p>
          <a href="">Read More</a>
        </div> 
      </div>
      <div  data-aos="flip-left"className="p-3 col-xs-12 col-md-5 col-lg-3">
        <div   className="img-div1">
          <img src={image}/>
        </div>    
        <div   className="info-div1">
          <h1>Lorem ipsum dolor sit amet</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos non magni. Est soluta corporis, modi, eveniet odio, exercitationem quidem excepturi ut fugit veniam placeat ex commodi in! Impedit, quas.</p>
          <a href="">Read More</a>
        </div> 
      </div>
      <div  data-aos="fade-down-left"className="p-3 col-xs-12 col-md-5 col-lg-3">
        <div   className="img-div1">
          <img src={image}/>
        </div>    
        <div   className="info-div1">
          <h1>Lorem ipsum dolor sit amet</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos non magni. Est soluta corporis, modi, eveniet odio, exercitationem quidem excepturi ut fugit veniam placeat ex commodi in! Impedit, quas.</p>
          <a href="">Read More</a>
        </div> 
      </div>
      
      
    </div>
    
     </div>
 </div>
</div>
<Footer/>
    </> );
}

export default Blogss;