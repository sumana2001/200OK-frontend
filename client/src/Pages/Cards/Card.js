import './css/card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className='left'>
                <h1>NAME</h1>
                <div className='speciality'>
                    <div className='subtitle'>
                        Speciality  :
                    </div>
                    <div className='description'>
                        Heart Transplant.<br />
                        Liver Transplant.
                    </div>
                </div> <br />
                <div className='type'>
                    <span className='subtitle'>Type Of Hospital :</span>
                    <span className='description'> Public/Private</span>
                </div>
                <div className='cost'>
                    <span className='subtitle'>
                        Average - cost :
                    </span>
                    <span className='description'>

                    </span>
                </div>
                <div className='beds'>
                    <span className='subtitle'>
                        Available - Beds :
                    </span>
                    <span className='description'>

                    </span>
                </div>
                <div className='covid'>
                    <span className='subtitle'>
                        Covid Hospital : 
                    </span>
                    <span className='description'>
                        YES/NO
                    </span>
                </div>
                <div className='army'>
                    <span className='subtitle'>
                        Army Empanelled :
                    </span>
                    <span className='description'>
                        YES/NO
                    </span>
                </div><br />
                <div className='contact'>
                    <span className='subtitle'>
                        Contact :
                    </span>
                    <span className='description'>

                    </span>
                </div>
                <div className='timing'>
                    <span className='subtitle'>
                        Timing :
                    </span>
                    <span className='description'>

                    </span>
                </div>
                <div className='address'>
                    <span className='subtitle'>
                        Address :
                    </span>
                    <span className='description'>

                    </span>
                </div>
                <div className='pincode'>
                    <span className='subtitle'>
                        PINCODE :
                    </span>
                    <span className='description'>

                    </span>
                </div>

            </div>
            <div className='right'>
                <div className='image'></div>
                <div className='Rating'>
                    <span className='subtitle'>
                        Rating : 
                    </span>
                    <span className='description'>

                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;