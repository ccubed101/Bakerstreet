import { connect } from 'react-redux'
import { actionCreators } from '../store/Authentication'
import Auth0Callback from './Auth0Callback';
//import { bindActionCreators } from 'redux';
import AuthService from '../AuthService';
import CookieService from '../CookieService';

const mapStateToProps = state => {
	return {
		isAuthenticated: state.authentication.isAuthenticated,
		redirectToAfterSuccessfulLogin: state.authentication.redirectToAfterSuccessfulLogin
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDoPostAuthenticationProcessing: () => {
			
			let authService = AuthService.getInstance();
			authService.handleAuthentication(
				// onSucceeded()
				() => {

					const cookieName = 'redirectToAfterSuccessfulLogin';
					let redirectToAfterSuccessfulLogin = CookieService.getCookie(cookieName);
					document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
					if (redirectToAfterSuccessfulLogin === '')
						dispatch(actionCreators.setRedirectToAfterSuccessfulLogin(null));
					else {
						dispatch(actionCreators.setRedirectToAfterSuccessfulLogin(redirectToAfterSuccessfulLogin));
					}

					dispatch(actionCreators.loggedIn());
				},
				// onFailed()
				() => {
					console.log('onFailed');
				}
			);
		},
	}
}

const Auth0CallbackContainer = connect(
	mapStateToProps,
	mapDispatchToProps
	//dispatch => bindActionCreators(actionCreators, dispatch)
)(Auth0Callback)

export default Auth0CallbackContainer;