// Write your code here
import {Component} from 'react'

import Message from './components/Message'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="user-login-app">
        <div className="bg-container">
          <button className="button">Login</button>
        </div>
      </div>
    )
  }
}

export default Home
