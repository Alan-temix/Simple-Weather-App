import './App.css';
import {useState, useEffect} from 'react';
import WeatherContainer from './components/WeatherContainer';
import Warning from './components/Warning';
import Search from './components/Search';

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
    }
  }, [])

  return (
      <div className="App">
        {latitude !== 0 ? <WeatherContainer latitude={latitude} longitude={longitude} /> : <Warning />}
      </div>
  );
}

export default App;