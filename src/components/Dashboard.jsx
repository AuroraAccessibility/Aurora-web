import React from 'react'
import SideBar from './SideBar'
import ContentHolder from './ContentHolder'
import { getUserData, getContentData } from './../api/content'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Dashboard extends React.Component {
    state = {
        courses: {}
    }
    componentWillMount() {
        getUserData('devel123').then(response => {
            const firstCourse = Object.keys(response)[0]
            const firstSection = response[firstCourse][Object.keys(response[firstCourse])[0]]
            this.updateContent(firstSection)
            this.setState(state => ({
                courses: response,
                currContentId: firstSection
            }))
        })
    }
    updateContent = (id) => {
        if (id !== this.state.currContentId) {
            getContentData(id).then(response => {
                this.setState(state => ({
                    currContentId: id,
                    currContent: response
                }))
            })
            
        }
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
                        <SideBar courses={this.state.courses} handleClick={this.updateContent} />
                        <ContentHolder content={this.state.currContent} />
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