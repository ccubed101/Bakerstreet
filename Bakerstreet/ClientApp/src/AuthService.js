/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';
import CookieService from './CookieService';

export default class AuthService {

	constructor() {
		this.login = this.login.bind(this);
	}

	static instance = null;

	static getInstance() {
		if (this.instance === null) {
			this.instance = new AuthService();
		}
		return this.instance;
	}

	webAuth = new auth0.WebAuth({
		domain: "bs-ccarpi.auth0.com",
		clientID: "QFRp1YJgJckopO4SMQpSKlQjoSnutoJi",
		//redirectUri: "https://localhost:44329/Auth0Callback" works when running app via VS 2017
		//redirectUri: "http://localhost:3000/Auth0Callback" works when running app using Webpack dev server (e.g. npm start).
		redirectUri: ((location.host === 'localhost:3000') ? 'http://' : 'https://') + location.host + "/Auth0Callback",
		audience: "https://bs-ccarpi/api",
		responseType: "token id_token",
		scope: "openid"
	})

	login() {
		this.webAuth.authorize();
	}

	handleAuthentication(onSucceeded, onFailed) {

		// Where to store JWT (JSON Web Token)?  There are 2 options:
		// 1.) HTML5 Web Storage (localStorage or sessionStorage)
		// 2.) Cookies
		// The following URL has an excellent discussion about what choice to make:
		//   https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage
		// To summarize, the better choice is to use cookies.  HTML5 web storage is vulnerable
		// to XSS (Cross Site Scripting) attacks because it is accessible through JavaScript 
		// on the same domain.  Cookies, when used with the HttpOnly cookie flag, are not 
		// accessible through JavaScript, and are immune to XSS attacks.  You can also set the 
		// Secure cookie flag to guarantee the cookie is only sent over HTTPS.  Cookies are
		// vulnerable to CSRF (Cross Site Request Forgery) attacks.  But these days browsers 
		// and frameworks such as Angular make protecting against CSRF very easy.
		this.webAuth.parseHash((err, authResults) => {
			if (authResults && authResults.accessToken && authResults.idToken) {

				document.cookie = "access_token = " + authResults.accessToken;
				document.cookie = "id_token = " + authResults.idToken;

				//let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
				//document.cookie = "expires_at = " + expiresAt;

				//localStorage.setItem("access_token", authResults.accessToken);
				//localStorage.setItem("id_token", authResults.idToken);
				//localStorage.setItem("expires_at", expiresAt);

				//location.hash = "";

				onSucceeded();
			} else if (err) {
				console.log(err);
				onFailed();
			}
		})
	}

	isAuthenticated() {
		//let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
		let expiresAt = CookieService.getCookie("expires_at");
		if (expiresAt === '')
			return false
		else
			return new Date().getTime() < expiresAt;
	}

	logout(onSucceeded, onFailed) {
		CookieService.deleteAllCookies();
		onSucceeded();
	}

}