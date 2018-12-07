// This is a "work-around" component.  In order to deliver Redux state to the 
// NavMenu component a standard container component was created to wrap the NavMenu
// component.  However wrapping the NavMenu component broke the CSS that the
// NavMenu depends on.  So instead of wrapping the NavMenu component this component
// and the CompleteListItemTextContainer component are used to supply Redux state 
// to the specific place where it is required.

import React from 'react';

class CompleteListItemText extends React.Component {

	render() {

		return <span>The complete list &nbsp; { (this.props.isAuthenticated !== true) ? '(requires login)' : '' }</span>;
	}

}

export default CompleteListItemText;