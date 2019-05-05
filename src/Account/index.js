import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0,
    }
  }
  render() {
    return (
      <div className="account">
        <h2>{ this.props.name }</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" id="text-input" ref={()=>{
          document.getElementById('text-input').value;
        }} />
        <input type="button" value="Deposit" onClick={()=>{
          console.log(this.state.balance + ref)
        }} />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
