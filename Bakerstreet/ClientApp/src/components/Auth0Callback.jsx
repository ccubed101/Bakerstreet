import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

// See aritcle titled "Programmatically navigate with React Router" at
// https://tylermcginnis.com/react-router-programmatically-navigate/
// for instruction of how to use 'react-router' to programmatically 
// navigate within React app.

class Auth0Callback extends React.Component {

	// Life-cycle hooks.

	componentDidMount() {
		this.props.onDoPostAuthenticationProcessing();
	}

	render() {
		if (this.props.isAuthenticated === true)
			return <Redirect to={this.getRedirect()} />;
		else
			return <h1>Redirecting...</h1>;
	}

	getRedirect() {
		let redirect = '';
		if (this.props.redirectToAfterSuccessfulLogin != null)
			redirect = this.props.redirectToAfterSuccessfulLogin;
		return redirect;
	}

}

export default withRouter(Auth0Callback);