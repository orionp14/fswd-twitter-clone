import React from 'react';
import ReactDOM from 'react-dom';
import './home.scss';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

const Home = props => (
  <div className='app'>
    <Sidebar />
    <Feed />
    <Widgets />
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div'))
  );
});
