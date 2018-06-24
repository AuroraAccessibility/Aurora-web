import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Dashboard from './components/Dashboard'
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
	state = {
		loggedIn: true
	}
	logIn() {

	}
	render() {
		return (
			<BrowserRouter>
				<span>
					<Route path='/' component={HomePage} exact/>
					<Route path='/dashboard' component={Dashboard} exact/>
				</span>
			</BrowserRouter>
		);
	}
}

export default App
