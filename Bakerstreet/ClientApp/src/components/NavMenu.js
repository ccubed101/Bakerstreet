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
							<Link style={{ color: 'white', fontSize: '1.5em' }} to={'/'}>Bakerstreet</Link>
							<LoginButtonContainer/>
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
									<Glyphicon glyph='th-list' /> The public partial list
								</NavItem>
							</LinkContainer>
							<LinkContainer to={'/CompleteList'}>
								<NavItem>
									<Glyphicon glyph='th-list' /> The private complete list
								</NavItem>
							</LinkContainer>
							<LinkContainer to='/LoginRedirect'>
								<NavItem>
									<Glyphicon glyph='th-list' /> The complete list with login redirect.
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
