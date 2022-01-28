import React from 'react'
import './css/Forms.css'
const Forms = () => {
    const [items, setItems] = useState([]);
    const [Dataisloaded, setDataisloaded] = useState(false);

    const [name,setName]=useState("");
    const [speciality,setSpeciality]=useState("");
    const [costWard,setCostWard]=useState("");
    const [typeGP,setTypeGP]=useState("");
    const [rating,setRating]=useState("");
    const [contact,setContact]=useState("");
    const [covid,setCovid]=useState(false);
    const [availableBeds,setAvailableBeds]=useState("");
    const [timings,setTimings]=useState("");
    const [pincode,setPincode]=useState("");
    const [army,setArmy]=useState(false);
    const [district,setDistrict]=useState("");
    const [state,setState]=useState("");


    function add_hospital() {
        
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
                    Government <input type="radio" autoComplete="off" name="typeGP" />
                    Private <input type="radio" autoComplete="off" name="typeGP" />
                    </td>
                    <td>
                    <input type="text" name="" autoComplete="off" placeholder='Hospital Name' onChange={
                                    (e)=>{
                                        set(e.target.value);
                                    }
                                } />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="rating">Ratings : </td>
                    <td>
                    <input type="text" name="rating" autoComplete="off" placeholder='5' onChange={
                                    (e)=>{
                                        setRating(e.target.value);
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
                                        setAvailableBeds(e.target.value);
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
                                        setPincode(e.target.value);
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
                                        setState(e.target.value);
                                    }
                                } />
                    </td>
                </tr>
            </table>
            <button type="submit" onClick={()=>{
                add_hospital();
            }}>Submit</button>

        </div>
    )
}
export default Forms;

