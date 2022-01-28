import React from 'react'
import './css/Forms.css'
const Forms = () => {
    return (
        <div className='form'>
            <h1>ADD HOSPITAL</h1>
            <table>
                <tr>
                    <td>Name : </td>
                    <td><input type="text" autoComplete="off" name="Name" id="Name" placeholder='Hospital Name' /></td>
                </tr>
                <tr>
                    <td htmlFor="speciality">Speciality : </td>
                    <td>
                        <input type="text" autoComplete="off" name="speciality" id="speciality" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="costWard">Cost of the Ward : </td>
                    <td>
                        <input type="text" autoComplete="off" name="costWard" id="costWard" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="typeGP">Government/Private : </td>
                    <td>
                    Government <input type="radio" autoComplete="off" name="typeGP" />
                    Private <input type="radio" autoComplete="off" name="typeGP" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="rating">Ratings : </td>
                    <td>
                        <input type="text" autoComplete="off" name="rating" id="rating" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="contact">Contact : </td>
                    <td>
                        <input type="text" autoComplete="off" name="contact" id="contact" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="covid">Covid : </td>
                    <td>
                        Yes<input type="radio" autoComplete="off" name="covid" />
                        No<input type="radio" autoComplete="off" name="covid" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="availableBeds">Available Beds : </td>
                    <td>
                        <input type="text" autoComplete="off" name="availableBeds" id="availableBeds" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="timings">Timings : </td>
                    <td>
                        <input type="text" autoComplete="off" name="timings" id="timings" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="pincode">Pincode : </td>
                    <td>
                        <input type="text" autoComplete="off" name="pincode" id="pincode" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="army">Army Empanelled : </td>
                    <td>
                        Yes<input type="radio" autoComplete="off" name="army" />
                        No<input type="radio" autoComplete="off" name="army" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="state">State : </td>
                    <td>
                        <input type="text" autoComplete="off" name="state" id="state" />
                    </td>
                </tr>
                <tr>
                    <td htmlFor="district">District : </td>
                    <td>
                        <input type="text" autoComplete="off" name="district" id="district" />
                    </td>
                </tr>
            </table>
            <button type="submit">Submit</button>

        </div>
    )
}
export default Forms;

