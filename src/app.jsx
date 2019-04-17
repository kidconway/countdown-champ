import React, { Component } from 'react'
import Clock from './clock'
import { Form, Button } from 'react-bootstrap'
import './app.css'


// 29 days, 6 hours, 42 minutes, 12 seconds

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      deadline: "November 10, 2020",
      newDeadline: ''
    }
  }
  changeDeadline(){
    this.setState({deadline: this.state.newDeadline})
  }
  render(){

    return (
      <div className='app'>
        <div className='nav-bar'>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">Our Story</a></li>
            <li><a href="/#">Resources</a></li>
            <li><a href="/#">Careers</a></li>
          </ul>
        </div>
        <div className='app-title'>Countdown to { this.state.deadline }</div>
        <Clock deadline={ this.state.deadline }/>
        <Form className='row' inline>
          <div className="input">
            <Form.Control
              className='deadline-input'
              onChange={event => this.setState({newDeadline: event.target.value})}
              placeholder= 'Enter a new date...'
            />
            <Button variant="success" onClick={() => this.changeDeadline()}>Submit</Button>
            <div className="row">
              <Form.Text className="text-muted format">
                  Ex: November 10, 2020
              </Form.Text>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}


export default App
