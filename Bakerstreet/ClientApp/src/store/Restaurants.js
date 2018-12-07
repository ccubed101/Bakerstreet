const restaurantsHasErroredType = 'RESTAURANTS_HAS_ERRORED';
const restaurantsIsLoadingType = 'RESTAURANTS_IS_LOADING';
const restaurantsFetchDataSuccessType = 'RESTAURANTS_FETCH_DATA_SUCCESS';
const initialState = {
	restaurantsHasErrored: false,
	restaurantsIsLoading: false,
	restaurants: []
};

export const actionCreators = {

	// Redux-thunk action.
	restaurantsFetchData: (url, options) => {
		return async (dispatch) => {
			dispatch(actionCreators.restaurantsIsLoading(true));

			fetch(url, options)
				.then((response) => {
					if (!response.ok) {
						throw Error(response.statusText);
					}

					dispatch(actionCreators.restaurantsIsLoading(false));

					return response;
				})
				.then((response) => response.json())
				.then((restaurants) => dispatch(actionCreators.restaurantsFetchDataSuccess(restaurants)))
				.catch((err) => dispatch(actionCreators.restaurantsHasErrored(true)));
		};
	},

	restaurantsHasErrored: (bool) => ({ type: restaurantsHasErroredType, hasErrored: bool }),

	restaurantsIsLoading: (bool) => ({ type: restaurantsIsLoadingType, isLoading: bool }),

	restaurantsFetchDataSuccess: (restaurants) => ({ type: restaurantsFetchDataSuccessType, restaurants })
}

export const reducer = (state, action) => {
	state = state || initialState;

	switch (action.type) {
		case restaurantsHasErroredType:
			return { ...state, restaurantsHasErrored: action.hasErrored };

		case restaurantsIsLoadingType:
			return { ...state, restaurantsIsLoading: action.isLoading };

		case restaurantsFetchDataSuccessType:
			return { ...state, restaurants: action.restaurants };

		default:
			return state;
	}
};


