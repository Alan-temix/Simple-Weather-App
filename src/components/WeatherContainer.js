import { useEffect, useState} from "react";
import Degrees from './Degrees';

const WeatherContainer = ({ latitude, longitude }) => {
    const [data, setData] = useState(null);
    const date = new Date();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        if(latitude !== 0 && longitude !== 0) {
            (async () => {
                let apiKey = 'a52f1d3bcdb5f088cbb7960342e26bc4'
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
                const d = await fetch(url).then(res => res.json());
                setData(d);
            })();
        }
      }, [latitude, longitude])

    if(data != null) {
        console.log(data);
        let city = data['name'];
        let country = data['sys']['country'];
        let sky = data['weather'][0]['description'];
        let icon = `https://openweathermap.org/img/wn/${data['weather'][0]['icon']}@4x.png`;
        let windspeed = data['wind']['speed']
        let temp = data['main']['temp'];
        let tempMax = data['main']['temp_max'];
        let tempMin = data['main']['temp_min'];
        let clouds = `${data['clouds']['all']} %`
        let sunriseUTC = data['sys']['sunrise'];
        let sunsetUTC = data['sys']['sunset'];

        return(
            <div className="card">
                <div className="card-body">
                    <div>
                        <h2 className="card-title">{`${city} ${country}`}</h2>
                        <p>{date.toUTCString()}</p>
                    </div>
                    <div>
                    {/* Inicio search */}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Search other city
                        </button>

                        <div className="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Search other location</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-4 col-form-label col-form-label-lg">Location:</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="Type here location" />
                                        </div>
                                        {/* <Search /> */}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Search</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* Fin search */}
                    </div>
                    <Degrees temp={temp} tempMax={tempMax} tempMin={tempMin} weatherDescription={capitalizeFirstLetter(sky)} icon={icon} windspeed={windspeed} sunriseUTC={sunriseUTC} sunsetUTC={sunsetUTC} clouds={clouds} />
                </div>
            </div>
        )
    } else {
        return <div></div>;
    }
}

export default WeatherContainer;
