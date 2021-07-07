import { useEffect, useState} from "react";
import Degrees from './Degrees';

const WeatherContainer = ({ latitude, longitude }) => {
    const [data, setData] = useState(null);

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
        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }

        let city = data['name'];
        let country = data['sys']['country'];
        let sky = data['weather'][0]['description'];
        let icon = `https://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`;
        let windspeed = data['wind']['speed']
        let temp = (data['main']['temp'] / 10).toFixed(1);
        let pressure = data['main']['pressure'];
        let humidity = data['main']['humidity'];
        let clouds = `${data['clouds']['all']} %`
        return(
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Weather APP</h2>
                    <h5>{`${city}/${country}`}</h5>
                    <div className="first-container">
                        <div className="col-6">
                        "{capitalizeFirstLetter(sky)}"
                        <img src={icon} className="card-img-top" alt="" style={{width: '5rem'}} />
                        </div>
                        <Degrees temp={temp}/>
                    </div>
                    <p>Windspeed: {windspeed} m/s</p>
                    <p>Pressure: {pressure} mb</p>
                    <p>Humidity: {humidity}</p>
                    <p>Clouds: {clouds}</p>
                </div>
            </div>
        )
    } else {
        return <div></div>;
    }
}

export default WeatherContainer;
