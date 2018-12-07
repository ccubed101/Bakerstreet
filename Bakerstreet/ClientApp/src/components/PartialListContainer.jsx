import { connect } from 'react-redux'
import { actionCreators as restaurantsActionCreators } from '../store/Restaurants'
import { actionCreators as authenticationActionCreators } from '../store/Authentication'
import PartialList from './PartialList';
//import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
	return {
		restaurantsHasErrored: state.restaurants.restaurantsHasErrored,
		restaurantsIsLoading: state.restaurants.restaurantsIsLoading,
		restaurants: state.restaurants.restaurants
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchData: (url) => dispatch(restaurantsActionCreators.restaurantsFetchData(url)),
		setIsLoading: (bool) => dispatch(restaurantsActionCreators.restaurantsIsLoading(bool)),
		setHasErrored: (bool) => dispatch(restaurantsActionCreators.restaurantsHasErrored(bool)),
		setRedirectToAfterSuccessfulLogin: (redirectToAfterSuccessfulLogin) => dispatch(authenticationActionCreators.setRedirectToAfterSuccessfulLogin(redirectToAfterSuccessfulLogin))
	}
}

const PartialListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
	//dispatch => bindActionCreators(actionCreators, dispatch)
)(PartialList)

export default PartialListContainer;