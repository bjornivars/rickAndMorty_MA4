import React, { Component } from 'react';



export default class Contact extends Component {

    state = {
        showMore: false,
    }

    handleClick = () => {
        this.setState({
            showMore: true,
        })
    }
    handleSecondClick = () => {
        this.setState({
            showMore: false,
        })
    }

    render() {
        const {showMore} = this.state;
        return (
            <div className="mt-5">
                <div className="col-md-5 m-auto ">
                    <h1 className="mt-4 text-center">About us</h1>
                </div>
                <div className="otherContact text-center">
                    <p className="accordionP" onClick={(showMore !== true) ? this.handleClick : this.handleSecondClick }
                    >Other ways to contact us</p>
                    <ul className={(showMore !== true) ? 'd-none' : 'd-block unstyledUl'} >
                        <li className='unstyled'>Call us: <a href="tel:+4712345678" rel="noopener noreferrer">+47 123 45 678</a></li>
                        <li>Email: <a href="mailto:test@gmail.com" rel="noopener noreferrer">test@gmail.com</a></li>
                        <li> Adress: 
                            <a href="https://maps.google.com/?ll=59.929970,10.755964" target='_blank' rel="noopener noreferrer">Mølleparken 4, 0459 Oslo</a>
                        </li>

                    </ul>
                    </div>


            </div>
        )
    }

}