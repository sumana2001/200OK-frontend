import { useState } from "react";

const Showcards = () => {

    const [items,setItems]=useState([]);
    const [Dataisloaded,setDataisloaded]=useState(false);

    function fetch_hospital() {
        var url = "http://127.0.0.1:4000/";

        fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);
            setDataisloaded(true);
            setItems(items);
        })
    }

    return (
        <div className="Showcards">
            <hr />
            <h1>CARDS</h1>
            <button onClick={() => { fetch_hospital() }}>click here</button>
            
        </div>
    );
}

export default Showcards;