import './css/Showcards.css'
import Cards from '../Cards/Card';
import { useState } from 'react';

const Showcards = (props) => {

    const [display, setDisplay] = useState({
        display: 'none'
    });
    const [truth_display, setTruthdisplay] = useState(false);

    function change_display() {
        if (!truth_display) {
            setDisplay({
                display: 'block'
            })
        }
        else {
            setDisplay({
                display: 'none'
            })
        }
        setTruthdisplay(!truth_display);
    }

    return (
        <div className="Showcards">
            <div className='hr' />
            <h1>HOSPITALS</h1>
            <div className='filters'>
                <div>
                    <button onClick={() => { change_display() }}>FILTERS</button>
                    <div style={display} className='filter'>
                        <ul>
                            <li>State</li>
                            <li>District</li>
                            <li>Covid</li>
                            <li>Army</li>
                            <li>Rating</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Cards items={props.items} />

        </div>
    );
}

export default Showcards;