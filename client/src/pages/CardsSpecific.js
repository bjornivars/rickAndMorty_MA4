import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {
    RM_API,
    HEROKU_BYPASS_CORS
} from './../components/constants/constants';
import { Link } from 'react-router-dom';
import CardClick from '../components/card-specific';

export default function CardSpecific() {
    let { id } = useParams();
    const [characterResult, setCharacterResult] = useState(undefined);

    useEffect(() => {
        axios.get(HEROKU_BYPASS_CORS + RM_API + id)
            .then((result) => {
                setCharacterResult(result.data);
            })
    }, [id])

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