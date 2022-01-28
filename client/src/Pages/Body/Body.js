import Showcards from '../Showcards/Showcards';

import './css/Body.css';
import illustation from './images/7042.png';
import { useState } from 'react';

const Body = () => {
    const [items, setItems] = useState([]);
    const [Dataisloaded, setDataisloaded] = useState(false);

    function fetch_hospital() {
        var url = "https://hospitalapisamplehost1.herokuapp.com/";

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
                    <table>
                        <tr>
                            <td>
                                State :
                            </td>
                            <td>
                                <input type="text" name="State" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                District :
                            </td>
                            <td>
                                <input type="text" name="District" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Pincode :
                            </td>
                            <td>
                                <input type="text" name="Pincode" />
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