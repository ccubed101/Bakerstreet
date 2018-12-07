import React from 'react';

class Login extends React.Component {

	componentDidMount() {
		this.props.onDoAuthentication(this.props.redirectToAfterSuccessfulLogin);
	}

	render() {
		return (
			<h1>Redirecting to Auth0 login...</h1>
		);
	}

}

export default Login;