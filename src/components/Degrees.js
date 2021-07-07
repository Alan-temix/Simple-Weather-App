import {useState} from 'react';

const Degrees = ({temp}) => {
    const [degrees, setDegrees] = useState(temp);
    const [celcius, setCelcius] = useState(true);
    
    return(
        <div className="col-6">
            <p className="card-text">{degrees}{celcius ? " °C" : " °F"}</p>
            <button type="button" className="btn btn-primary" onClick={() => {
                if(celcius === true) {
                    setDegrees((degrees * 1.8) + 32)
                    setCelcius(false);
                }
                if(celcius === false) {
                    setDegrees((degrees - 32) / 1.8)
                    setCelcius(true)
                }
            }}>Degrees 
            <br />
            °F / °C
            </button>
        </div>
    )
}

export default Degrees;