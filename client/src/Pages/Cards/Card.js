import './css/card.css'

const Card = (props) => {

    const items=props.items;

    function hosptial_mapping(item) {
        return (
            <div className="card">
                <div className='left'>
                    <h1>{item.name}</h1>
                    <div>
                        <span className='subtitle'>
                        ID :
                        </span>
                        <span className='description'>
                            {item.id}
                        </span>
                    </div>
                    <div className='speciality'>
                        <div className='subtitle'>
                            Speciality  :
                        </div>
                        <div className='description'>
                            {item.speciality}
                        </div>
                    </div> <br />
                    <div className='type'>
                        <span className='subtitle'>Type Of Hospital :</span>
                        <span className='description'> {item.typeGP?"Government":"Private"}</span>
                    </div>
                    <div className='cost'>
                        <span className='subtitle'>
                            Average - cost :
                        </span>
                        <span className='description'>
                            {item.costWard}
                        </span>
                    </div>
                    <div className='beds'>
                        <span className='subtitle'>
                            Available - Beds :
                        </span>
                        <span className='description'>
                            {item.availableBeds}
                        </span>
                    </div>
                    <div className='covid'>
                        <span className='subtitle'>
                            Covid Hospital :
                        </span>
                        <span className='description'>
                            {item.covid?"Yes":"No"}
                        </span>
                    </div>
                    <div className='army'>
                        <span className='subtitle'>
                            Army Empanelled :
                        </span>
                        <span className='description'>
                            {item.army?"Yes":"No"}
                        </span>
                    </div><br />
                    <div className='contact'>
                        <span className='subtitle'>
                            Contact :
                        </span>
                        <span className='description'>
                            {item.contact}
                        </span>
                    </div>
                    <div className='timing'>
                        <span className='subtitle'>
                            Timing :
                        </span>
                        <span className='description'>
                            {item.timings}
                        </span>
                    </div>
                    <div className='address'>
                        <span className='subtitle'>
                            Address :
                        </span>
                        <span className='description'>
                            {item.district+', '+item.state}
                        </span>
                    </div>
                    <div className='pincode'>
                        <span className='subtitle'>
                            PINCODE :
                        </span>
                        <span className='description'>
                            {item.pincode}
                        </span>
                    </div>

                </div>
                <div className='right'>
                    <div className='image'><img src='https://mediglobus.com/wp-content/uploads/2017/11/fortis-clinic44.jpg' alt='error_loading'></img></div>
                    <div className='Rating'>
                        <span className='subtitle'>
                            Rating :
                        </span>
                        <span className='description'>
                            {item.rating}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {items.map(hosptial_mapping)}
        </div>
    );
}

export default Card;