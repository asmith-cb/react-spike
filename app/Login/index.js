// Index files should export Higher Order Components,
// import the presentational components from this dir
import React from 'react';
import Login from './login';

const HOC = Component => class extends React.Component {
	render() {
		return <Component { ...this.state } { ...this.props } />
	}
}

export default HOC(Login);