import { Button, Form, Input } from 'antd'
import { ERROR } from '../../config/constants'
import { Link, withRouter } from 'react-router-dom'

function Signup() {
  const onFinish = async (values) => {}
  return (
    <div className="postPage-box__form">
      <div className="postPage-box__postform">
        <div className="postPage-box__form__title">
          <h4>Login</h4>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: false }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                type: 'email',
                message: ERROR.postRequired('Valid email'),
              },
              {
                required: true,
                message: ERROR.postRequired('Email'),
              },
            ]}
          >
            <Input size="large" placeholder="Enter Email Address here" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: ERROR.postRequired('Password') },
            ]}
          >
            <Input.Password size="large" placeholder="Enter Password here" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
            <p className="Signup_link">
              Don’t have an account?{' '}
              <Link to={'/signup'} activeClassName="active">
                Sign Up
              </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Signup
