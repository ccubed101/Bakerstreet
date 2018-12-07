// This is a "work-around" component.  In order to deliver Redux state to the 
// NavMenu component a standard container component was created to wrap the NavMenu
// component.  However wrapping the NavMenu component broke the CSS that the
// NavMenu depends on.  So instead of wrapping the NavMenu component this component
// and the CompleteListItemText component are used to supply Redux state to the 
// specific place where it is required.

import { connect } from 'react-redux'
import CompleteListItemText from './CompleteListItemText';

const mapStateToProps = state => {
	return {
		isAuthenticated: state.authentication.isAuthenticated
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const CompleteListItemTextContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CompleteListItemText)

export default  CompleteListItemTextContainer;