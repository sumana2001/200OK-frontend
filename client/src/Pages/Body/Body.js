import Showcards from '../Showcards/Showcards';

import './css/Body.css';
import illustation from './images/7042.png';

const Body = () => {

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

                        <input type="submit" value="Search" />
                    </form>
                </div>
                <div className='right'>
                    <img src={illustation} alt='image_loading_error'></img>
                </div>
            </div>
            <hr />
            <Showcards />
        </>
    );
}

export default Body;