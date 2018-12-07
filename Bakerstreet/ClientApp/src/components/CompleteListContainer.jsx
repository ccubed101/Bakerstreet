import { connect } from 'react-redux'
import { actionCreators as restaurantsActionCreators } from '../store/Restaurants'
import { actionCreators as authenticationActionCreators } from '../store/Authentication'
import CompleteList from './CompleteList';

const mapStateToProps = state => {
	return {
		restaurantsHasErrored: state.restaurants.restaurantsHasErrored,
		restaurantsIsLoading: state.restaurants.restaurantsIsLoading,
		restaurants: state.restaurants.restaurants,
		isAuthenticated: state.authentication.isAuthenticated
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url, options) => dispatch(restaurantsActionCreators.restaurantsFetchData(url, options)),
		setIsLoading: (bool) => dispatch(restaurantsActionCreators.restaurantsIsLoading(bool)),
		setHasErrored: (bool) => dispatch(restaurantsActionCreators.restaurantsHasErrored(bool)),
		setRedirectToAfterSuccessfulLogin: (redirectToAfterSuccessfulLogin) => dispatch(authenticationActionCreators.setRedirectToAfterSuccessfulLogin(redirectToAfterSuccessfulLogin))
	};
};

const CompleteListtContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CompleteList)

export default CompleteListtContainer;