import React, { Component } from 'react';


export default class Login extends Component {
    state = {
        username: '',
        password: '',

        usernameCameron: 'cameron',
        passwordCameron: 'cameron23',

        errorMessage: undefined,
    }

    handleChange = (input) => {
        // console.log('event.target', input.target)
        let name = input.target.name;
        let value = input.target.value;
        this.setState({
            [name]: value,
        })
        // console.log('this.state', this.state)
    }

    handleSubmit = (event) => {
        const { usernameCameron, passwordCameron } = this.state;
        event.preventDefault();

        let identifier = this.state.username;
        let password = this.state.password;

        (identifier !== usernameCameron) ?
            this.setState({
                errorMessage: 'Username or Password is incorrect'
            }) :
            sessionStorage.setItem('user', identifier);

        (password !== passwordCameron) ?
            this.setState({
                errorMessage: 'Username or Password is incorrect'
            }) :
            this.props.updateLoginStatus();
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <div className="container-fluid">
                <h1 className="text-center pt-8 mb-5">Login</h1>
                <div className="row m-auto">
                    <form onSubmit={this.handleSubmit} className="col-md-4 m-auto">
                        {
                            errorMessage !== undefined && <div><p className='errorMessage'>Username or password is incorrect</p></div>
                        }
                        <p>Enter a username</p>
                        <input type='text'
                            name='username'
                            onChange={this.handleChange}
                            className='form-control'
                        />
                        <br />
                        <p>Enter a password</p>
                        <input type='password'
                            name='password'
                            onChange={this.handleChange}
                            className='form-control'
                        />
                        <br />
                        <input type='submit' className='btn btn-primary' />
                    </form>
                </div>
            </div>
        );
    }
}


