import React, { memo } from 'react'
import { Card, Avatar, Skeleton } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  LikeOutlined,
  LikeFilled,
} from '@ant-design/icons'
import './Post.scss'
import { setCurrentPost, likePost } from '../../redux/posts/actions'
import { useDispatch } from 'react-redux'

const { Meta } = Card

function Post(props) {
  const { post } = props
  const dispatch = useDispatch()
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={post?.selectedFile} />}
      actions={[
        post?.likeCount > 0 ? (
          <LikeFilled
            key="like"
            onClick={() => dispatch(likePost(post?._id))}
          />
        ) : (
          <LikeOutlined
            key="like"
            onClick={() => dispatch(likePost(post?._id))}
          />
        ),
        <EditOutlined
          key="edit"
          onClick={() => dispatch(setCurrentPost(post))}
        />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <Skeleton loading={post?.title ? false : true} avatar active>
        <Meta title={post?.title} description={post?.message} />
        <div className="additional">
          <p>
            Author: <span className="quantity">{post?.creator}</span>
          </p>
        </div>
      </Skeleton>
    </Card>
  )
}

export default memo(Post)
