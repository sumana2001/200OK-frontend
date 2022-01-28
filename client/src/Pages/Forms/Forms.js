import React from 'react'
import './css/Forms.css'
const Forms = () => {
    function handleData(e){
        const name=""
    }
    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type = "text" autoComplete="off" name="Name" id="Name"></input>
                </div>
                <div>
                    <label htmlFor="speciality">Speciality : </label>
                    <input type = "text" autoComplete="off" name="speciality" id="speciality"></input>
                </div>
                <div>
                    <label htmlFor="costWard">Cost of the Ward : </label>
                    <input type = "text" autoComplete="off" name="costWard" id="costWard"></input>
                </div>
                <div>
                    <label htmlFor="typeGP">Government/Private : </label>
                    <input type = "radio" autoComplete="off" name="typeGP" id="typeGP"></input>
                </div>
                <div>
                    <label htmlFor="rating">Ratings : </label>
                    <input type = "text" autoComplete="off" name="rating" id="rating"></input>
                </div>
                <div>
                    <label htmlFor="contact">Contact : </label>
                    <input type = "text" autoComplete="off" name="contact" id="contact"></input>
                </div>
                <div>
                    <label htmlFor="covid">Covid : </label>
                    Yes
                    <input type = "radio" autoComplete="off" name="covid" id="covid"></input>
                </div>
                <div>
                    <label htmlFor="availableBeds">Available Beds : </label>
                    <input type = "text" autoComplete="off" name="availableBeds" id="availableBeds"></input>
                </div>
                <div>
                    <label htmlFor="timings">Timings : </label>
                    <input type = "text" autoComplete="off" name="timings" id="timings"></input>
                </div>
                <div>
                    <label htmlFor="pincode">Pincode : </label>
                    <input type = "text" autoComplete="off" name="pincode" id="pincode"></input>
                </div>
                <div>
                    <label htmlFor="army">Army : </label>
                    <input type = "radio" autoComplete="off" name="army" id="army"></input>
                </div>
                <div>
                    <label htmlFor="state">State : </label>
                    <input type = "text" autoComplete="off" name="state" id="state"></input>
                </div>
                <div>
                    <label htmlFor="district">District : </label>
                    <input type = "text" autoComplete="off" name="district" id="district"></input>
                </div>
                <button onClick={()=>{handleData()}} type="submit">Submit</button>

            </form>
        </>
    )
}
export default Forms;

