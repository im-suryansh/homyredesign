import React,{useState,useEffect} from 'react'
import card from '../../assets/servicescard.svg'
import mobileview  from '../../assets/mobileview.svg'
import { Link } from 'react-router-dom'
import desktopview from '../../assets/ourservicesbackground.svg'
import aboutimg from '../../assets/feature.jpg'
import "./Signup.css"
// import axios from 'axios'


const signup = () => {



const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const { name, email, password, confirm_password } = formData;

    const response = await fetch(
        "url",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, confirm_password })
        }
    );

    if (response.ok) {
        alert("Data stored");

        setFormData({
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        });
    }
};



  return (
    <div className="signup">

    <div
      className="wapper"
      style={{ display: "flex", flexDirection: "column"}}
>


    
      <div className="signup-headline" >CREATE YOUR ACCOUNT</div>

   
      <img src={mobileview} alt="" className='mobileview' />


      <img src={desktopview} alt=""  className='desktopview'/>

     

  

      
    </div>

    <div className="signup-cards" >

    <img src={aboutimg} alt="" className='aboutusimg' />

     <div className="signup-form" >

<form method='POST'  onSubmit={handleSubmit}>
    
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
        <input
            type="password"
            id="password"
            name="password"
            value={formData.email}
            placeholder="password"
            onChange={handleChange}
            required
        />
    </div>

    <div>
        <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.email}
            placeholder="Confirm password"
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
            // required
        ></textarea>
    </div>
    <Link to="/login"><button className='submit-btn' type="submit" >Submit</button></Link>
</form>

</div>





     

    </div>
 
 </div>
  )
}

export default signup
