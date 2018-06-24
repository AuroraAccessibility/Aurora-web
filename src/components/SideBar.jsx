import React from 'react'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

class SideBar extends React.Component {
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['assignments']}
                    defaultOpenKeys={['cs135']}
                    style={{ height: '100%' }}
                > 
                    {Object.keys(this.props.courses).map(course => (
                        <SubMenu key={course} title={<span><Icon type="user" />{course}</span>}>
                        {Object.keys(this.props.courses[course]).map(type => (
                            <Menu.Item key={type}>{type}</Menu.Item>
                        ))}
                        </SubMenu>
                    ))}
                </Menu>
            </Sider>
        )
    }
}

export default SideBar