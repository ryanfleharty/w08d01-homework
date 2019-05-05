import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }

    this.handleDepositClick = (e) => {
      console.log('clicked deposit')
      e.preventDefault();
      const amount = parseInt(this.inputBox.value);
      
      // Trying to check if NaN, then balance: this.state.balance
      // the log after the check isn't working when submitting empty form... 
      if(typeof amount === NaN){
        console.log(amount, '<--- returned NaN');
        
      }
      const newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      })
      this.inputBox.value = '';
    }

    this.handleWithdrawalClick = (e) => {
      console.log('clicked withdrawal');
      e.preventDefault();
      const amount = parseInt(this.inputBox.value);
      
      let newBalance = 0;
      if(this.state.balance - amount >= 0){
        newBalance = this.state.balance - amount;
      } else {
        newBalance = this.state.balance;
      }
  
      this.setState({
        balance: newBalance
      })
      this.inputBox.value = '';
    }


    //attempt at transfer button... can't figure out how to make changes to the destination 
    //account balance when it's the same kind of component. I'm sure it has to do with using props
    // and a helper function, but just can't wrap my head around how it exactly fits together
    this.handleTransferClick = (e) => {
      console.log('clicked transfer');
      e.preventDefault();
      const amount = parseInt(this.inputBox.value);
      let sourceBalance = this.state.balance - amount;
      let otherBalance = 0; //other acct balance + amount

      this.setState({
        balance: sourceBalance
        // call the helper function to adjust the other component here??
      })

    }

  }
  
  
  render() {

    let balanceClass = "balance";
    if(this.state.balance === 0){
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawalClick}/>
        <input type="button" value="Transfer" onClick={this.handleTransferClick}/>
      </div>
    )
  }
}

export default Account;
