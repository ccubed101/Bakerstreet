import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Redirect } from 'react-router-dom';

class PartialList extends React.Component {

	// Life-cycle hooks

	componentDidMount() {
		this.props.setRedirectToAfterSuccessfulLogin('PartialList');
		this.props.fetchData('api/Restaurants/RestaurantsPartial');
	}

	componentWillReceiveProps(nextProps) {
	}

	render() {

		// In case of error.
		if (this.props.restaurantsHasErrored) {
			//alert(this.props.restaurantsHasErrored.toString());
			//this.props.setIsLoading(false);
			//this.props.setHasErrored(false);
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
							</ExpansionPanelDetails>
						</ExpansionPanel>
					))}
				</div>
			</React.Fragment>
		);
	}

}

export default PartialList;