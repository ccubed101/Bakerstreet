import { connect } from 'react-redux'
import LoginRedirect from './LoginRedirect';
import { actionCreators as authenticationActionCreators } from '../store/Authentication'

const mapStateToProps = state => {
	return {
		isAuthenticated: state.authentication.isAuthenticated
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setRedirectToAfterSuccessfulLogin: (redirectToAfterSuccessfulLogin) => dispatch(authenticationActionCreators.setRedirectToAfterSuccessfulLogin(redirectToAfterSuccessfulLogin))
	};
};

const LoginRedirectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginRedirect)

export default LoginRedirectContainer;