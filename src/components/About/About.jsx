import image1 from "../images/hand.jpg"
import "./About.css"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Footer from "../footer/Footer";

function Aboutpage() {
  useEffect(()=>{
    AOS.init({duration:1200})
  },[])
    return ( <>
    <div className="container">
  <div className="content-sectionone container" data-aos="fade-down">


   
  <h2 className="fs-oblique text-center">Who We Are?</h2>
<p className="text-center text-dark mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore eaque 
    ad laudantium dolorum<br/> repellatharum doloribus, nobis et eos voluptatem quisquam exercitationem
     asperiores iure quam.</p>

<img src={image1} className="img-fluid" alt="" />
  </div>



     

<section className="section-2 ">
<div className="container-fluid tow-card ">
        <div data-aos="fade-right" className=" card-one Bookkeeping">
          <div className="card-parent">
            <div className="title">
              <div className=" Bookkeeping-title">
                <h2>Bookkeeping</h2>

                <p>
                  provides daily recording of a company’s financial transactions
                  into organized accounts to keep up to date of your financial
                  transactions..
                </p>
              </div>
            </div>

            <div className="title-image image-right ">
              <img src={image1} className="img-card img-right" alt="..." />
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="container-fluid ">
          <div className=" card-one Investment">
            <div className="card-parent card-left">
              <div className="title">
                <div className="title-left ">
                  <h2>Investment & Incorporation</h2>

                  <p>
                    Incorporating of all kinds of stock companies, partnerships.
                    Performing economic feasibility studies of projects.
                  </p>
                </div>
              </div>
              <div className="title-image img-left">
                <img className="image-left img-card" src={image1} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
</section>          

<div className="clients pt-5 pb-5">
  <div className="container">
  <h2 className="text-center text-dark">Our Clients</h2>
  <div className="row">
    <div data-aos="flip-left" className="col-md-6 col-lg-3">
      <img src={image1} className="img-fluid" alt=""/>
  </div>                   

  <div data-aos="flip-left" className="col-md-6 col-lg-3">
    <img  src={image1} className="img-fluid" alt=""/>
</div>                      

<div  data-aos="flip-left" className="col-md-6 col-lg-3">
  <img  src={image1} className="img-fluid" alt=""/>
</div>                   

<div data-aos="flip-left" className="col-md-6 col-lg-3">
  <img   src={image1} className="img-fluid" alt=""/>
</div>                     
  </div>                  

</div>             
</div>             

<div className="ourpartners pt-5 pb-5">
  <div className="container">
    <h2 className="text-center text-dark">Meet Our Partners</h2>
    <div  className="row">
      <div  data-aos="flip-right" className="col-md-6 col-lg-4">
      <img  className="rounded-circle text-center mx-auto mt-3 d-block bg-secondary " alt="" width="130" height="130"/>
      <h5 className="text-dark text-center mt-3">Mahmoud Abulmagd</h5>
      <h6 className="text-primary text-center">Managing Partner</h6>
    </div>               

    <div data-aos="flip-right" className="col-md-6 col-lg-4">
      <img  className="rounded-circle text-center mx-auto mt-3 d-block bg-secondary " alt="" width="170" height="170"/>
      <h5 className="text-dark text-center mt-3">Mohamed El.Kady</h5>
      <h6 className="text-primary text-center">Executive Manager|<br/>Partner</h6>
    </div>             

    <div data-aos="flip-right" className="col-md-6 col-lg-4">
      <img  className="rounded-circle text-center mx-auto mt-3 d-block bg-secondary " alt="" width="130" height="130"/>
      <h5 className="text-dark text-center mt-3">Elsayed Essa</h5>
      <h6 className="text-primary text-center">Audit Partner</h6>
    </div>              


    </div>                 
 
</div>                       
</div>                  



<div data-aos="fade-down" className="container mt-5 question-sec p-3 pl-5 pr-5 mx-auto rounded-4 d-flex justify-content-between flex-wrap align-items-center h-25 h-md-100 h-lg-100">
  <div className="quest-info">
  <h4 className="quest-h text-light display-5">Have A Question?</h4>
  <p className="quest-p text-light display-5">Lets Have A Talk Together</p>
</div>
<div className="questbtn ">
  <button type="button" className="quest-btn btn btn-primary fs-4 rounded-pill p-1">Contact Us</button>
</div>
</div>
</div>
<Footer/>

     
    </> );
}

export default Aboutpage;