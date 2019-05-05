import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.state = {
      balance: 0
    };
  }
  handleDeposit(e){
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    const newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    });
    this.inputBox.value = '';
  }
  handleWithdraw = (e) => {    
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    const newBalance = this.state.balance - amount;
    if (newBalance >= 0) {
      this.setState({
        balance: newBalance
      });
      this.inputBox.value = '';
    } else {
      this.inputBox.value = 'insufficient funds'
      console.log('insufficient funds');
    }
  }
  render() {
    // set the default class to `balance` for the balanceClass.
    let balanceClass = 'balance';
    // if the balance is 0, then add the class zero to balanceClass
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDeposit} />
        <input type="button" value="Withdraw" onClick={this.handleWithdraw} />
      </div>
    )
  }
}

export default Account;
