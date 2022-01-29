import './css/Showcards.css'
import Cards from '../Cards/Card';
import { useState } from 'react';

const Showcards = (props) => {

    const [state,setState]=useState("");
    const [district,setDistrict]=useState("");
    const [pin,setpin]=useState("");

    const [filter,setFilter]=useState(false);

    const [covid,setCovid]=useState("");
    const [army,setArmy]=useState("");
    const [govt,setGovt]=useState("");
    const [item,setItem]=useState(props.items);

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
            url=url.concat("?",state,district,pin,govt,covid,army);
        alert(url);
        fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            setItem(res);
            setFilter(true);
            console.log("fetching again");
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
                            <li>Covid: YES<input type="radio" autoComplete="off" onChange={()=>{
                                setCovid("covid=true&");
                                }} name="typeGP" />
                                NO
                                <input type="radio" autoComplete="off" onChange={()=>{
                                setCovid("covid=false&");
                                }} name="typeGP" /></li>
                            <li>Army: YES<input type="radio" autoComplete="off" onChange={()=>{
                                setArmy("army=true&");
                                }} name="typeGP" />
                                NO
                                <input type="radio" autoComplete="off" onChange={()=>{
                                setArmy("army=false&");
                                }} name="typeGP" /></li>
                            <li>Government: YES<input type="radio" autoComplete="off" onChange={()=>{
                                setGovt("typeGP=true&");
                                }} name="typeGP" />
                                NO
                                <input type="radio" autoComplete="off" onChange={()=>{
                                setGovt("typeGP=false&");
                                }} name="typeGP" />
                            </li>
                        </ul>
                        <button onClick={()=>{
                            setFilter(true);
                            setDistrict(props.district);
                            setpin(props.pin);
                            setState(props.state);

                            console.log(state);
                            
                            fetch_hospital();
                            }}>APPLY FILTERS</button>
                    </div>
                </div>
            </div>
            <Cards items={filter?item:props.items} />
        </div>
    );
}

export default Showcards;