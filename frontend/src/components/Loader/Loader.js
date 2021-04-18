import React, { Component } from 'react'
import './Loader.scss'
import { Spin } from 'antd'

class Loader extends Component {
  render() {
    return (
      <div className="custom-loader">
        <Spin size={30} color={'#3D8FF8'} />
      </div>
    )
  }
}

export default Loader
