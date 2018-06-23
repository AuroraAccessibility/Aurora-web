import React, { Component } from 'react';
import { Card } from 'antd'
import UploadForm from './components/UploadForm'
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="upload-container">
				<Card style={{ width: 300 }} className="upload-card">
					<UploadForm />
				</Card>
			</div>
		);
	}
}

export default App;
