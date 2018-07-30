import React, { Component } from 'react';
// why does this index not need to import app.js?

class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0 
    }
  }

  render() {
    return (
      <div className="account">
        <h2>TODO: {this.props.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
