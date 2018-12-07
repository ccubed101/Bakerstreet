import { connect } from 'react-redux'
import LoginButton from './LoginButton';

const mapStateToProps = state => {
	return {
		isAuthenticated: state.authentication.isAuthenticated
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const LoginButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginButton)

export default LoginButtonContainer;