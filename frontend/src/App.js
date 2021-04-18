import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { history } from './config/history'
import { renderRoutes } from './config/routes'
import { Switch, Route, Router } from 'react-router-dom'
import { Spin } from 'antd'
import './App.less'
import './common.scss'
//import 'antd/dist/antd.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Suspense
          fallback={
            <div className="loader">
              <Spin size="large" />
            </div>
          }
        >
          <Router history={history}>
            <Switch>
              {renderRoutes.map(([key, route]) => (
                <Route
                  key={key}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </Router>
        </Suspense>
      </div>
    </Provider>
  )
}

export default App
