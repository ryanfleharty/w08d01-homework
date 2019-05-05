import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0,
      error: "ok"
    }
  }
  render() {
    const balanceDiv = (this.state.balance > 0) ? <div className="balance">${ this.state.balance }</div> : <div className="balance zero">${ this.state.balance }</div>;
    return (
      <div className="account">
        <h2>{ this.props.name }</h2>
        { balanceDiv }
            <input type="text" placeholder="enter an amount" ref={(input) => {
              this.inputBox = input
            }} />
            <input type="button" value="Deposit" onClick={() => {
              this.setState({
                balance: parseInt(this.state.balance) + parseInt(this.inputBox.value)
              })
            }} />
            <input type="button" value="Withdraw" onClick={() => {
              this.setState({
              balance: (this.inputBox.value <= this.state.balance) ? parseInt(this.state.balance) - parseInt(this.inputBox.value) : this.state.balance,
              })

            }} />
      </div>
    )
  }
}

export default Account;
