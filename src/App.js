import React from 'react';
import './App.css';

class authorization extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: Math.floor(Math.random()*20),
      ifAuth: false,
      incorrect: false
    };
    this.checkPassword = this.checkPassword.bind(this);
    this.reset = this.reset.bind(this);
  }
  checkPassword(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password;
    if (auth) {
      this.setState({
        ifAuth: true
      })
    } else {
      this.setState({
        incorrect: true
      })
    }
    
  }

  reset() {
    this.setState({
      ifAuth: false,
      incorrect: false,
      password: Math.floor(Math.random()*20)
    })
  }

  render() {
    const login = (
      <div className='row' id='row'>
        <div className='col-lg-4 col-lg-offset-4'>
        <form className='input-group' action='#' onSubmit={this.checkPassword} >
        <input type='password' className="form-control" placeolder='Password' autofocus="true"/>
        <input type='submit' className="btn btn-primary" />
        </form>
        </div> 
      </div> 
    ); 
    const Secret = (
      <h1>You know the password! congratulations!</h1>
    )
    return (
      <div id='authorization'>
        {this.state.ifAuth ? <div>
        {Secret}
        <button onClick={this.reset} className='btn btn-success'>Get back!</button>
        </div> : <div>
          {login}
          {this.state.incorrect ? <p style={{color:'red'}}>Incorrect password. Try again.</p> : <p></p>}
          </div>}
        <p style={{position: 'absolute', bottom: '0'}}>Password: {this.state.password}</p>
      </div>
    )
  }
}

export default authorization;
