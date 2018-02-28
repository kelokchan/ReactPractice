import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;