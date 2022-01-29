import React from 'react'
import { useState } from 'react';
import './css/Forms.css'
const Updatehospital = () => {

    const [hospital, setHopsital] = useState({});

    const [id, setId]=useState();
    const [iddelete, setIddelete]=useState();
    const [name, setName] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [costWard, setCostWard] = useState(0);
    const [typeGP, setTypeGP] = useState(false);
    const [rating, setRating] = useState(0);
    const [contact, setContact] = useState("");
    const [covid, setCovid] = useState(false);
    const [availableBeds, setAvailableBeds] = useState(0);
    const [timings, setTimings] = useState("");
    const [pincode, setPincode] = useState(0);
    const [army, setArmy] = useState(false);
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    
    const [url,setUrl]=useState("https://hospitalapi200ok.herokuapp.com/hospital/")

    function set_hospital() {
        setUrl(`https://hospitalapi200ok.herokuapp.com/hospital/${id}`);
        setHopsital(
            {
                "name": name,
                "speciality": speciality,
                "costWard": costWard,
                "rating": rating,
                "typeGP": typeGP,
                "contact": contact,
                "covid": covid,
                "army": army,
                "availableBeds": availableBeds,
                "state": state,
                "district": district,
                "pincode": pincode,
                "timings": timings,
            }
        );
    }

    async function add_hospital() {

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hospital)
        };

        alert("updaing");

        await fetch(url, requestOptions).then((res) => {
            if(res.ok){
                alert('updated');
            }
        })
        window.location.href='/';
    }

    function delete_request(){ 
        setUrl(`https://hospitalapi200ok.herokuapp.com/hospital/${iddelete}`);
    }

    async function delete_hospital() {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hospital)
        };

        alert("deleting");

        await fetch(url, requestOptions).then((res) => {
            console.log(res);
            if(res.ok){
                alert('deleted');
            }
        });
        window.location.href='/';
    }


    return (
    <>
        <div className='form'>
            <h1>EDIT HOSPITAL</h1>
            <table>
                <tr>
                    <td>ID:</td>
                    <td> <input type="text" name="Name" autoComplete="off" placeholder='ID(to be changed)' onChange={
                            (e) => {
                                setId(e.target.value);
                            }
                        } /></td>
                </tr>
                <tr>
                    <td>Name : </td>
                    <td>
                        <input type="text" name="Name" autoComplete="off" placeholder='Hospital Name' onChange={
                            (e) => {
                                setName(e.target.value);
                            }
                        } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="speciality">Speciality : </td>
                    <td>
                        <input type="text" name="speciality" autoComplete="off" placeholder='Cancer' onChange={
                            (e) => {
                                setSpeciality(e.target.value);
                            }
                        } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="costWard">Cost of the Ward : </td>
                    <td>
                        <input type="text" name="costWard" autoComplete="off" placeholder='₹ 700' onChange={
                            (e) => {
                                setCostWard(e.target.value);
                            }
                        } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="typeGP">Government/Private : </td>
                    <td>
                        Government <input type="radio" autoComplete="off" onChange={() => { setTypeGP(true) }} name="typeGP" />
                        Private <input type="radio" autoComplete="off" onChange={() => { setTypeGP(false) }} name="typeGP" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="rating">Ratings : </td>
                    <td>
                        <input type="text" name="rating" autoComplete="off" placeholder='5' onChange={
                            (e) => {
                                setRating(parseInt(e.target.value));
                            }
                        } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="contact">Contact : </td>
                    <td>
                        <input type="tel" name="contact" autoComplete="off" placeholder='9999xxxx10' onChange={
                            (e) => {
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
                            (e) => {
                                setCovid(true);
                            }
                        } />
                        No
                        <input type="radio" name="covid" autoComplete="off" onChange={
                            (e) => {
                                setCovid(false);
                            }
                        } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="availableBeds">Available Beds : </td>
                    <td>
                        <input type="text" name="availableBeds" autoComplete="off" placeholder='150' onChange={
                            (e) => {
                                setAvailableBeds(parseInt(e.target.value));
                            }
                        } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="timings">Timings : </td>
                    <td>
                        <input type="text" name="timings" autoComplete="off" placeholder='8:00 AM - 7:30 PM' onChange={
                            (e) => {
                                setTimings(e.target.value);
                            }
                        } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="pincode">Pincode : </td>
                    <td>
                        <input type="text" name="pincode" autoComplete="off" placeholder='110001' onChange={
                            (e) => {
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
                            (e) => {
                                setArmy(true);
                            }
                        } />
                        No
                        <input type="radio" name="army" autoComplete="off" onChange={
                            (e) => {
                                setArmy(false);
                            }
                        } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="state">State : </td>
                    <td>
                        <input type="text" name="state" autoComplete="off" placeholder='Delhi' onChange={
                            (e) => {
                                setState(e.target.value);
                            }
                        } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="district">District : </td>
                    <td>
                        <input type="text" name="district" autoComplete="off" placeholder='North Delhi' onChange={
                            (e) => {
                                setDistrict(e.target.value);
                            }
                        } />
                    </td>
                </tr>
            </table>
            <button onClick={() => {
                set_hospital();
            }}>Create Request</button>
            {hospital ? <button onClick={() => {
                add_hospital();
            }}>Submit</button> : ''}
            <h1>DELETE HOSPITAL</h1>
            <table>
            <tr>
                    <td>ID:</td>
                    <td> <input type="text" name="Name" autoComplete="off" placeholder='ID(to be deleted)' onChange={
                            (e) => {
                                setIddelete(e.target.value);
                            }
                        } /></td>
                </tr>
            </table>
            <button onClick={() => {
                delete_request();
            }}>Delete Request</button>
            {iddelete ? <button onClick={() => {
                delete_hospital();
            }}>Submit</button> : ''}
        </div>
    </>
    )
}
export default Updatehospital;

