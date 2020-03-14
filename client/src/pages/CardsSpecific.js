import React, { Component } from 'react';

import axios from 'axios';
import { RM_API } from './../components/constants/constants';
import { Link } from 'react-router-dom';
import CardClick from '../components/card-specific';

export default class CardSpecific extends Component {
    state = {
        characterResult: undefined,
    }

    componentDidMount() {
        console.log('match', this.props.match)

        axios.get(RM_API + this.props.match.params.id)
            .then(result => {
                console.log(result)
                this.setState({
                    characterResult: result.data,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { characterResult } = this.state;
        return (
            <div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1 className='heading'>Card Specific</h1>
                    </div>
                    <div className='col-sm-12'>
                        {
                            (characterResult !== undefined) ?
                                <CardClick
                                    name={characterResult.name}
                                    image={characterResult.image}
                                    gender={characterResult.gender}
                                    species={characterResult.species}
                                    status={characterResult.status}
                                    origin={characterResult.origin.name}
                                    created={characterResult.created}
                                /> :
                                <div className='d-flex justify-content-center col-md-6'>
                                    <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                                </div>
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button className='btn btn-primary'><Link to='/'>{'Back to Dashboard'}</Link></button>
                </div>
            </div>
        )
    }
}