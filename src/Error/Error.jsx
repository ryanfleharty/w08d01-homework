import React, { Component } from 'react';
import Account from '../Account/index';

class Error extends Component {
    render() {
        console.log(this.balance, 'Account.error')
        return (
            <div className="error">
                <h2>{ Account.error }</h2>
            </div>
        )
    }

}

export default Error;