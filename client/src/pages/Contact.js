import React, { Component } from 'react';
//import axios from 'axios';
//import { STRAPI_CONTACT_API } from '../Constants';
/* import BlogPost from '../components/blog'; */



export default class Contact extends Component {
    /* state = {
        firstname: '',
        surname: '',
        email: '',
        message: '',
        firstnameError: true,
        surnameError: true,
        emailError: true,
        messageError: true,

        userName: window.sessionStorage.getItem("user"),
        correctlySent: '',
        showMore: false,

    }

    handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        switch (name) {
            case 'firstname':
                (value !== '') ? this.setState({ firstnameError: false }) : this.setState({ firstnameError: true })
                break;
            case 'surname':
                (value !== '') ? this.setState({ surnameError: false }) : this.setState({ surnameError: true })
                break;
            case 'email':
                (emailPattern.test(value)) ? this.setState({ emailError: false }) : this.setState({ emailError: true })
                break;
            case 'message':
                (value !== '') ? this.setState({ messageError: false }) : this.setState({ messageError: true })
                break;
            default:
                break;
        }
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {firstname, surname, email, message} = this.state;
        axios.post(STRAPI_CONTACT_API, {
            name: firstname,
            surname: surname,
            email: email,
            message: message
        })
        .then(result => {
            console.log(result);
            this.setState({
                correctlySent: 'Well done! Your message has been sent',
            })
        })
        .catch(err => {
            console.log(err);
            this.setState({
                correctlySent: 'Well fuck.. Something is not right',
            })
        })
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
    } */
    render() {
       // const { firstnameError, surnameError, emailError, messageError, userName, correctlySent, showMore} = this.state;
        return (
            <div className="row mt-5">
                <div className="col-md-5 m-auto ">
                    <h1 className="mt-4">Please contact us, USERNAME</h1>

                    <form className='mt-5'>
                    <h2>Contact form</h2>
                        <p>Enter your firstname</p>
                        <input type="text"
                            name="firstname"
                            className="form-control"
                        />
                        <br />
                        <p>Enter your surname</p>
                        <input type="text"
                            name="surname"
                            className="form-control"
                        />
                        <br />
                        <p>Enter your Email</p>
                        <input type="text"
                            name="email"
                            className="form-control"
                        />
                        <br />
                        <p>Enter your message</p>
                        <input type="text"
                            name="message"
                            className="form-control"
                        />
                        <br />
                    </form>
                </div>
            </div>
        )
    }

}