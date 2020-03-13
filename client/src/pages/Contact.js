import React, { Component } from 'react';


export default class Contact extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        firstnameError: true,
        lastnameError: true,
        emailError: true,
        messageError: true,

        correctlySent: '',
    }

    handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        switch (name) {
            case 'firstname':
                (value !== '') ? this.setState({ firstnameError: false }) : this.setState({ firstnameError: true })
                break;
            case 'lastname':
                (value !== '') ? this.setState({ lastnameError: false }) : this.setState({ lastnameError: true })
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
         const {firstnameError, lastnameError, emailError, messageError} = this.state;
         (!firstnameError || !lastnameError || !emailError || !messageError) ?
         this.setState({
            correctlySent: 'Well done! Your message has been sent',
        }) : 
        this.setState({
            correctlySent: 'Something went wront.. Try again later',
        })
        ;
     }
 
    render() {
        const { firstnameError, lastnameError, emailError, messageError, correctlySent } = this.state;
        return (
            <div className="row mt-5">
                <div className="col-md-5 m-auto ">
                    <h1 className="mt-4">Please contact us, USERNAME</h1>

                    <form className='mt-5' onSubmit={this.handleSubmit}>
                        <h2 className='mb-4'>Contact form</h2>
                        <p>Firstname</p>
                        <input type="text"
                            name="firstname"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        <p className={(firstnameError) ? 'error' : 'd-none'}>Please enter firstname</p>
                        <br />
                        <p>Lastname</p>
                        <input type="text"
                            name="lastname"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        <p className={(lastnameError) ? 'error' : 'd-none'}>Please enter lastname</p>

                        <br />
                        <p>Email</p>
                        <input type="text"
                            name="email"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        <p className={(emailError) ? 'error' : 'd-none'}>Please enter a valid email</p>

                        <br />
                        <p>Message</p>
                        <input type="text"
                            name="message"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        <p className={(messageError) ? 'error' : 'd-none'}>Please enter a message</p>
                        <br />
                        <p>{correctlySent}</p>
                        <input type="submit" disabled={firstnameError || lastnameError || emailError || messageError || correctlySent} className='btn btn-primary' />
                    </form>
                </div>
            </div>
        )
    }

}