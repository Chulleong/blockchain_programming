// staking
// diposit(MyToken) / withdraw(MyToken)

// MyToken : token balanve management
// - the balance of TinyBank address
// TinyBank : deposit / withdraw vault
// - users token management
// - user --> deposit --> Tinybank --> tranfer(TinyBank --> user)

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IMyToken {
    function transfer(uint256 amount, address to) external;

    function transferFrom(address from, address to, uint256 amount) external;
}

contract TinyBank {
    IMyToken public stakingToken;
    
    constructor(IMyToken _stakingToken) {
        stakingToken = _stakingToken;
    }
}