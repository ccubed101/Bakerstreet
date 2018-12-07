import { connect } from 'react-redux'
import Login from './Login';
import AuthService from '../AuthService';

const mapStateToProps = state => {
	return {
		isAuthenticated: state.authentication.isAuthenticated,
		redirectToAfterSuccessfulLogin: state.authentication.redirectToAfterSuccessfulLogin
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDoAuthentication: (redirectToAfterSuccessfulLogin) => {

			if (redirectToAfterSuccessfulLogin != undefined)
				document.cookie = 'redirectToAfterSuccessfulLogin=' + redirectToAfterSuccessfulLogin;

			let authService = AuthService.getInstance();
			authService.login();
		}
	}
}

const LoginContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)

export default LoginContainer;