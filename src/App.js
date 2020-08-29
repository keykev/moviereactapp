import React, { useState } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  require('dotenv').config()
  console.log(process.env)
  const api_key = process.env.API_KEY;

  const apiurl = `http://www.omdbapi.com/?apikey=${api_key};

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        if(results) {
          setState(prevState => {
            return { ...prevState, results: results }
          })
        }
        else {
          alert('No such movie name')
        }
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Find Your Movie</h1>
      </header> 
      <main>
        <Search handleInput={handleInput} search={search} />
        {/*Results */}
        <Results results = {state.results} openPopup = {openPopup} />

        {typeof state.selected.Title != "undefined" ? <Popup selected = {state.selected} closePopup = {closePopup} /> : false}
      </main>
    </div>
  );  
}

export default App