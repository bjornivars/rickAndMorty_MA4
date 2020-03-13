import React from 'react';


const CardClick = (props) => {
    const { name, image, gender, species, status, origin, created } = props;
    return (
        <>
            <div className="col-md-6 mt-3 m-auto">
                <div className="">
                    <h1 className='text-center mt-5'>{name}</h1>
                    <div className="d-flex justify-content-center">
                        <img className="card-img-top col-md-5" src={image} alt={name} />
                        <div className='mt-5'>
                            <p><b>Gender:</b> {gender}</p>
                            <p><b>Species:</b> {species}</p>
                            <p><b>Status:</b> {status}</p>
                            <p><b>Origin:</b> {origin}</p>
                            <p><b>Date created:</b> {created}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardClick;
