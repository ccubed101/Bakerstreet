﻿import React from 'react';
import { Redirect } from 'react-router-dom';
import CompleteListContainer from './CompleteListContainer';

class LoginRedirect extends React.Component {

	componentDidMount() {
		this.props.setRedirectToAfterSuccessfulLogin('LoginRedirect');
	}

	render() {
		// Enforce login requirement.
		if (this.props.isAuthenticated !== true) {
			return (
				<Redirect to={'/Login'} />
			);
		}

		else
			return <CompleteListContainer/>
	}
}

export default LoginRedirect;