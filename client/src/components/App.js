import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { Button } from 'react-bootstrap';
import Blocks from './Blocks';
import ConductTransaction from './ConductTransaction';
import TransactionPool from './TransactionPool';

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
                <div className='navBar'>
                    {this.displayWalletInfo}
                </div>
                <div className='main'>    
                    <div className='top'>
                        <Blocks/>
                        <ConductTransaction/>
                    </div>
                    <TransactionPool/>
                </div>
            </div>
        );
    }
}

export default App;