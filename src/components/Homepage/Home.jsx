import "./Home.css";
import image from "../images/67f541fabe9cb675c89c649e827cbaaa.jpg";
import { Link } from "react-router-dom";
import { Number } from "../Number";
import AOS from 'aos';
import { useEffect } from "react";
import Footer from "../footer/Footer";
function Homepage() {
  useEffect(()=>{
    AOS.init({duration:1200})
  },[])




  return (
    <>
      <div data-aos="fade-up" className="container-fluid-parent home-sec">
        <div className="home-overlay">
          <div className="home-overlay-content">
            <h2 className="home-header display-3 mb-4">
              CHARTER ACCOUNTANTS
              <pre className="home-header">
                &{" "}
                <h2 className="home-header display-3 text-primary d-inline">
                  TAX EXPERTS
                </h2>
              </pre>
            </h2>
            <p className="fs-3 mt-3 mt-lg-5 mt-md-5 lh-1 header-p">
              general professional partnership of Certified Public Accountants
              with strong academic credentials and professional experience. Our
              commitment is not just to provide high-level, impactful, and
              dependable professional services, but also to promote highly
              responsive client relationship.
            </p>
            <div className="home-btns mt-5 d-flex flex-wrap">
              <button
                type="button"
                className="btn btn-primary fs-4 home-btns fw-bold rounded-pill text-black mr-0 mr-lg-3 mr-md-3 pt-1 pb-1 pl-3 pr-3 mb-3"
              >
                Request A Service
              </button>
              <button
                type="button"
                className="btn btn-transparent fs-4 home-btns fw-bold rounded-pill text-primary border-primary pt-1 pb-1 pl-3 pr-3 mb-3"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div data-aos="fade-down" className="container mx-auto mt-5">
        <div className="stats-sec d-flex justify-content-around text-center row">
          <div className="stats-items col-12 col-md-4 col-lg-4 mb-3">
          <h3 className="stats-h display-1"><Number n={70}/>+</h3>
            <p className="fs-4 stats-p fw-bold">Years of Experience</p>
          </div>
          <div className="stats-items col-12 col-md-4 col-lg-4 mb-3">
          <h3 className="stats-h display-1"><Number n={20}/>+</h3>
            <p className="fs-4 stats-p fw-bold">Clients in Egypt</p>
          </div>
          <div className="stats-items col-12 col-md-4 col-lg-4 mb-3">
          <h3 className="stats-h display-1"><Number n={300}/>+</h3>
            <p className="fs-4 stats-p fw-bold">Assignment in all Sectors</p>
          </div>
        </div>
      </div> */}

      <div  data-aos="fade-up" className="container d-flex align-items-center justify-content-center">
        <div className="left p-5 rounded-5 border border-primary h-100">
          <h2 className="values-header mb-3 display-6 fw-500">OUR VALUES</h2>
          <p className="values-p fs-4 fw-600 lh-1 mb-5 w-75">
            We are dedicated to empowering individuals, businesses, and
            communities by providing innovative and cutting-edge technology
            solutions that unlock new possibilities and drive positive change.
            Our mission is to make technology accessible, reliable, and
            impactful, enabling our customers to thrive in the digital era and
            shape a better future for all.
          </p>
          <a href="#" className="fs-4 text-decoration-none">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="right rounded-5 "></div>
      </div> 

       <div className="container services-container p-5 mt-5">
        <h4 className="services-header text-center mb-4 display-5 fw-500">
          OUR SERVICES
        </h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div data-aos="fade-down-right"  className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
                Tax Services & Consultations
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
                provides its tax services in this area on the basis of the
                specialization principle. Accordingly, each partner and his
                group provide ...
              </p>
              <a href="#" className="serv-overlay-a text-primary fs-4">
                Learn More
              </a>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">01</h2>
              </div>
            </div>
          </div>

          <div data-aos="flip-left" className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
                Auditing & Assurance
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
                Our Auditing and Assurance service provides insight on the
                current state of firms, exploring the legitimacy of firms’
                financial statements...
              </p>
              <a href="#" className="serv-overlay-a text-primary fs-4">
                Learn More
              </a>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">02</h2>
              </div>
            </div>
          </div>

          <div data-aos="fade-down-left" className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
                Bookkeeping
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
                provides daily recording of a company’s financial transactions
                into organized accounts to keep up to date of your financial
                transactions..
              </p>
              <a href="#" className="serv-overlay-a text-primary fs-4">
                Learn More
              </a>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">03</h2>
              </div>
            </div>
          </div>

          <div data-aos="fade-down-right" className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
                Investment & Incorporation
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
                Incorporating of all kinds of stock companies, partnerships.
                Performing economic feasibility studies of projects.,
                Restructuring...
              </p>
              <a href="#" className="serv-overlay-a text-primary fs-4">
                Learn More
              </a>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">04</h2>
              </div>
            </div>
          </div>

          <div data-aos="flip-left" className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
                Social Insurance
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
                handles all aspects of social insurance applications and
                resolves any problems or disputes. We work in two types : first
                type is..
              </p>
              <a href="#" className="serv-overlay-a text-primary fs-4">
                Learn More
              </a>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">05</h2>
              </div>
            </div>
          </div>

          <div data-aos="fade-down-left"  className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
                Training Workshops
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
                lh mb-3-1provides training workshops for companies and
                corporations to improve their team quality and skills required
                to unlock sucess..
              </p>
              <a href="#" className="serv-overlay-a text-primary fs-4">
                Learn More
              </a>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">06</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5">
        <div className="ourclients-sec  d-flex flex-row gap-3 flex-wrap container justify-content-center  align-items-center ">
          <h2 className="clients-header col-xs-12 col-md-3">
            OUR CLIENTS
          </h2>
          <div className=" justify-content-center align-items-center d-flex flex-row flex-wrap gap-3 rounded">
            <img data-aos="flip-left" className="clients-logos col-xs-12 col-md-2" src={image} />
            <img  data-aos="flip-left"className="clients-logos col-xs-12 col-md-2" src={image} />
            <img data-aos="flip-left"className="clients-logos col-xs-12 col-md-2" src={image} />
            <img data-aos="flip-left"className="clients-logos col-xs-12 col-md-2" src={image} />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <div className="blogs-sec">
          <h2 className="blogs-header fw-bold mb-4 display-5">
            Explore our Latest Blogs
          </h2>
          <div  className="blogs-items d-flex justify-content-around flex-wrap">
            <div data-aos="fade-down-right"  className="card blogs-card p-3 border border-none">
              <img src={image} className="card-img-top w-100  rounded-3" style={{height:'200px'}}/>
              <div className="card-body">
                <h5 className="card-title blogc-title mt-4 mb-4 fw-bold">
                  Lorem ipsum dolor sit amet
                </h5>
                <p className="card-text blogp-card mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in volu
                </p>
                <a href="#" className="text-black fw-bold blog-link">
                  Read more
                </a>
              </div>
            </div>
            <div data-aos="flip-left" className="card blogs-card p-3 border border-none">
              <img src={image} className="card-img-top w-100  rounded-3"  style={{height:'200px'}}/>
              <div className="card-body">
                <h5 className="card-title blogc-title mt-4 mb-4 fw-bold">
                  Lorem ipsum dolor sit amet
                </h5>
                <p className="card-text blogp-card mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in volu
                </p>
                <a href="#" className="text-black fw-bold blog-link">
                  Read more
                </a>
              </div>
            </div>
            <div data-aos="fade-down-left" className="card blogs-card p-3 border border-none d-none d-md-none d-sm-none d-lg-block">
              <img src={image} className="card-img-top w-100 rounded-3"  style={{height:'200px'}}/>
              <div className="card-body">
                <h5 className="card-title blogc-title mt-4 mb-4 fw-bold">
                  Lorem ipsum dolor sit amet
                </h5>
                <p className="card-text blogp-card mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in volu
                </p>
                <a href="#" className="text-black fw-bold blog-link">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div   className="container d-flex  align-items-end flex-column">
            <a href="#" className="blog-a text-black fw-bold">
              View All <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className="container mb-4 mt-5 question-sec p-3  mx-auto rounded-4 d-flex justify-content-between flex-wrap col-xs-12 w-100 align-items-center ">
        <div className="quest-info">
          <h4 className="quest-h text-light display-5">Have A Question?</h4>
          <p className="quest-p text-light display-5">
            Let s Have A Talk Together
          </p>
        </div>
        <div className="questbtn ">
          <button
            type="button"
            className="quest-btn btn btn-primary fs-4 rounded-pill p-1"
          >
           <Link className="quest-btn btn btn-primary fs-4 rounded-pill p-1" to={"/contactus"}>Contact us</Link>
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Homepage;
