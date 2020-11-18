import React, { useState } from 'react';
import { HomeScreen } from './components/home/HomeScreen';
import { useFetch } from './components/hooks/useFetch';
import { Layout } from './components/layout/Layout';
import Loader from "react-loader-spinner";
import Reveal from 'react-reveal/Reveal';


function App() {
   
  const [selectedCity, setSelectedCity] = useState([]);

  const state = useFetch(selectedCity.value);

  const {currentConditions, forecast, error} = state;
  const {data: dataForecast, loading: loadingForecast} = forecast;
  const {data: dataCC, loading: loadingCC} = currentConditions;

  return (
    <>
      { (error) && <h1>{error}</h1>}
      { (dataCC <= 0 || dataForecast <= 0 || loadingForecast || loadingCC) ? <div id="center"><Loader type="Circles" color="#00BFFF" height={80} width={80}></Loader></div> : 
        <Layout>
          <Reveal effect="fadeInUp">
            <HomeScreen state={state} setSelectedCity={setSelectedCity} selectedCity={selectedCity.label} />
          </Reveal>
        </Layout>

      }
    </>
  );
}

export default App;
