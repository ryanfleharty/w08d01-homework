import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }
  }


  handleDepositClick = (e) => {
    if (!this.inputBox.value) {
      this.inputBox.value = 0;
    }

    console.log('handle deposit is being clicked')
    // It is good practice to still prevent default behavior
    e.preventDefault();
    // set a local variable to the amount entered in the text box.
    let amount = parseInt(this.inputBox.value);
    // set a local variable to the new balance based off of the original balance + amount
    const newBalance = this.state.balance + amount;
    // set the balance to the newBalance using the setState method (necessary)
    this.setState({
      balance: newBalance
    })
    // empty out the text box in this component
    this.inputBox.value = '';
  
  }





  handleWithdrawClick = (e) => {
    console.log('handle withdraw is being clicked')

    e.preventDefault();
    let amount = parseInt(this.inputBox.value);
    if( amount <= this.state.balance){
    const newBalance = this.state.balance - amount;
    console.log(newBalance);
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = '';
    }

  }

  render() {
  let balanceClass = 'balance';
  if (this.state.balance === 0) {
    balanceClass += ' zero';
  }
  console.log(this.state);
  
    return (
      <div className="account">
      <h2>{this.props.name}</h2>
      <div className="balance">${this.state.balance}</div>
      <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
      <input type="button" value="Deposit" onClick={this.handleDepositClick} />
      <input type="button" value="Withdrawl" onClick={this.handleWithdrawClick} />
    </div>
    )
  }
}


export default Account;
