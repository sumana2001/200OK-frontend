import Showcards from '../Showcards/Showcards';

import './css/Body.css';
import illustation from './images/7042.png';
import { useState } from 'react';

const Body = () => {
    const [items,setItems]=useState([]);
    const [Dataisloaded,setDataisloaded]=useState(false);

    function fetch_hospital() {
        var url = "http://127.0.0.1:8000/";

        fetch(url).then((res) => {
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
                    <form>
                        <label>State :
                            <input type="text" name="State" />
                        </label><br />
                        <label>
                            District :
                            <input type="text" name="District" />
                        </label><br />
                        <label>
                            Pincode :
                            <input type="text" name="Pincode" />
                        </label><br />
                    </form>
                    <button onClick={()=>{fetch_hospital()}} >Search</button>
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