'use strict';

// To execute this server open a command window, navigate to directory that contains this file and type 'node server'.

// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const checkJwt = jwt({
	// Dynamically provide a signing key
	// based on the kid in the header and 
	// the signing keys provided by the JWKS endpoint.
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://bs-ccarpi.auth0.com/.well-known/jwks.json`
	}),

	// Validate the audience and the issuer.
	audience: 'https://bs-ccarpi/api',
	issuer: `https://bs-ccarpi.auth0.com/`,
	algorithms: ['RS256']
});


// Private route
app.get('/api/restaurants/restaurants', checkJwt, (req, res) => {
	res.json(restaurants);
})

// Public route
app.get('/api/restaurants/restaurantsPartial', (req, res) => {
	res.json(restaurants.filter((restaurant) => { return (restaurant.forAuthenticatedUsersOnly === false); }));
})

app.listen(3001);
console.log('Serving restaurants on localhost:3001');

var restaurants = [
	{
		id: 1,
		name: "Gloria's Latin Cuisine",
		address: "Firewheel Mall, 360 Coneflower Dr, Garland, TX 75040",
		foodType: "Salvadoran and Tex-mex",
		forAuthenticatedUsersOnly: false,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "11AM–9PM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "11AM–10PM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "11AM–10PM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "11AM–10PM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "11AM–10:30PM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "11AM–10:30PM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "11AM–9PM"
			},
		]
	},
	{
		id: 2,
		name: "Chestnut Cafe and Restaurant",
		address: "605 Town Square Blvd, Garland, TX 75040",
		foodType: "Comfort Food",
		forAuthenticatedUsersOnly: true,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "10AM–7PM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "10AM–7PM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "10AM–7PM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "10AM–7PM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "10AM–7PM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "10AM–7PM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "10AM–7PM"
			},
		]
	},
	{
		id: 3,
		name: "Fish City Grill",
		address: "445 Coneflower Dr, Garland, TX 75040",
		foodType: "Southern Style Seafood",
		forAuthenticatedUsersOnly: false,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "11AM–10PM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "11AM–10PM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "11AM–10PM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "11AM–10PM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "11AM–11PM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "11AM–11PM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "11AM–9PM"
			},
		]
	},
	{
		id: 4,
		name: "Houlihan's",
		address: "Garland Houlihan’s, 660 Town Center Blvd, Garland, TX 75040",
		foodType: "Casual Fare",
		forAuthenticatedUsersOnly: false,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "11AM–11PM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "11AM–11PM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "11AM–11PM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "11AM–11PM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "11AM–12AM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "11AM–12AM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "11AM–10PM"
			},
		]
	},
	{
		id: 5,
		name: "Genghis Grill",
		address: "215 Coneflower Dr, Garland, TX 75040",
		foodType: "Mongolian Stir-fry",
		forAuthenticatedUsersOnly: false,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "11AM–9PM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "11AM–9PM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "11AM–9PM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "11AM–10PM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "11AM–11PM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "11AM–11PM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "11AM–9PM"
			},
		]
	},
	{
		id: 6,
		name: "In-N-Out Burger",
		address: "150 Town Center Blvd, Garland, TX 75040",
		foodType: "Fast Food",
		forAuthenticatedUsersOnly: true,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "10:30AM–1AM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "10:30AM–1AM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "10:30AM–1AM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "10:30AM–1AM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "10:30AM–1:30AM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "10:30AM–1:30AM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "10:30AM–1AM"
			},
		]
	},
	{
		id: 7,
		name: "Razzoo's Cajun Cafe",
		address: "Firewheel Town Center, 310 Coneflower Dr, Garland, TX 75040",
		foodType: "New Orleans Inspired Fare",
		forAuthenticatedUsersOnly: true,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "11AM–11PM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "11AM–11PM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "11AM–11PM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "11AM–11PM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "11AM–12AM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "11AM–12AM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "11AM–11PM"
			},
		]
	},
	{
		id: 8,
		name: "Foxiis Restaurant and Grill",
		address: "365 Coneflower Dr, Garland, TX 75040",
		foodType: "Comfort Food",
		forAuthenticatedUsersOnly: false,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "11AM–11PM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "11AM–11PM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "11AM–11PM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "11AM–11PM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "11AM–12AM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "11AM–12AM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "11AM–10PM"
			},
		]
	},
	{
		id: 9,
		name: "Pete's Burgers, Wings and Drinks",
		address: "695 Town Square Blvd, Garland, TX 75040",
		foodType: "Burgers, pizza & other American grill favorites.",
		forAuthenticatedUsersOnly: false,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "11AM–12AM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "11AM–12AM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "11AM–1AM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "11AM–1AM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "11AM–2AM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "11AM–2AM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "11AM–12AM"
			},
		]
	},
	{
		id: 10,
		name: "Ichi Sushi Grill and Lounge",
		address: "690 Beebalm Ln, Garland, TX 75040",
		foodType: "Sushi",
		forAuthenticatedUsersOnly: true,
		schedule: [
			{
				id: 1,
				day: "Monday",
				hours: "11AM–9PM"
			},
			{
				id: 2,
				day: "Tuesday",
				hours: "11AM–9PM"
			},
			{
				id: 3,
				day: "Wednesday",
				hours: "11AM–9PM"
			},
			{
				id: 4,
				day: "Thursday",
				hours: "11AM–9PM"
			},
			{
				id: 5,
				day: "Friday",
				hours: "11AM–10PM"
			},
			{
				id: 6,
				day: "Saturday",
				hours: "11AM–10PM"
			},
			{
				id: 7,
				day: "Sunday",
				hours: "Closed"
			},
		]
	}
];
