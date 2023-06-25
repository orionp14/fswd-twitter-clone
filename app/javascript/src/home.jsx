import React from 'react';
import ReactDOM from 'react-dom';
import './home.scss';
import Sidebar from './Sidebar';

const Home = props => (
  <div>
    <Sidebar />
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div'))
  );
});
