import './css/showcards.css'
import Cards from '../Cards/Card';

const Showcards = (props) => {
    return (
        <div className="Showcards">
            <div className='hr' />
            <h1>HOSPITALS</h1>
            <Cards items={props.items} />

        </div>
    );
}

export default Showcards;