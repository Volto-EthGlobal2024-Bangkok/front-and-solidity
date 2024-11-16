import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployWallet: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  // Get the deployer account
  const { deployer } = await getNamedAccounts();

  console.log("Deploying contract with the account:", deployer);

  const deployerSigner = await ethers.getSigner(deployer);
  const balance = await ethers.provider.getBalance(deployer);
  console.log("Deployer balance:", ethers.formatEther(balance), "ETH");

  // Deploy the Wallet contract
  const walletDeployment = await deploy("Wallet", {
    from: deployer,
    args: [], // No constructor arguments
    log: true,
  });

  console.log("Wallet contract deployed to:", walletDeployment.address);
};

export default deployWallet;

// Tag to identify this deploy script
deployWallet.tags = ["Wallet"];
