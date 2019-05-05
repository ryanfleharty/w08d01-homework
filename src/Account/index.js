import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0,
      value: '',
      zeroClass: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
      })
  }

  handleTransaction = (e) => {
    e.preventDefault();
    let numberVal = parseInt(this.state.value);
    if (numberVal) {
      if (e.target.value === "Deposit") {
        this.setState({
          balance: this.state.balance + numberVal,
          value: ''
        })
      } else {
        if (this.state.balance >= numberVal){
        this.setState({
          balance: this.state.balance - numberVal,
          value: ''
        })
      } else {
        console.log("OVERDRAW WARNING")
      }
      }
    } else {
      console.log("please enter only numbers")
    }
  }

  render() {
    if (this.state.balance == 0){
      this.state.zeroClass = 'zero'
    } else {
      this.state.zeroClass = '';
    }
    return (
      <div className={"account " + this.state.zeroClass}>
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>

        <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="enter an amount" />

        <button type="button" onClick={this.handleTransaction} value="Deposit">Deposit</button>

        <button type="button" onClick={this.handleTransaction} value="Withdraw">Withdraw</button>

        </form>

      </div>
    )
  }
}

export default Account;
