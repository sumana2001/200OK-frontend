import React from 'react'
import { useState } from 'react/cjs/react.development';
import './css/Forms.css'
const Forms = () => {
    
    const [hospital,setHopsital]=useState({});
    
    const [name,setName]=useState("");
    const [speciality,setSpeciality]=useState("");
    const [costWard,setCostWard]=useState(0);
    const [typeGP,setTypeGP]=useState("");
    const [rating,setRating]=useState(0);
    const [contact,setContact]=useState("");
    const [covid,setCovid]=useState(false);
    const [availableBeds,setAvailableBeds]=useState(0);
    const [timings,setTimings]=useState("");
    const [pincode,setPincode]=useState(0);
    const [army,setArmy]=useState(false);
    const [district,setDistrict]=useState("");
    const [state,setState]=useState("");
    
    const [csrf,setCsrf]=useState("");

    function add_hospital() {

        let address="";
        address=address.concat(district,",",state);
        setHopsital(
            {
                "hname": name,
                "speciality": speciality,
                "costWard": costWard,
                "rating": rating,
                "typeGP": typeGP,
                "contact": contact,
                "covid": covid,
                "army": army,
                "availableBeds": availableBeds,
                "State": state,
                "District": district,
                "pincode": pincode,
                "timings": timings,
                "Address": address,
            }
        )

        var url="http://127.0.0.1:8000/addHosp/"

        const requestOptions = {
            method: 'POST',
            headers: { 
                        'Content-Type': 'application/json',
                        // 'withCredentials': 'true',
                        // 'Access-Control-Allow-Credentials': 'true',
                     },
            body: JSON.stringify(hospital)
        };
        fetch(url,requestOptions).then((res)=>{
            console.log(res);
        })

    }
    return (
        <div className='form'>
            <h1>ADD HOSPITAL</h1>
            <table>
                <tr>
                    <td>Name : </td>
                    <td>
                    <input type="text" name="Name" autoComplete="off" placeholder='Hospital Name' onChange={
                                    (e)=>{
                                        setName(e.target.value);
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="speciality">Speciality : </td>
                    <td>
                    <input type="text" name="speciality" autoComplete="off" placeholder='Cancer' onChange={
                                    (e)=>{
                                        setSpeciality(e.target.value);
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="costWard">Cost of the Ward : </td>
                    <td>
                    <input type="text" name="costWard" autoComplete="off" placeholder='₹ 700' onChange={
                                    (e)=>{
                                        setCostWard(e.target.value);
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="typeGP">Government/Private : </td>
                    <td>
                    Government <input type="radio" autoComplete="off" onChange={()=>{setTypeGP("Government")}} name="typeGP" />
                    Private <input type="radio" autoComplete="off" onChange={()=>{setTypeGP("Private")}} name="typeGP" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="rating">Ratings : </td>
                    <td>
                    <input type="text" name="rating" autoComplete="off" placeholder='5' onChange={
                                    (e)=>{
                                        setRating(parseInt(e.target.value));
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="contact">Contact : </td>
                    <td>
                    <input type="tel" name="contact" autoComplete="off" placeholder='9999xxxx10' onChange={
                                    (e)=>{
                                        setContact(e.target.value);
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="covid">Covid : </td>
                    <td>
                        Yes
                        <input type="radio" name="covid" autoComplete="off" onChange={
                                    (e)=>{
                                        setCovid(true);
                                    }
                                } />
                        No
                        <input type="radio" name="covid" autoComplete="off" onChange={
                                    (e)=>{
                                        setCovid(false);
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="availableBeds">Available Beds : </td>
                    <td>
                    <input type="text" name="availableBeds" autoComplete="off" placeholder='150' onChange={
                                    (e)=>{
                                        setAvailableBeds(parseInt(e.target.value));
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="timings">Timings : </td>
                    <td>
                    <input type="text" name="timings" autoComplete="off" placeholder='8:00 AM - 7:30 PM' onChange={
                                    (e)=>{
                                        setTimings(e.target.value);
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="pincode">Pincode : </td>
                    <td>
                    <input type="text" name="pincode" autoComplete="off" placeholder='110001' onChange={
                                    (e)=>{
                                        setPincode(parseInt(e.target.value));
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="army">Army Empanelled : </td>
                    <td>
                        Yes
                        <input type="radio" name="army" autoComplete="off" onChange={
                                    (e)=>{
                                        setArmy(true);
                                    }
                                } />
                        No
                        <input type="radio" name="army" autoComplete="off" onChange={
                                    (e)=>{
                                        setArmy(false);
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="state">State : </td>
                    <td>
                    <input type="text" name="state" autoComplete="off" placeholder='Delhi' onChange={
                                    (e)=>{
                                        setState(e.target.value);
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="district">District : </td>
                    <td>
                    <input type="text" name="district" autoComplete="off" placeholder='North Delhi' onChange={
                                    (e)=>{
                                        setDistrict(e.target.value);
                                    }
                                } />
                    </td>
                </tr>
            </table>
            <button onClick={()=>{
                add_hospital();
            }}>Submit</button>

        </div>
    )
}
export default Forms;

