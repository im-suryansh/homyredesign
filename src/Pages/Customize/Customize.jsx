import React, { useState,useEffect } from "react";
import customizebg from "../../assets/customizebg.svg";
import "./customize.css";
import Slider from '../../Components/Slider/Slider'
import Calorimeter from "../../Components/Calorimeter/Calorimeter";
import TimeSlots from "../../Components/TimeSlots/TimeSlots";
import vectorstar from "../../assets/vectorstar.svg"
import homypro from "../../assets/homypro.svg"
import homypromax from "../../assets/homypromax.svg"
import customizationhead from "../../assets/customizationhead.svg"
import cusbgmobile from "../../assets/cusbgmobile.svg"
import { useCustomizationContext} from '../../Components/Context/CustomizationContext'
import { Link } from "react-router-dom";


const Customize = () => {
    const { data, caldata, selectedOptionTiming, selectedTimings } = useCustomizationContext();
    
    const [formData, setFormData] = useState({
        plan: '',
        time: '',
        foodway: '',
        spicy: '',
        Calorimeter: '',
        timingoptions: '',
        timings: ''
    });

    useEffect(() => {
        // Update formData whenever data changes
        setFormData(prevState => ({
            ...prevState,
            spicy: data,
            Calorimeter: caldata,
            timingoptions: selectedOptionTiming,
            timings: selectedTimings
        }));
    }, [data, caldata, selectedOptionTiming, selectedTimings]);

    // daily,weekly and so on...
    const { selectedOption, setSelectedOption } = useCustomizationContext('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        setFormData({
            ...formData,
            time: event.target.value // Update time in formData
        });
    };

    // homy, hompy pro , homy pro max
    const { userSelectedOption, setUserSelectedOption } = useCustomizationContext('');

    const handleSelect = (value) => {
        setUserSelectedOption(value);
        setFormData({
            ...formData,
            plan: value // Update plan in formData
        });
    };


    const [selectedFoodWay, setSelectedFoodWay] = useState("");

    const handleFoodWayChange = (e) => {
        const selectedFood = e.target.value;
    setSelectedFoodWay(selectedFood);
    setFormData({
        ...formData,
        foodway: selectedFood // Update foodway in formData
    });
    };


    const handleContinue = () => {
        console.log("Form Data:", formData);
        // Call the API to send formData
        sendDataToAPI(formData);
    };

    const sendDataToAPI = (data) => {
        // Make the API call to send data
        // Replace 'your-api-endpoint' with your actual API endpoint
        fetch('http://127.0.0.1:8000/api/customize/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Handle success response from the API
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error response from the API
            });
    };


    return (
        <div className="customize-page">
            <div className="img-div-customize">
                <img src={customizebg} alt="" className="desktop-cus" />
                <img src={cusbgmobile} alt="" className="mobile-cus" />
            </div>

            <div className="content-div-customize">

                <div className="first-col-customize">
                    <div className="first-col-div-customize head-first-cus">
                        <div>Let's Customize your way </div>
                    </div>

                    <div className="first-col-div-customize content-first-cus">
                        <div>
                            We are here to ensure that all our services are delivered per your expectations. 
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            Hence, let's set it as per requirements! 
                            Fill in the details here 👉
                        </div>
                    </div>

                    <div className="first-col-div-customize">
                        <div className="your-plan">Your Plan</div>


                        <div className="homy-types-cus">
                            <div
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: userSelectedOption === 'Homy' ? 'black' : '#1e1e1e',
                                    border: userSelectedOption === 'Homy' ? '2px solid white' : 'none'
                                }}
                                className="homy-cus"
                                onClick={() => handleSelect('Homy')}
                            >
                                <div>
                                    <img className="star" src={vectorstar} alt="" />
                                </div>
                                <div>
                                    Homy
                                </div>
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: userSelectedOption === 'Homy Pro' ? 'black' : '#1e1e1e',
                                    border: userSelectedOption === 'Homy Pro' ? '2px solid white' : 'none'
                                }}
                                className="homypro-cus"
                                onClick={() => handleSelect('Homy Pro')}
                            >
                                <div>
                                    <img src={homypro} alt="" />
                                </div>
                                <div>
                                    Homy Pro
                                </div>
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: userSelectedOption === 'Homy Pro Max' ? 'black' : '#1e1e1e',
                                    border: userSelectedOption === 'Homy Pro Max' ? '2px solid white' : 'none'
                                }}
                                className="homypromax-cus"
                                onClick={() => handleSelect('Homy Pro Max')}
                            >
                                <div>
                                    <img src={homypromax} alt="" />
                                </div>
                                <div>
                                    Homy Pro Max
                                </div>
                            </div>
                        </div>




                        <div >
                            <select className="options-cus" value={selectedOption} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Half Yearly">Half Yearly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="second-col-customize">

                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img src={customizationhead} alt="" />
                    </div>

                    <div >


                        <div className="row-cus foodway-cus">
                            <div className="head-cus-right">Food Way</div>
                            <div className="radio-cus">
                                <label>
                                    <input
                                        type="radio"
                                        name="foodWay"
                                        value="vegetarian"
                                        checked={selectedFoodWay === "vegetarian"}
                                        onChange={handleFoodWayChange}
                                    />
                                    Vegetarian
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        name="foodWay"
                                        value="nonvegetarian"
                                        checked={selectedFoodWay === "nonvegetarian"}
                                        onChange={handleFoodWayChange}
                                    />
                                    Non Vegetarian
                                </label>
                            </div>
                        </div>



                        <div className="row-cus" >
                            <div className="head-cus-right">Spicy Meter</div>
                            <Slider />
                        </div>

                        <div className="row-cus">
                            <div className="head-cus-right">Calorie Meter (Kcal.)</div>
                            <Calorimeter />
                        </div>

                        <div className="row-cus">

                            <div className="head-cus-right">Time Slots</div>

                            <div className="time-slot-text">
                                <div>Choose time slot as per your requirements
</div>
                                <div style={{ fontStyle: 'Italic' }}>*you can select multiple options at once</div>
                            </div>


                            <div>

                                <TimeSlots />

                            </div>

                            <div className="btn-cust">
                                <button onClick={handleContinue}>Continue</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Customize;
