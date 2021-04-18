import React, { memo, useState, useEffect } from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { ERROR } from '../../config/constants'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { createPosts, getPosts, updatePost } from '../../redux/posts/actions'
import './AddPost.scss'

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    //const data=(reader.result).split(',')[1]
    callback(reader.result)
  })
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

function AddPost() {
  const { currentPost } = useSelector((state) => state.posts)
  const [imageUrl, setImageUrl] = useState(null)
  const [loading, setloading] = useState(false)
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    const { title, message, creator, tags } = values
    let payload = {
      title,
      message,
      creator,
      tags,
      selectedFile: imageUrl,
      //name
    }
    currentPost?._id
      ? await dispatch(
          updatePost({
            id: currentPost?._id,
            ...payload,
          })
        )
      : await dispatch(createPosts(payload))
    await dispatch(getPosts())
  }
  const handleChange = async (info) => {
    if (info.file.status === 'uploading') {
      setloading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl)
        setloading(false)
      })
    }
  }
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok')
    }, 0)
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Add Logo</div>
    </div>
  )
  useEffect(() => {
    currentPost?._id &&
      form.setFieldsValue({
        creator: currentPost?.creator,
        title: currentPost?.title,
        message: currentPost?.message,
        tags: currentPost?.tags,
        img: currentPost?.selectedFile,
      })
    currentPost?._id && setImageUrl(currentPost?.selectedFile)
  }, [currentPost])
  return (
    <div className="postPage-box__form">
      <div className="postPage-box__postform">
        <div className="postPage-box__form__title">
          <h4>Add Post</h4>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name="creator"
            label="Author"
            rules={[{ required: true, message: ERROR.postRequired('Author') }]}
          >
            <Input size={'large'} placeholder="Author" />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[
              { required: true, message: ERROR.postRequired('Post title') },
            ]}
          >
            <Input placeholder="Title" size={'large'} />
          </Form.Item>
          <Form.Item
            name="message"
            label="Description"
            rules={[
              {
                required: true,
                message: ERROR.postRequired('Post description'),
              },
            ]}
          >
            <Input placeholder="Description" size={'large'} />
          </Form.Item>
          <Form.Item
            name="tags"
            label="Tag"
            rules={[
              {
                required: true,
                message: ERROR.postRequired('Post tag'),
              },
            ]}
          >
            <Input placeholder="Tag" size={'large'} />
          </Form.Item>
          <Form.Item
            name="img"
            label="Image"
            rules={[
              {
                required: true,
                message: ERROR.postRequired('Post Image'),
              },
            ]}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
              customRequest={dummyRequest}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <div className="btn-grp">
            <Button type="primary" size={'large'} htmlType="submit">
              Submit
            </Button>
            <Form.Item>
              <Button type="primary" size={'large'}>
                Clear
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default memo(AddPost)
