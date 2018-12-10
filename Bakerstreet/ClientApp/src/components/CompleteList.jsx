import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Redirect } from 'react-router-dom';
import CookieService from '../CookieService';

class CompleteList extends React.Component {

	componentDidMount() {

		this.props.setRedirectToAfterSuccessfulLogin('CompleteList');
		let options =
			{
				headers:
				{
					Authorization: 'Bearer ' + CookieService.getCookie('access_token')
				}
			};
		console.log(options);
		this.props.fetchData('api/Restaurants/Restaurants', options);
	}

	render() {

		// In case of error.
		if (this.props.restaurantsHasErrored) {
			this.props.setIsLoading(false);
			this.props.setHasErrored(false);
			return <Redirect to={'/Error'} />;
		}

		// Display while waiting for data from server.
		if (this.props.restaurantsIsLoading) {
			return <h1>Loading…</h1>;
		}

		return (
			<React.Fragment>
				<div className="banner">
					Bakerstreet Restaurant Listings
				</div>
				<div className="separator">
				</div>
				<div>
					{this.props.restaurants.map((restaurant) => (
						<ExpansionPanel key={restaurant.id}>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<h1 className="restaurantName">{restaurant.name}</h1>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails style={{ display: 'block' }}>
								<div className="restaurantAddress">
									<span className="sectionHeader">Address:</span>
									&nbsp;
									{restaurant.address}
								</div>
								<div className="restaurantFoodType">
									<span className="sectionHeader">Type of Food:</span>
									&nbsp;
									{restaurant.foodType}
								</div>
								<div className="restaurantSchedule">
									<span className="sectionHeader">Schedule:</span>
								</div>
								<div>
									<table className="scheduleTable">
										<tbody>
											<tr>
												<th className="scheduleTableCell">
													Day
												</th>
												<th>
													Hours
												</th>
											</tr>
											{restaurant.schedule.map((scheduleItem) => (
												<tr key={scheduleItem.id}>
													<td className="scheduleTableCell">
														{scheduleItem.day}
													</td>
													<td>
														{scheduleItem.hours}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					))}
				</div>
			</React.Fragment>
		);
	}

}

export default CompleteList;