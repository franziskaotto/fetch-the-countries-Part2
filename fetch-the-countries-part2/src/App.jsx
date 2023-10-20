import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import CountryData from "./components/CountryData";
import "./App.css";
//import PropTypes from "prop-types"; did not work anyways



const getData = (setCountriesData) => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((countryData) => setCountriesData(countryData));
};

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [learnCountry, setLearnCountry] = useState(true);
  const [chosenCountry, setChosenCountry] = useState([]);

  useEffect(() => {
    getData(setCountriesData);
  }, []);

  console.log(learnCountry);

  function returnSingleCountry() {
    console.log( "HERE", countriesData)
    return (
      <div>
        {countriesData && <CountryData
          chosenCountry={chosenCountry}/>
        }
      </div>
    )
  }

  return (
    <>

      {learnCountry ? (
        <>
          <h1>Hello Countries</h1>
          <Countries
            countryObj={countriesData}
            setLearnCountry={setLearnCountry}
            setChosenCountry={setChosenCountry}
          />
        </>
      ) : (
       returnSingleCountry()
      )}

    </>
  );
}



export default App;
