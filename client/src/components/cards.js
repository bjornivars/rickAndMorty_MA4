import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ image, name, species, id, gender }) => {
    //console.log('test navbar');
    return (
        <div className='col-md-3 mt-4 mb-4 rmCard'>
            <div className='card'>
                <img className='card-img-top' src={image} alt='Card cap' />
                <div className='card-body p-3'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Species: {species}</p>
                    <p className='card-text'>Gender: {gender}</p>
                    <div className='d-flex justify-content-between'>
                        <Link className='btn btn-primary' to={`/card-specific/${id}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards; 