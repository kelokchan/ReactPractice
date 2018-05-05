import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const defaultProps = {
  title: 'Card Title',
  subtitle: 'Card Subtitle',
  text:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  src:
    'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
  alt: 'none',
  onClick: undefined
};

class RedditCard extends React.Component {
  state = {
    user: {
      login: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: false,
      name: '',
      company: null,
      blog: '',
      location: '',
      email: null,
      hireable: null,
      bio: null,
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '',
      updated_at: ''
    }
  };

  constructor(props) {
    super(props);
  }

  fetchUserData = () => {
    return fetch('https://api.github.com/users/' + this.props.title)
      .then(res => res.json())
      .then(user => {
        return user;
      });
  };

  componentDidMount = () => {
    this.fetchUserData().then(user => {
      this.setState({ user });
    });
  };

  render() {
    const { user } = this.state;
    const { public_repos, followers } = user;

    const { title, html, src, alt, onClick } = this.props;
    return (
      <Card body outline color="secondary">
        <CardImg top src={src} alt={alt} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>Public Repos: {public_repos}</CardSubtitle>
          <CardText>Followers: {followers}</CardText>
          <Button color="danger" href={html} target="_blank">
            Visit
          </Button>
        </CardBody>
      </Card>
    );
  }
}

RedditCard.defaultProps = defaultProps;

export default RedditCard;
