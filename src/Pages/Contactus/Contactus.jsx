import React,{useState} from 'react'
import card from '../../assets/servicescard.svg'
import mobileview  from '../../assets/mobileview.svg'
import desktopview from '../../assets/ourservicesbackground.svg'
import './Contactus.css'
import aboutimg from '../../assets/feature.jpg'
import "./Contactus.css"


const Contactus = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        message: ''
    });

    
};


  return (
    <div className="contactus">

    <div
      className="wapper"
      style={{ display: "flex", flexDirection: "column"}}
>


    
      <div className="contactus-headline" >Contact Us</div>

   
      <img src={mobileview} alt="" className='mobileview' />


      <img src={desktopview} alt=""  className='desktopview'/>

     

  

      
    </div>

    <div className="contactus-cards" >

    <img src={aboutimg} alt="" className='aboutusimg' />

     <div className="contactus-form" >

<form onSubmit={handleSubmit}>
    <div>
        <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
        />
    </div>
    <div>
        <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="phone number"
            onChange={handleChange}
            required
        />
    </div>
    <div>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="email"
            onChange={handleChange}
            required
        />
    </div>
    <div>
        <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="message"
            onChange={handleChange}
            required
        ></textarea>
    </div>
    <button className='submit-btn' type="submit" >Submit</button>
</form>

</div>





     

    </div>
 
 </div>
  )
}

export default Contactus












