import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Modal, Form, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  MailOutlined,
  GlobalOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import { Icon } from "@ant-design/compatible";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

class User extends Component {
  state = {
    liked: false,
    ModalVisible: false,
  };

  ClickedLiked = () => {
    this.setState((State) => ({
      liked: !State.liked,
    }));
  };

  handleOk = () => {
    this.props.form.ScrollToField((err, values) => {
      if (!err) {
        this.props.updateUser(this.props.user.id, values);
        this.closeModal();
      }
    });
  };

  closeModal = () => {
    this.setState({
      ModalVisible: false,
    });
  };

  openModal = () => {
    this.setState({
      ModalVisible: true,
    });
  };

  render() {
    const { user, deleteUser } = this.props;
    const { liked, ModalVisible } = this.state;

    return (
      <Fragment>
        <Modal
          title='Basic Modal'
          visible={ModalVisible}
          onOk={this.handleOk}
          onCancel={this.closeModal}
        >
          <Form {...formItemLayout}>
            <Form.Item
              label='Name'
              name='name'
              initialValue={user.name}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Email'
              name='email'
              initialValue={user.email}
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
                {
                  type: "email",
                  message: "Invalid email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Phone'
              name='phone'
              initialValue={user.phone}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Website'
              name='website'
              initialValue={user.website}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <Card
          style={{ margin: 15 }}
          cover={
            <div className='cardHeadImage'>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                alt='Avatar'
                style={{ width: 200, height: 200 }}
              />
            </div>
          }
          actions={[
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
              onClick={this.ClickedLiked}
            >
              <Icon
                type='heart'
                style={{ color: "#FF0000", fontSize: 20 }}
                theme={liked ? "filled" : "outlined"}
              />
            </button>,
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
              onClick={this.openModal}
            >
              <EditOutlined style={{ fontSize: 18 }} />
            </button>,
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              <DeleteOutlined style={{ fontSize: 18 }} />
            </button>,
          ]}
        >
          <h3>{user.name}</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <MailOutlined style={{ fontSize: "18px" }} />
            <p style={{ marginLeft: 10 }}>{user.email}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PhoneOutlined style={{ fontSize: "18px" }} />
            <p style={{ marginLeft: 10 }}>{user.phone}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <GlobalOutlined style={{ fontSize: "18px" }} />
            <p style={{ marginLeft: 10 }}>http://{user.website}</p>
          </div>
        </Card>
      </Fragment>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default User;
