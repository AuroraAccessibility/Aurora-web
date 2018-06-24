import React from 'react'
import SideBar from './SideBar'
import ContentHolder from './ContentHolder'
import { getUserData } from './../api/content'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Dashboard extends React.Component {
    state = {
        courses: {}
    }
    componentWillMount() {
        getUserData('devel123').then(response => {
            this.setState(state => ({
                courses: response
            }))
            console.log(this.state.courses)
        })
    }
    updateContent() {

    }
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Dashboard</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Aurora</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <SideBar courses={this.state.courses} />
                        <ContentHolder />
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    AuroraAccessibility ©2018
                </Footer>
            </Layout>
        )
    }
}

export default Dashboard