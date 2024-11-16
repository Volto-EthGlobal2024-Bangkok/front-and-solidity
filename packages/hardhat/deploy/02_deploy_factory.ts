import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployWalletFactory: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, get } = deployments;

  // Get the deployer account
  const { deployer } = await getNamedAccounts();

  console.log("Deploying WalletFactory contract with the account:", deployer);

  const deployerSigner = await ethers.getSigner(deployer);
  const balance = await ethers.provider.getBalance(deployer);
  console.log("Deployer balance:", ethers.formatEther(balance), "ETH");

  // Ensure the Wallet contract is deployed first
  const walletDeployment = await get("Wallet");

  console.log("Wallet contract found at:", walletDeployment.address);

  // Deploy the WalletFactory contract
  const walletFactoryDeployment = await deploy("WalletFactory", {
    from: deployer,
    args: [], // No constructor arguments
    log: true,
    libraries: {}, // Add if your contract requires libraries
  });

  console.log("WalletFactory contract deployed to:", walletFactoryDeployment.address);
};

export default deployWalletFactory;

// Tag to identify this deploy script
deployWalletFactory.tags = ["WalletFactory"];
deployWalletFactory.dependencies = ["Wallet"];
