// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Wallet.sol";

contract WalletFactory {
    event WalletCreated(address indexed owner, address wallet);

    function createWallet() external returns (address) {
        // Deploy a new wallet
        Wallet wallet = new Wallet();
        
        // Transfer ownership to the user
        wallet.transferOwnership(msg.sender);

        // Emit event for tracking
        emit WalletCreated(msg.sender, address(wallet));

        return address(wallet);
    }
}
