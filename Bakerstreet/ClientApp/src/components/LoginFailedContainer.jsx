import { connect } from 'react-redux'
import LoginFailed from './LoginFailed';

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const LoginFailedContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginFailed)

export default LoginFailedContainer;