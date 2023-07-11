import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './profile';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Profile />,
    document.body.appendChild(document.createElement('div')),
  )
})