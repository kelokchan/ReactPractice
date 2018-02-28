import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => (
  <div>
    <h1>A Thing I've done</h1>
    <p>This is from portfolio item with id of {props.match.params.id}</p>
    <Link to="/portfolio">Go back</Link>
  </div>
);

export default PortfolioPage;