import {useState} from 'react';

const Degrees = ({temp, weatherDescription, icon, tempMax, tempMin, windspeed, sunriseUTC, sunsetUTC, clouds}) => {
    const [celcius, setCelcius] = useState(true);

    const kelvinToCelcius = (kelvin) => {
        let result = (kelvin - 273).toFixed();
        return `${result} °C`;
    }

    const kelvinToFartenheit = (kelvin) => {
        let result = (((kelvin - 273.15) * 1.8) + 32).toFixed();
        return `${result} °F`;
    }

    const getTimeUTCtoStr = (param) => {
        let timeUTC = new Date(param * 1000);
        let timeSunriseOrSunsetStr = timeUTC.toLocaleTimeString();
        return timeSunriseOrSunsetStr;
    }
    
    return(
        <div className="d-flex">
            <div className="col-md-6 flex" style={{borderRight: '1px solid gray'}}>
                <img src={icon} className="" alt="" style={{maxWidth: '300px'}} />
                <div className="" style={{alignSelf: 'center'}}>
                    <p className="card-text" style={{fontSize: 'xx-large'}}>{celcius ? `${kelvinToCelcius(temp)}` : `${kelvinToFartenheit(temp)}`}</p>
                    <p>{weatherDescription}</p>
                    <button type="button" className="btn btn-primary" onClick={() => {
                        if(celcius === true) {
                            setCelcius(false);
                        }
                        if(celcius === false) {
                            setCelcius(true)
                        }
                    }}>Degrees 
                    <br />
                    °C / °F
                    </button>
                </div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', width: '100%', padding: '0 20px'}}>
                <div>
                    <p>{celcius ? `${kelvinToCelcius(tempMax)}` : `${kelvinToFartenheit(tempMax)}`}</p>
                    <span>High</span>
                </div>
                <div>
                    <p>{windspeed} m/s</p>
                    <span>Windspeed</span>
                </div>
                <div>
                    <p>{getTimeUTCtoStr(sunriseUTC)}</p>
                    <span>Sunrise</span>
                </div>
                <div>
                    <p>{celcius ? `${kelvinToCelcius(tempMin)}` : `${kelvinToFartenheit(tempMin)}`}</p>
                    <span>Low</span>
                </div>
                <div>
                    <p>{clouds}</p>
                    <span>Clouds</span>
                </div>
                <div>
                    <p>{getTimeUTCtoStr(sunsetUTC)}</p>
                    <span>Sunset</span>
                </div>
            </div>
        </div>

    )
}

export default Degrees;