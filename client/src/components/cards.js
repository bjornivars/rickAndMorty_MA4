import React from 'react';


const Cards = (props) => {
    console.log('test navbar');

    return(
        <div className="col-md-3 mt-4 mb-4 rmCard">
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card cap" />
            <div className="card-body p-3">
                <h5 className="card-title">Name: {props.name}</h5>
                <p className="card-text">Species: {props.species}</p>
                <p className="card-text">Gender: {props.gender}</p>
            </div>
        </div>
    </div>
    )
}

export default Cards; 