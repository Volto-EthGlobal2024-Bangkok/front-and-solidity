// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "@openzeppelin/contracts/utils/Address.sol";


contract Wallet is Ownable {
    using Address for address;

    event Executed(address indexed target, uint256 value, bytes data);
    event TokenTransferred(address indexed token, address indexed to, uint256 amount);
    event NFTTransferred(address indexed token, address indexed to, uint256 tokenId);

    constructor() Ownable(msg.sender) {
    }

    /**
     * @dev Allows the owner to send Ether from the wallet.
     */
    function sendEther(address payable recipient, uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        recipient.transfer(amount);
    }

    /**
     * @dev Allows the owner to transfer ERC-20 tokens.
     */
    function transferERC20(IERC20 token, address to, uint256 amount) external onlyOwner {
        require(token.transfer(to, amount), "ERC20 transfer failed");
        emit TokenTransferred(address(token), to, amount);
    }

    /**
     * @dev Allows the owner to transfer ERC-721 tokens.
     */
    function transferERC721(IERC721 token, address to, uint256 tokenId) external onlyOwner {
        token.safeTransferFrom(address(this), to, tokenId);
        emit NFTTransferred(address(token), to, tokenId);
    }

    /**
     * @dev Executes a generic transaction to another contract.
     */
    function executeTransaction(address target, uint256 value, bytes calldata data) external onlyOwner {
        require(isContract(target), "Target must be a contract");
        (bool success, ) = target.call{value: value}(data);
        require(success, "Transaction failed");
        emit Executed(target, value, data);
    }

    /**
     * @dev Implements EIP-1271 signature validation for off-chain messages.
     */
    function isValidSignature(bytes32 hash, bytes memory signature) public view returns (bytes4) {
        bool isValid = SignatureChecker.isValidSignatureNow(owner(), hash, signature);
        return isValid ? bytes4(0x1626ba7e) : bytes4(0xffffffff); // Explicitly cast to bytes4
    }

    /**
     * @dev Allows the contract to receive Ether.
     */
    receive() external payable {}

    function isContract(address account) internal view returns (bool) {
        return account.code.length > 0;
    }

}
