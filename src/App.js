import React from "react";
import "./App.css";
import Axios from "axios";
import User from "./components/User";
import { Col, Row, Spin } from "antd";
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

  deleteUser = (id) => {
    this.setState((State) => ({
      users: State.users.filter((user) => user.id !== id),
    }));
  };

  updateUser = (id, data) => {
    this.setState((State) => ({
      users: State.users.map((user) => {
        if (user.id === id) return { ...user, ...data };
        return user;
      }),
    }));
  };

  render() {
    if (this.state.users.length === 0) {
      return (
        <div>
          <div className='spinner'>
            <Spin
              tip='Loading...'
              style={{ marginTop: "300px" }}
              size='large'
            />
          </div>
        </div>
      );
    }
    return (
      <Row>
        {this.state.users.map((user) => (
          <Col xs={24} sm={24} md={8} lg={8} xl={6} key={user.name}>
            <User
              user={user}
              deleteUser={this.deleteUser}
              updateUser={this.updateUser}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default userProfile;
