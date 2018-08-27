import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0,
    }
  }

 triggerUpdate = (updateBalance) => {
  if (updateBalance) {
    this.setState({
      balance: updateBalance
    })
    this.userInput.value = '';
  }
}

  depositClick = (e) => {
    // user input -> string to number
    const amount = parseInt(this.userInput.value);
    // new balance stored in variable PLUS user input amount
    const updateBalance = this.state.balance + amount;

    this.triggerUpdate(updateBalance);
  }

  withdrawClick = (e) => {
    //user input -> string to number
    const amount = parseInt(this.userInput.value);
    // new balance stored in variable MINUS user input amount
    const updateBalance = this.state.balance - amount;

    this.triggerUpdate(updateBalance);
  }

  render() {
    let balanceClass = "balance";

    if (this.state.balance < 0) {
      // += so we don't take away all of the classes something has.. but just add one
        balanceClass += " negative";
       }
    if (this.state.balance > 0) {
        balanceClass += " positive"
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.userInput = input} />
        <input type="button" value="Deposit" onClick={this.depositClick} />
        <input type="button" value="Withdraw" onClick={this.withdrawClick} />
      </div>
    )
  }
}

export default Account;