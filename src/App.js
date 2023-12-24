import './App.css';
import Weather from './components/Weather';
import { CityProvider } from './contexts/CityContext';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <>
      <CityProvider>
        <WeatherProvider>
          <Weather />
        </WeatherProvider>
      </CityProvider>
    </>
  );
}

export default App;
