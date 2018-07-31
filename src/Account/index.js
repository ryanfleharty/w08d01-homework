import React, { Component } from 'react';
// why does this index not need to import app.js?

class Account extends Component {
    state = {
      balance: 0 
    }
    handleDepositClick = (e) => {
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    const newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = "";
  }
    handleWithdrawClick = (e) => {
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    const newBalance = this.state.balance - amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = "";
  }
  
  render() {
    if (this.state.balance === 0){
      this.balanceClass = 'zero';
    } else {
      this.balanceClass = 'balance';
    }
    return (
      <div className="account">
        <h2>TODO: {this.props.name}</h2>
        <div className={this.balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
      )
  }

}

export default Account;
