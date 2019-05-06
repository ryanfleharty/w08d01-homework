import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0
    }
  }
  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}> >{this.state.balance}</div>
        <input type="number" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
      
    )
    
  }
  handleDepositClick = (e) => {
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);

    const newBalance = this.state.balance + amount;

    this.setState({
      balance : newBalance
    });
    this.inputBox.value = '';
  }
  handleWithdrawClick = (e) => {
    const amount = parseInt(this.inputBox.value);

    const newBalance = this.state.balance - amount;
    if (balance < 0){
      balance = 0;
    }

    this.setState({
      balance: newBalance
    });
    this.inputBox.value = '';
  }
}



export default Account;
