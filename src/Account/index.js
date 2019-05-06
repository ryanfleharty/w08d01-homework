import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance:0,
    }
  }
  render() {
    let balanceClass = 'balance'
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    };
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input)=>this.textInput = input}/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick}/>
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick}/>
      </div>
    )
  };
  handleDepositClick = (e)=> {
    e.preventDefault();
    const addedInput = parseInt(this.textInput.value, 16)
    const newBalance = this.state.balance + addedInput;
    this.setState({
      balance:newBalance,
    })
  }
  handleWithdrawClick = (e) => {
    e.preventDefault();
    const addedInput = parseInt(this.textInput.value, 16)
    const newBalance = this.state.balance - addedInput;
    this.setState({
      balance: newBalance,
    })
  }
  
}

export default Account;
