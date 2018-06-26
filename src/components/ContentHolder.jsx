import React from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

class ContentHolder extends React.Component {
    componentWillMount() {

    }
    componentDidUpdate() {

    }
    render() {
        return (
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                {this.props.content}
            </Content>
        )
    }
}

export default ContentHolder