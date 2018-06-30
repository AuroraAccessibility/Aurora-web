import React from 'react'
import { Layout } from 'antd';
import ContentCard from './ContentCard'
const { Content } = Layout;


class ContentHolder extends React.Component {
    componentWillMount() {

    }
    componentDidUpdate() {

    }
    render() {
        return (
            <Content style={{ padding: '0 24px', minHeight: 0 }}>
                {this.props.isLoaded ? null :'LOADING...'}
                {this.props.content}
                <ContentCard />
            </Content>
        )
    }
}

export default ContentHolder