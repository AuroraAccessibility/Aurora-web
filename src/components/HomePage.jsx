import React from 'react'
import { Card } from 'antd'
import UploadForm from './UploadForm'

class HomePage extends React.Component {
    render() {
        return (
            <div className="upload-container">
                <Card style={{ width: 300 }} className="upload-card">
                    <h1>Authentication</h1>
                    <UploadForm />
                </Card>
            </div>
        )
    }
}

export default HomePage