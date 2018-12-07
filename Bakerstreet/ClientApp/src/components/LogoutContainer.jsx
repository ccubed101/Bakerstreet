import { connect } from 'react-redux'
import { actionCreators } from '../store/Authentication'
import Logout from './Logout';
import AuthService from '../AuthService';

const mapStateToProps = state => {
	return {
		isAuthenticated: state.authentication.isAuthenticated
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDoLogout: () => {
			let authService = AuthService.getInstance();
			authService.logout(
				() => {
					dispatch(actionCreators.loggedOut());
				},
				() => {
				}
			);
		}
	}
}

const LogoutContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Logout)

export default LogoutContainer;