import { useState } from "react";
import Inputs from "../../Ui/Input";
import { Inputdata } from "../Data/Data";
import "./Contact.css"
import image1 from "../images/67f541fabe9cb675c89c649e827cbaaa.jpg"
import image2 from "../images/nasr-city-cairo-egypt-google-maps.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip, faSignsPost } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import AOS from 'aos';
import { useEffect } from "react";
import Footer from "../footer/Footer";


function Contactus() {
    useEffect(()=>{
        AOS.init({duration:1200})
      },[])
    const [inputvalue , setinputvalue] = useState({
        name:"",
        title:"",
        email:"",
        subject:"",
        message: "",
    })
    console.log(inputvalue);
    const onChangeHandeler = (event) => {
        const { value, name } = event.target;
        setinputvalue({
          ...inputvalue,
          [name]: value,
        })
      };
   const HandlefornInput= Inputdata.map(input =>(
    <div key={input.name} className="col-xl-6 col-sm-12">
    <label htmlFor={input.id}>{input.label}</label><br/>
    <Inputs
    id={input.id}
    lable={input.label} 
    placeholder={input.placeholder}
    type={input.type}
    name={input.name}
    onChange={onChangeHandeler}
    value= {inputvalue[input.name]}
  />
</div>
    ))

    return ( <>
      <section className="contacts"> 
            <div data-aos="fade-up"  className="contacts-title">
                <h1>Contact Us</h1>
                <h6>Tax Hub see itself as partner to each of its clients - supporting and providing reliable and intelligent business solutions and maintaining dynamic professional relationship</h6>
            </div>
            <form data-aos="fade-down"  className="row" id="contacts-form">
                {HandlefornInput}
             
                <div className="col-xl-12">
                    <label>Message</label><br/>
                    <textarea name="message"   onChange={onChangeHandeler}
              value={inputvalue.message}>enter your message here</textarea><br/>
                </div> 

                <div className="col-xl-12">
                    <button type="button" className="btn btn-primary">Send now</button>
                </div>
            </form>
        </section>

        <section className="map container ">
            <img data-aos="fade-up"  src={image2} className="col-xs-12"/>
            <div className="row gap-3 justify-content-center " id="map-divs">
                <div data-aos="fade-down-right" className="col-xl-3 col-sm-12" id="item">
                    <FontAwesomeIcon className="fas fa-phone-alt" icon={faPhoneFlip} />
                    <h2>Phone</h2>
                    <p>020225254487</p>
                </div>
                <div data-aos="flip-left" className="col-xl-3 col-sm-12" id="item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h2>Email</h2>
                    <p>info@Kbs.com.eg</p>
                </div>
                <div data-aos="fade-down-left" className="col-xl-3 col-sm-12" id="item">
                    <FontAwesomeIcon icon={faSignsPost} />
                    <h2>Office</h2>
                    <p>Headquater: 30 Misr Helwan Road , Maadi.Egypt</p>
                    <p>Branch: Greek Campus office106 El Tahri Square.</p>
                </div>
            </div>
        </section>
        <section className="latest-blogs">
            <div className="latest-blogs-title  ">
                <h1 className="row justify-content-center ">Explor our Latest Blogs</h1>
            </div>
            <div className="row gap-3 justify-content-center " id="latest-blogs-divs">
                <div  data-aos="fade-down-right" className="col-xl-3 col-sm-12" id="item">
                    <img src={image1}/>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel placeat reiciendis necessitatibus doloribus repellat voluptatum dignissimos labore. Repellat magnam fuga ipsam maiores! Distinctio harum magnam consectetur laboriosam praesentium exercitationem?</p>
                    <a href="#">Read more</a>
                </div>
                <div data-aos="flip-left" className="col-xl-3 col-sm-12" id="item">
                    <img  src={image1}/>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel placeat reiciendis necessitatibus doloribus repellat voluptatum dignissimos labore. Repellat magnam fuga ipsam maiores! Distinctio harum magnam consectetur laboriosam praesentium exercitationem?</p>
                    <a href="#">Read more</a>
                </div>
                <div data-aos="fade-down-left" className="col-xl-3 col-sm-12" id="item">
                    <img src={image1}/>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel placeat reiciendis necessitatibus doloribus repellat voluptatum dignissimos labore. Repellat magnam fuga ipsam maiores! Distinctio harum magnam consectetur laboriosam praesentium exercitationem?</p>
                    <a href="#">Read more</a>
                </div>
            </div>
        </section>
        <Footer/>


    </> );
}

export default Contactus;