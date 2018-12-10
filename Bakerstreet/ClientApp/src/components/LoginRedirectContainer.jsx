import { connect } from 'react-redux'
import LoginRedirect from './LoginRedirect';

const mapStateToProps = state => {
	return {
		isAuthenticated: state.authentication.isAuthenticated
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

const LoginRedirectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginRedirect)

export default LoginRedirectContainer;