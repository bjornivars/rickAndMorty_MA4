import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='col-md-12 footer'>
            <footer className='page-footer font-small teal pt-4 col-md-8 m-auto'>
                <div className='container-fluid text-center text-md-left'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-6 mt-md-0 mt-3'>
                            <ul className='footer-ul d-flex justify-content-between'>
                                <li className='footer-li'><Link to={'/'}>{'Dashboard'}</Link></li>
                                <li className='footer-li'><Link to={'/contact'}>{'Contact'}</Link></li>
                                <li className='footer-li'><Link to={'/about'}>{'About'}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-5 pt-3'>
                    <p className='whiteText'>
                        This is Module Assignment 3 make with Bootstrap 4, Sass and React.
                        Api is from :
                        <a href='https://rickandmortyapi.com/api/character/'>
                            https://rickandmortyapi.com/api/character/
                        </a>
                        and is what is used for the cards and card-specific site.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer; 