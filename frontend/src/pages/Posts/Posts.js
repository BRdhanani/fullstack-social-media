import React, { memo, useEffect, useState } from 'react'
import AddPost from '../../components/AddPost/AddPost'
import Posts from '../../components/Posts/Posts'
import HeaderNav from '../../components/Header/Header'
import Login from '../../components/Login/Login'
import { getState } from '../../utils'
import './Posts.scss'

function AllPosts() {
  const [login, setLogin] = useState(false)
  useEffect(() => {
    getState('token') ? setLogin(false) : setLogin(true)
  }, [getState('token')])
  return (
    <>
      <HeaderNav setLogin={() => setLogin(true)} />
      <section className="authPage-box">
        {login ? <Login /> : <AddPost />}
        <Posts />
      </section>
    </>
  )
}

export default memo(AllPosts)
