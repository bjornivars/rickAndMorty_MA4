import React, * as react from 'react';
import Axios from 'axios';
import { RM_API } from '../components/constants/constants';
import { HEROKU_BYPASS_CORS } from '../components/constants/constants';
import Cards from './../components/cards';

export default class Dashboard extends react.Component {

  state = {
    allResults: undefined,

    filteredResults: [],
    isResultsFiltered: false,
    searchPhrase: '',
    
    userName: window.sessionStorage.getItem("user"),
  }

  componentDidMount() {
    Axios.get(HEROKU_BYPASS_CORS + RM_API)
      .then(result => {
        this.setState({
          allResults: result.data.results,
        })
        console.log(this.state.allResults);
      })
  }

  handleFiltering = (input) => {
    const { allResults } = this.state
    let filteredCards = allResults.filter((value) => {
      return value.name.toLowerCase().includes((input.target.value).toLowerCase())
    })
    this.setState({
      filteredResults: filteredCards,
      searchPhrase: input.target.value,
      isResultsFiltered: true
    })
  }

  render() {
    const { allResults, filteredResults, searchPhrase, isResultsFiltered, userName } = this.state;
    return (
      <div className="Component">
        <h1 className="mb-5 pt-5">Welcome back, {userName}</h1>
        <form className='col-md-6 m-auto'>
          <p>Search for a Character</p>
          <input type='text'
            name='username'
            onChange={this.handleFiltering}
            className="form-control"
          />
          <br />
          <br />
        </form>
        <div className="d-flex justify-content-between noWrap">
          {
            (isResultsFiltered) ?
              <div className="col-md-12 ">
                <h1>Results for "{searchPhrase}"</h1>
                <div className='d-flex justify-content-start noWrap'>
                  {
                    (filteredResults.length > 0) ?
                      filteredResults.map((value, index) => {
                        return <Cards key={index}
                          name={value.name}
                          image={value.image}
                          species={value.species}
                          gender={value.gender}
                          id={value.id}
                        />
                      }) :
                      <div>No Results</div>
                  }
                </div>
              </div> : <>
                {
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
                    <div className="d-flex justify-content-center col-md-3">
                      <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                    </div>
                } </>
          }
        </div>
      </div>
    );
  }
}