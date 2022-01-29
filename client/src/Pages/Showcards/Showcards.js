import './css/Showcards.css'
import Cards from '../Cards/Card';
import { useState } from 'react';

const Showcards = (props) => {

    const state=props.state;
    const district=props.district;
    const pin=this.props.pin;

    const [covid,setCovid]=useState("");
    const [army,setArmy]=useState("");
    const [govt,setGovt]=useState("");


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

    function fetch_hospital() {
        var url = "https://hospitalapi200ok.herokuapp.com/hospital/";
        if(state||district||pin||govt||covid||army)
            url=url.concat(state,district,pin,govt,covid,army);
        fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            setDataisloaded(true);
            setItems(res);
            console.log(res);
        })
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
                            <li>Covid</li>
                            <li>Army</li>
                            <li>Government: YES<input type="radio" autoComplete="off" onChange={()=>{
                                setGovt("?typeGP=true");
                                }} name="typeGP" />
                                NO
                                <input type="radio" autoComplete="off" onChange={()=>{
                                setGovt("?typeGP=false");
                                }} name="typeGP" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Cards items={props.items} />

        </div>
    );
}

export default Showcards;