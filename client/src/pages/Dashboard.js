import React, * as react from 'react';
import Axios from 'axios';
import { RM_API } from '../components/constants/constants';
import { HEROKU_BYPASS_CORS } from '../components/constants/constants';
import Cards from './../components/cards';

export default class Dashboard extends react.Component {

    state = {
        allResults: undefined,
    }

    componentDidMount(){
        Axios.get(HEROKU_BYPASS_CORS + RM_API)
        .then(result => {
            this.setState({
                allResults: result.data.results,
            })
            console.log(this.state.allResults);
        })
    }
    
  render() {
const {allResults} = this.state;
    return (
      <div className="Component">
        <h1 className="mb-5 pt-5">Welcome back, USERNAME</h1>
        <div className="d-flex justify-content-between noWrap">
        {
                (allResults !== undefined) ?
                  allResults.map((value, index) => {
                    return <Cards key={index}
                      name={value.name}
                      image={value.image}
                      species={value.species}
                      gender={value.gender}
                    />
                  }) :
                  <div className="d-flex justify-content-center col-md-3">
                    <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                  </div>
              }
              </div>

      </div>
    );
  }
}