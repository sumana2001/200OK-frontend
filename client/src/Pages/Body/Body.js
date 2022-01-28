import Showcards from '../Showcards/Showcards';

import './css/Body.css';
import illustation from './images/7042.png';
import { useState } from 'react';

const Body = () => {
    const [items, setItems] = useState([]);
    const [Dataisloaded, setDataisloaded] = useState(false);

    const [state,setState]=useState("");
    const [district,setDistrict]=useState("");
    const [pin,setpin]=useState("");

    function fetch_hospital() {
        var url = "http://127.0.0.1:8000/";
        url=url.concat(state);
        console.log(url);
    
        fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            setDataisloaded(true);
            setItems(res);
        })
    }

    return (
        <>
            <div className="body">
                <div className='left'>
                    <h1>Search Hospitals:</h1>
                    <table>
                        <tr>
                            <td>
                                State :
                            </td>
                            <td>
                                <input type="text" name="State" onChange={
                                    (e)=>{
                                        setState(e.target.value);
                                    }
                                } />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                District :
                            </td>
                            <td>
                                <input type="text" name="District" onChange={
                                    (e)=>{
                                        setDistrict(e.target.value)
                                    }
                                } />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Pincode :
                            </td>
                            <td>
                                <input type="text" name="Pincode" onChange={
                                    (e)=>{
                                        setpin(e.target.value);
                                    }
                                } />
                            </td>
                        </tr>
                    </table>
                    <button onClick={() => { fetch_hospital() }} >Search</button>
                </div>
                <div className='right'>
                    <img src={illustation} alt='image_loading_error'></img>
                </div>
            </div>
            {Dataisloaded && <Showcards Dataisloaded={Dataisloaded} items={items} />}
        </>
    );
}

export default Body;