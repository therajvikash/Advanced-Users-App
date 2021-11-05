import React from "react";
import Axios from "axios";
import UserDetails from "./UserDetails";
import { Col, Row, Spin } from 'antd'
class userProfile extends React.Component {
  state = {
    users: [],
    errorMsg: null,
  };

  componentDidMount() {
    let dataURL = "https://jsonplaceholder.typicode.com/users";
    Axios.get(dataURL)
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          errorMessage: err,
        });
      });
  }
  render() {
    if (this.state.users.length === 0) {
      return (
        <div>
          <div className="spinner">
            <Spin tip="Loading..."  style={{marginTop:"300px"}} size="large"/>
          </div>
        </div>
      );
    }
    return (
      <Row>
        {this.state.users.map((user) => (
          <Col xs={24} sm={24} md={8} lg={8} xl={6} key={user.name}>
            <UserDetails
              user={user}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default userProfile;
