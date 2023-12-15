import "./Services.css";
import image from "../images/hand.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Footer from "../footer/Footer";
function Servicess() {

  useEffect(()=>{
    AOS.init({duration:1200})
  },[])

  return (
    <>
      <div data-aos="fade-up"  className="p-5 text-center services">
        <h2 className="mb-3">Our Services</h2>
        <h5 className="mb-3">
          We provide you with a wide range of service in the fields of audit,
          assurance, accouting, taxation, investment, and incorporation of new
          companies with a competitive fee.
        </h5>
      </div>

      <div className="container">
        <div data-aos="fade-right" className="container card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body card-info">
                <h2 className="card-title">Tax Services & Consultations</h2>

                <p className="card-text">
                  provides its tax services in this area on the basis of the
                  specialization principle. Accordingly, each partner and his
                  group provide a specific tax service.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-start img-card"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="container card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-start img-card"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body card-info">
                <h2 className="card-title">Auditing&Assurance</h2>
                <p className="card-text">
                  Our Auditing and Assurance service provides insight on the
                  current state of firms, explring the legitimacy of fitms`
                  financial statements and providing assurance to investors and
                  capital markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <img src={image} className="img-card img-right" alt="..." />
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
                <img className="image-left img-card" src={image} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  data-aos="fade-right" className="container card mb-3 pt-5">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body card-info">
              <h2 className="card-title">Social Insurance</h2>

              <p className="card-text">
                handles all aspects of social insurance applications and
                resolves any problems or disputes
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start img-card"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className="container card mb-3 pb-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start img-card"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body card-info">
              <h2 className="card-title">Training Workshops</h2>

              <p className="card-text">
                provides traning workshops for companies and corporations to
                improve their team quality and skills required to unlock
                sucess..
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Servicess;
