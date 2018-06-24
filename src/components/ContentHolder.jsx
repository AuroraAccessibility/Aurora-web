import React from 'react'
import { Layout } from 'antd';
import { getContentData } from './../api/content'
const { Content } = Layout;

class ContentHolder extends React.Component {
    componentWillMount() {
        getContentData("29cxkjesi3").then(response => {
            this.setState(state => ({
                data: response
            }))
        })
    }
    render() {
        return (
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                content
            </Content>
        )
    }
}

export default ContentHolder