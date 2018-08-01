import React, { Component } from 'react';


class Account extends Component {
    constructor(props){
      super(props)
      this.state = {
        balance: 0
      }
    }

    handleDepositClick = (e) => {
      // It is good practice to still prevent default behavior
      e.preventDefault();
      // set a local variable to the amount entered in the text box.
      const amount = parseInt(this.inputBox.value);
      // set a local variable to the new balance based off of the original balance + amount
      const newBalance = this.state.balance + amount;
      // set the balance to the newBalance using the setState method (necessary)
      this.setState({
        balance: newBalance
      })
      console.log(newBalance, " this is balance")
      // empty out the text box in this component
      this.inputBox.value = '';
    }

    handleWithrawClick = (e) => {
      // It is good practice to still prevent default behavior
      e.preventDefault();
      // set a local variable to the amount entered in the text box.
      const amount = parseInt(this.inputBox.value);
      // set a local variable to the new balance based off of the original balance + amount
      let newBalance = this.state.balance - amount;
      if(newBalance < 0){ newBalance = 0; }
      // set the balance to the newBalance using the setState method (necessary)
      this.setState({
        balance: newBalance
      })
      // empty out the text box in this component
      this.inputBox.value = '';
    }

    render(){
      // set the default class to `balance` for the balanceClass.
      let balanceClass = 'balance';
      // if the balance is 0, then add the class zero to balanceClass
      if (this.state.balance === 0) {
        balanceClass += ' zero';
      }

      return(
      <div className="account">
        //this.props.name is referring to the name property we assigned the App component in App.js
        <h2>{this.props.name}</h2>
        <div className={balanceClass}><h1>{this.state.balance}</h1></div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdrawl" onClick={this.handleWithrawClick} />
      </div>
    )
    }
}

export default Account;
