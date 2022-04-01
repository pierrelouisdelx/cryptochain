import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { Button } from 'react-bootstrap';

class App extends Component {
    state = { walletInfo: {}, displayWallet: false};

    componentDidMount() {
        fetch(`${document.location.origin}/api/wallet-info`)
            .then(response => response.json())
            .then(json => this.setState({ walletInfo: json }));
    }

    toggleWalletInfo = () => {
        this.setState({ displayWallet: !this.state.displayWallet });
    }

    get displayWalletInfo() {
        if (this.state.displayWallet) {
            const { address, balance } = this.state.walletInfo;
            return (
                <div className='WalletInfo'>
                    <div>Address: {address}</div>
                    <div>Balance: {balance}</div>
                    <Button onClick={this.toggleWalletInfo}>Hide</Button>
                </div>
            )
        }
        return (
            <Button onClick={this.toggleWalletInfo}>My Wallet</Button>
        );
    }

    render() {
        return (
            <div className='App'>
                {this.displayWalletInfo}
                <div><Link to='/blocks'>Blocks</Link></div>
                <div><Link to='/send'>Send</Link></div>
                <div><Link to='/pool'>Transaction Pool</Link></div>
            </div>
        );
    }
}

export default App;