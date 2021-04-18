import { Layout, Menu, Button } from 'antd'

const { Header } = Layout

function HeaderNav({ setLogin }) {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Button style={{ left: '90%' }} onClick={() => setLogin(true)}>
          Login
        </Button>
      </Menu>
    </Header>
  )
}

export default HeaderNav
