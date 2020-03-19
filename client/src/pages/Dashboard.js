import React, { useState, useEffect } from 'react';
//import React, * as react from 'react';
import axios from 'axios';
import { RM_API } from '../components/constants/constants';
import { HEROKU_BYPASS_CORS } from '../components/constants/constants';
import Cards from './../components/cards';

// export default class Dashboard extends react.Component {
export default function DashBoard() {

  const [allResults, setAllResults] = useState(undefined);
  const [isResultsFiltered, setIsResultsFiltered] = useState(false);
  const [returnedFilteredCards, setReturnedFilteredCards] = useState([]);
  const [userName, setUserName] = useState(window.sessionStorage.getItem('user'));
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(HEROKU_BYPASS_CORS + RM_API)
      .then((result) => {
        setAllResults(result.data.results);
      })
  }, [])

  // Filtering
  const handleFiltering = (input) => {
    setIsResultsFiltered(true)
    let setFilteredCards = allResults.filter((value) => {
      return value.name.toLowerCase().includes((input.target.value).toLowerCase())
    })
    setReturnedFilteredCards(setFilteredCards);
  }
console.log("Filtered" , returnedFilteredCards);
  return (
    <div className='Component'>
      <h1 className='heading'>Welcome back, {userName}</h1>
      <form className='col-md-6 m-auto'>
        <p className='mt-5'>Search for a Character</p>
        <input type='text'
          name='username'
          onChange={handleFiltering}
          className='form-control'
        />
        <br />
        <br />
      </form>
      <div className='d-flex justify-content-between noWrap'>
        {
                (!isResultsFiltered) ?
                <> {
                  (allResults !== undefined) ?
                    allResults.map((value, index) => {
                      return <Cards key={index}
                        name={value.name}
                        image={value.image}
                        species={value.species}
                        gender={value.gender}
                        id={value.id}
                      />
                    }) :
                    <div className='d-flex justify-content-center col-md-3'>
                      <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                    </div>
                }
                </> : <> 
                  {
                    (returnedFilteredCards !== undefined) ?
                      returnedFilteredCards.map((value, index) => {
                        return <Cards key={index}
                          name={value.name}
                          image={value.image}
                          species={value.species}
                          gender={value.gender}
                          id={value.id}
                        />
                      }) :                  
                    <div className='d-flex justify-content-center col-md-3'>
                      <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                    </div>
                  }
                </>
        }
      </div>
    </div>
  );
}