const loggedInType = 'LOGGED_IN';
const loggedOutType = 'LOGGED_OUT';
const setRedirectToAfterSuccessfulLoginType = 'SET_REDIRECT_TO_AFTER_SUCCESSFUL_LOGIN';
const initialState = {
	isAuthenticated: false,
	redirectToAfterSuccessfulLogin: '/'
};

export const actionCreators = {
	loggedIn: () => ({ type: loggedInType }),
	loggedOut: () => ({ type: loggedOutType }),
	setRedirectToAfterSuccessfulLogin: (redirectToAfterSuccessfulLogin) => ({ type: setRedirectToAfterSuccessfulLoginType, redirectToAfterSuccessfulLogin: redirectToAfterSuccessfulLogin })
};

export const reducer = (state, action) => {
	state = state || initialState;

	if (action.type === loggedInType) {
		return { ...state, isAuthenticated: true };
	}

	if (action.type === loggedOutType) {
		return { ...state, isAuthenticated: false };
	}

	if (action.type === setRedirectToAfterSuccessfulLoginType) {
		return { ...state, redirectToAfterSuccessfulLogin: action.redirectToAfterSuccessfulLogin };
	}

	return state;
};
