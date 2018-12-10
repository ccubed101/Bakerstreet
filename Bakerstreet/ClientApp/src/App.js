import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import WelcomeContainer from './components/WelcomeContainer';
import CompleteListContainer from './components/CompleteListContainer';
import PartialListContainer from './components/PartialListContainer';
import Auth0CallbackContainer from './components/Auth0CallbackContainer';
import LoginContainer from './components/LoginContainer';
import LoginFailedContainer from './components/LoginFailedContainer';
import LogoutContainer from './components/LogoutContainer';
import LoginRedirectContainer from './components/LoginRedirectContainer';
import Error from './components/Error';

export default () => (
	<Layout>
		<Route exact path='/' component={WelcomeContainer} />
		<Route path='/CompleteList' component={CompleteListContainer} />
		<Route path='/PartialList' component={PartialListContainer} />
		<Route path='/Auth0Callback' component={Auth0CallbackContainer} />
		<Route path='/LoginRedirect' component={LoginRedirectContainer} />
		<Route path='/Login' component={LoginContainer} />
		<Route path='/LoginFailed' component={LoginFailedContainer} />
		<Route path='/Logout' component={LogoutContainer} />
		<Route path='/Error' component={Error} />
	 </Layout>
);
