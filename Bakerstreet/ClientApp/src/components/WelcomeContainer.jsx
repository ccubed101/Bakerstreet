import { connect } from 'react-redux'
import { actionCreators as authenticationActionCreators } from '../store/Authentication'
import Welcome from './Welcome';

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setRedirectToAfterSuccessfulLogin: (redirectToAfterSuccessfulLogin) => dispatch(authenticationActionCreators.setRedirectToAfterSuccessfulLogin(redirectToAfterSuccessfulLogin))
	}
}

const WelcomeContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome)

export default WelcomeContainer;