import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {

	componentDidMount() {
		this.props.setRedirectToAfterSuccessfulLogin('');
	}

	render() {
		return (
			<React.Fragment>
				<div className="welcomePageSubText">
					Welcome to
			</div>
				<div className="welcomePageTitle">
					The Bakerstreet Restaurant Listings
			</div>
				<div style={{ textAlign: 'center' }}>
					<ul style={{ display: 'inline-block' }}>
						<li className="welcomePageListItem">
							See the partial list <Link to='/PartialList'>here.</Link>
						</li>
						<li className="welcomePageListItem">
							See the complete list with hours of operation <Link to="/CompleteList">here</Link>
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default Welcome;
