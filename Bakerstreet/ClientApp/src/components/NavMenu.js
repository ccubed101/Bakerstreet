import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import LoginButtonContainer from './LoginButtonContainer';
import CompleteListItemTextContainer from './CompleteListItemTextContainer'

class NavMenu extends React.Component {

	render() {
		return (
			<div>
				<Navbar inverse fixedTop fluid collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to={'/'}>Bakerstreet</Link>
							<LoginButtonContainer />
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<LinkContainer to={'/'} exact>
								<NavItem>
									<Glyphicon glyph='home' /> Welcome!
								</NavItem>
							</LinkContainer>
							<LinkContainer to={'/PartialList'}>
								<NavItem>
									<Glyphicon glyph='th-list' /> The partial list
								</NavItem>
							</LinkContainer>
							<LinkContainer to='/CompleteList'>
								<NavItem>
									<Glyphicon glyph='th-list' />
									<CompleteListItemTextContainer/>
								</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}

}

export default NavMenu;
