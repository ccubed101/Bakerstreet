import React from 'react';
import { Link } from 'react-router-dom';

class LoginButton extends React.Component {

	render() {
		return (
			<Link to={this.getLinkTo()}>
				<button className="badge btn btn-primary login-button">{this.getButtonText()}</button>
			</Link>
		);
	}

	getLinkTo() {
		let linkTo = '/Login';
		if (this.props.isAuthenticated === true)
			linkTo = '/Logout';
		return linkTo
	}

	getButtonText() {
		let text = 'Login';
		if (this.props.isAuthenticated === true)
			text = "Logout";
		return text;
	}
}

export default LoginButton;