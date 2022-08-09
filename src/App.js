import axios from 'axios'
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Nav from './Components/Nav'
import SignIn from './Components/SignIn'
import './app.css'

class App extends Component {
  state = {}
  componentDidMount = () => {
    axios.get('user').then(
      res => {
        this.setState({
          user: res.data
        })
      },
      err => {
        console.log(err)
      }
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <Nav user={this.state.user} />
          <Routes>
            <Route path='/' element={<Home user={this.state.user} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<SignIn />} />
          </Routes>
        </div>

      </BrowserRouter>
    )
  }
}

export default App