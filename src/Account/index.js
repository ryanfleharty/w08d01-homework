import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
        balance: 0
    }
  }
  handleDepClick = (e) => {
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    const newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance,
    })
    this.inputBox.value = '';
  }

  handleWithdrawClick = (e) => {
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    if (amount <= this.state.balance) {
      const newBalance = this.state.balance - amount;
      this.setState({
        balance: newBalance,
      })
      this.inputBox.value = '';
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
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDepClick}/>
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick}/>
      </div>
    )
  }
}

export default Account;
