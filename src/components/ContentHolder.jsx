import React from 'react'
import { Layout } from 'antd';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;
const { Content } = Layout;

class ContentHolder extends React.Component {
    componentWillMount() {

    }
    componentDidUpdate() {

    }
    render() {
        return (
            <Content style={{ padding: '0 24px', minHeight: 0 }}>
                {this.props.content}
            </Content>
        )
    }
}

export default ContentHolder