import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import RedditCard from './RedditCard';

const RedditCards = ({ users }) => {
  return (
    <CardColumns>
      {users.map((user, i) => {
        const { login, avatar_url, html_url, id} = user;
        return (
          <RedditCard 
            key={id}
            title={login}
            src={avatar_url}
            html={html_url}
          />
        )
      })
      }
    </CardColumns>
  );
};

export default RedditCards;