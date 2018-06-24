import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state = {
    loggedIn: false
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState(state => ({
          loggedIn: true
        }))
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    if (this.state.loggedIn) return <Redirect to='/dashboard' />
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {this.state.loggedIn}
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input the Password' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem className="form-buttons">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(NormalLoginForm);
