import React, { Component } from 'react';


class Account extends Component {
	constructor(props)
	{
		super(props);
		this.state =
		{
			balance: 0
		}
	}
	handleDepositClick = (e) =>
	{
		e.preventDefault();
		const amount = parseInt(this.inputBox.value);
		if (amount < 0 || !amount == !NaN || amount == undefined) {return false;}
		this.setState(
		{
			balance: this.state.balance + amount
		});
		this.inputBox.value = ""; //zero out the input field
	}
	handleWithdrawClick = (e) =>
	{
		e.preventDefault();
		const amount = parseInt(this.inputBox.value);
		if (amount > this.state.balance || amount < 0 || !amount == !NaN || amount == undefined) {return false;}
		this.setState(
		{
			balance: this.state.balance - amount
		});
		this.inputBox.value = ""; //zero out the input field
	}
	render() {
		let balanceClass = 'balance';
		if (this.state.balance === 0)
		{
			balanceClass += ' zero';
		}
		return (
			<div className="account">
				<h2>{this.props.name}</h2>
				<div className={balanceClass}>{this.state.balance}</div>
				<input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
				<input type="button" value="Deposit" onClick = {this.handleDepositClick}/>
				<input type="button" value="Withdraw" onClick = {this.handleWithdrawClick}/>
			</div>
		)
	}
}

export default Account;
