import React from "react";
import { Card } from 'antd'
import { GlobalOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
class User extends React.Component {




  render() {
    const {user} = this.props;
    return (
      <React.Fragment>
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
            <GlobalOutlined type='global' style={{ fontSize: "18px" }} />
            <p style={{ marginLeft: 10 }}>https://{user.website}</p>
          </div>
        </Card>
      </React.Fragment>
    );
  }
}
export default User;
