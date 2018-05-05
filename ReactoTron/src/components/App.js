import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import RedditCard from './RedditCard';
import Navbar from './Navbar';
import RedditCards from './RedditCards';

export default class App extends React.Component {
  state = {
    users: [],
    isFetching: false,
    disabled: false
  };

  fetchUsers = () => {
    return fetch('https://api.github.com/users')
      .then(resp => resp.json())
      .then(data => {
        return data;
      });
  };

  loadUser = () => {
    this.setState(() => ({ isFetching: true }));
    setTimeout(() => {
      this.fetchUsers().then(users => {
        this.setState(() => ({ users }));
        this.setState(() => ({ isFetching: false, disabled: true }));
      });
    }, 1000);
  };

  componentDidMount() {}

  render() {
    const { isFetching, users, disabled } = this.state;

    return (
      <Container>
        <Navbar />
        <Row>
          <Col>
            {!isFetching && (
              <Button
                color="primary"
                onClick={this.loadUser}
                disabled={disabled}
              >
                Load Users
              </Button>
            )}
            {isFetching && <p>Loading</p>}
          </Col>
        </Row>
        <Row>
          <Col>{users && <RedditCards users={users} />}</Col>
        </Row>
      </Container>
    );
  }
}
