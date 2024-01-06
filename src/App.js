import './App.css';
import Weather from './components/Weather';
import { CityProvider } from './contexts/CityContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <CityProvider>
          <WeatherProvider>
            <Weather />
          </WeatherProvider>
        </CityProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
