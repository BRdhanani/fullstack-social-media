import React, { memo, useEffect } from 'react'
import Post from '../Post/Post'
import { Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/posts/actions'
import Loader from '../Loader/Loader'
import './Posts.scss'

function Posts() {
  const dispatch = useDispatch()
  const { loading, posts } = useSelector((state) => state.posts)
  useEffect(() => {
    ;(async () => {
      await dispatch(getPosts())
    })()
  }, [])

  return (
    <div className="posts-list__banner">
      <Row gutter={16}>
        {loading && <Loader />}
        {posts?.map((post) => (
          <Col span={12}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default memo(Posts)
