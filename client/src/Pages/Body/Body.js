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



    async function fetch_hospital() {
        var url = "https://hospitalapi200ok.herokuapp.com/hospital/";
        if(state||district||pin)
            url=url.concat("?",state,district,pin);
        await fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            setDataisloaded(true);
            setItems(res);
            console.log(res);
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
                                        if(e.target.value)
                                            setState("state="+e.target.value+"&");
                                        else
                                            setState('');
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
                                        if(e.target.value)
                                            setDistrict("district="+e.target.value+"&");
                                        else
                                            setDistrict('');
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
                                        if(e.target.value)
                                            setpin("pincode="+e.target.value+"&");
                                        else
                                            setpin('');
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
            {Dataisloaded && <Showcards state={state} district={district} pin={pin} Dataisloaded={Dataisloaded} items={items} />}
        </>
    );
}

export default Body;