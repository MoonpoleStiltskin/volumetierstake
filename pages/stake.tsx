import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import { formatUnits } from 'ethers/lib/utils';
import type { NextPage } from "next";
import { useEffect, useState, useCallback } from "react";
import NFTCard from "../components/NFTCard";
import styles from "../styles/Home.module.css";
import {
  nftDropContractAddress,
  stakingContractAddress,
  tokenContractAddress,
  stakingContractABI,
  nftDropContractABI,
} from "../consts/contractAddresses";
import CustomWeb3Button from '../components/CustomWeb3Button';
import { Lock, Unlock } from 'react-feather';
import Footer from '../components/Footer';

enum StakingStatus {
  Unset = 0,
  Set = 1,
  Active = 2,
  Inactive = 3,
}

const StakePage: NextPage = () => {
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const [totalBoost, setTotalBoost] = useState<BigNumber>();
  const [rewardTokenBalance, setRewardTokenBalance] = useState<BigNumber>();
  const [selectedNfts, setSelectedNfts] = useState<number[]>([]);
  const [selectedStakedNfts, setSelectedStakedNfts] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [totalStakedSupply, setTotalStakedSupply] = useState<BigNumber>();
  const [requiredGlobalStakes, setRequiredGlobalStakes] = useState<BigNumber>();
  const [stakingStatus, setStakingStatus] = useState<StakingStatus>(StakingStatus.Unset);
  const [getRewardPerToken, setRewardPerToken] = useState<BigNumber>();

  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    nftDropContractABI
  );

  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(
    stakingContractAddress,
    stakingContractABI
  );
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const { data: stakedTokens } = useContractRead(contract, "userStakeInfo", [
    address,
  ]);

  const [stakeCount, setStakeCount] = useState(0);
  const [withdrawCount, setWithdrawCount] = useState(0);

  const handleClaimRewards = async (contract: ethers.Contract) => {
    try {
      await contract.call("claimRewards");
    } catch (error) {
      console.error("Failed to claim rewards:", error);
    }
  };

  const [updateState, setUpdateState] = useState(Date.now());

  const forceUpdate = useCallback(() => setUpdateState(Date.now()), []);

  useEffect(() => {
    if (!contract || !address) return;

    const loadClaimableRewards = async () => {
      const rewards = await contract.call("earned", [address]);
      setClaimableRewards(rewards);
    };

    loadClaimableRewards();
  }, [address, contract, updateState]);

  useEffect(() => {
    if (!contract || !address) return;

    const loadTotalBoost = async () => {
      try {
        const boost = await contract.call("getTotalBoost", [address]);
        setTotalBoost(boost);
      } catch (error) {
        console.error("Failed to fetch totalBoost:", error);
      }
    };

    loadTotalBoost();
  }, [address, contract, updateState]);

  useEffect(() => {
    if (!contract || !address) return;

    const loadRewardTokenBalance = async () => {
      const balance = await contract.call("getRewardTokenBalance");
      setRewardTokenBalance(balance);
    };

    loadRewardTokenBalance();
  }, [address, contract, updateState]);

  useEffect(() => {
    if (!contract || !address) return;

    const loadTotalStakedSupply = async () => {
      const totalSupply = await contract.call("totalStakedSupply");
      setTotalStakedSupply(totalSupply);
    };

    loadTotalStakedSupply();
  }, [address, contract, updateState]);

  useEffect(() => {
    if (!contract) return;

    const loadRequiredGlobalStakes = async () => {
      const requiredStakes = await contract.call("requiredGlobalStakes");
      setRequiredGlobalStakes(requiredStakes);
    };

    loadRequiredGlobalStakes();
  }, [contract, updateState]);

  useEffect(() => {
    const fetchLockStatus = async () => {
      if (!contract || !address) return;

      const status = await contract.call("getWithdrawalStatus");
      setLockStatus(status);
    };

    fetchLockStatus();
  }, [address, contract, updateState]);

  useEffect(() => {
    if (!contract) return;

    const loadStakingStatus = async () => {
      if (!contract) return;

      const status = await contract.call("stakingStatus");
      const mappedStatus = Number(status) as StakingStatus;
      setStakingStatus(mappedStatus);
    };

    loadStakingStatus();
  }, [contract, updateState]);

  useEffect(() => {
    if (!contract || !address) return;

    const loadRewardPerToken = async () => {
      try {
        const rewardPerToken = await contract.call("getRewardPerToken");
        setRewardPerToken(rewardPerToken);
      } catch (error) {
        console.error("Failed to fetch rewardPerToken:", error);
      }
    };

    loadRewardPerToken();
  }, [address, contract, updateState]);

  // Create a state for the lock status
  const [lockStatus, setLockStatus] = useState<boolean>(false);

  async function stakeNfts(ids: number[]) {
    if (!address) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const nftDropContractWithEthers = new ethers.Contract(
      nftDropContractAddress,
      nftDropContractABI,
      signer
    );
    const stakingContractWithEthers = new ethers.Contract(
      stakingContractAddress,
      stakingContractABI,
      signer
    );

    try {
      const isApproved = await nftDropContractWithEthers.isApprovedForAll(
        address,
        stakingContractAddress
      );

      if (!isApproved) {
        await nftDropContractWithEthers.setApprovalForAll(stakingContractAddress, true);
      }

      await stakingContractWithEthers.stake(ids);

      setSelectedNfts([]);
      setErrorMessage(null);
    } catch (error: any) {
      console.error('Error during staking transaction:', error);

      if (error.message.includes("Stake: Account limit reached")) {
        setErrorMessage('You cannot stake more NFTs than the account limit.');
      } else {
        setErrorMessage('An error occurred during staking.');
      }

      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);

      forceUpdate();
      setSelectedNfts([]);
      // setErrorMessage(null);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const formatValue = (value: BigNumber): string => {
    return ethers.utils.formatUnits(value, 18);
  };

  function selectNft(id: number, isStaked: boolean = false) {
    if (isStaked) {
      setSelectedNfts([]);
      setSelectedStakedNfts(prev => {
        if (prev.includes(id)) {
          return prev.filter(i => i !== id);
        } else {
          return [...prev, id];
        }
      });
    } else {
      setSelectedStakedNfts([]);
      setSelectedNfts(prev => {
        if (prev.includes(id)) {
          return prev.filter(i => i !== id);
        } else {
          return [...prev, id];
        }
      });
    }
  }

  async function withdrawNfts(ids: number[]) {
    if (!address || !contract || !nftDropContract) return;

    try {
      await contract.call("withdraw", [ids]);

      setSelectedNfts([]);
      setSelectedStakedNfts([]);
      setErrorMessage(null);
    } catch (error: any) {
      console.error('Error during withdrawal transaction:', error);

      if (error.message.includes("Staked NFTs are locked until the end of the staking period")) {
        setErrorMessage('Staked NFTs are locked until the end of the staking period.');
      } else {
        setErrorMessage('An error occurred during withdrawal.');
      }

      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);

      forceUpdate();
      setSelectedNfts([]);
      setSelectedStakedNfts([]);
      // setErrorMessage(null);
    }
  }

  return (
    <div className={styles.container1}>
      <h1 className={styles.h1}>Stake Your NFTs</h1>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />

      {!address ? (
        <ConnectWallet />
      ) : (
        <>
          <h2>Stakepool Info</h2>
          <div className={styles.tokenGrid}>
            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>
                {stakingStatus === StakingStatus.Active ? "Staking Status" :
                  stakingStatus === StakingStatus.Inactive ? "Staking Period" :
                    stakingStatus === StakingStatus.Set ? "Community Activated Staking" : "Community Staking Status"}
              </h3>
              {stakingStatus !== StakingStatus.Unset ? (
                <p className={styles.tokenValueAlt}>
                  {stakingStatus === StakingStatus.Active ? (
                    <span style={{ color: "blue" }}>{StakingStatus[StakingStatus.Active]}</span>
                  ) : stakingStatus === StakingStatus.Inactive ? (
                    <>
                      <span style={{ color: "red" }}>{StakingStatus[StakingStatus.Inactive]}</span>
                    </>
                  ) : stakingStatus === StakingStatus.Set ? (
                    <span style={{ color: "white" }}>
                      {`${totalStakedSupply?.toLocaleString()} staked / ${requiredGlobalStakes?.toLocaleString()}`} required
                    </span>
                  ) : null}
                </p>
              ) : (
                <p className={styles.tokenValue}>No period set</p>
              )}
            </div>

            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>StakePool Balance</h3>
              <p className={styles.tokenValue}>
                <b>
                  {!rewardTokenBalance
                    ? "Loading..."
                    : parseFloat(formatValue(rewardTokenBalance)).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </b>{" "}
              </p>
            </div>
            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>Base Rewards per NFT</h3>
              {stakingStatus === StakingStatus.Inactive && (
                <p className={styles.tokenValueAlt} style={{ color: "red" }}>
                  Unset
                </p>
              )}
              {stakingStatus === StakingStatus.Set && (
                <p className={styles.tokenValueAlt} style={{ color: "black" }}>
                  Untriggered
                </p>
              )}
              {stakingStatus !== StakingStatus.Inactive && stakingStatus !== StakingStatus.Set && (
                <p className={styles.tokenValue}>
                  <b>
                    {!getRewardPerToken
                      ? "Loading..."
                      : parseFloat(formatUnits(getRewardPerToken.mul(60))).toFixed(2).toLocaleString()} /min
                  </b>
                </p>
              )}
            </div>



            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>Lock Status</h3>
              <p className={styles.tokenValueAlt}>
                {lockStatus === undefined ? (
                  "Loading..."
                ) : lockStatus ? (
                  <>
                    <span className={styles.lockIcon}>
                      <Lock style={{ color: "blue" }} />
                    </span>
                    <span className={styles.lockText}>Locked</span>
                  </>
                ) : (
                  <>
                    <span className={styles.unlockIcon}>
                      <Unlock />
                    </span>
                    Unlocked
                  </>
                )}
              </p>
            </div>
          </div>
          <h2>Personal Info</h2>
          <div className={styles.tokenGrid}>
            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>Your Rewards</h3>
              <p className={styles.tokenValue}>
                <b>
                  {!claimableRewards
                    ? "Loading..."
                    : parseFloat(formatValue(claimableRewards)).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </b>{" "}
                {/* {tokenBalance?.symbol} */}
              </p>
            </div>
            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>Rate Boost</h3>
              <p className={styles.tokenValue}>
                <strong>
                  {totalBoost === undefined
                    ? "Loading..."
                    : parseFloat(formatUnits(totalBoost, 2)).toFixed(1).toLocaleString()}
                  X
                </strong>
              </p>
            </div>
          </div>
          <hr className={`${styles.smallDivider} ${styles.spacerTop} ${styles.spacerBottom}`} />
          <Web3Button
            action={(contract: any) => handleClaimRewards(contract as ethers.Contract)}
            contractAddress={stakingContractAddress}
          >
            Claim Rewards
          </Web3Button>

          <hr className={`${styles.smallDivider} ${styles.spacerTop}`} />
          <h2>Your Staked NFTs</h2>
          <h4>Select those you wish to withdraw</h4>
          <div className={styles.nftBoxGrid}>
            {stakedTokens &&
              stakedTokens[0]?.map((stakedToken: BigNumber) => (
                <div
                  className={`${selectedStakedNfts.includes(Number(stakedToken))
                    ? styles.nftBoxSelected
                    : ""
                    }`}
                  key={stakedToken.toString()}
                  onClick={() => selectNft(stakedToken.toNumber(), true)}
                >
                  <NFTCard tokenId={stakedToken.toNumber()} isStaked />
                </div>
              ))}
          </div>

          <hr className={`${styles.divider} ${styles.spacerTop}`} />
          <h2>Your Unstaked NFTs</h2>
          <h4>Select those you wish to stake</h4>
          <div className={styles.nftBoxGrid}>
            {ownedNfts?.map((nft) => (
              <div
                className={`${styles.nftBox} ${selectedNfts.includes(Number(nft.metadata.id))
                  ? styles.nftBoxSelected
                  : ""
                  }`}
                key={nft.metadata.id.toString()}
                onClick={() => selectNft(Number(nft.metadata.id))}
              >
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className={styles.nftMedia}
                />
                <h3>{nft.metadata.name}</h3>
              </div>
            ))}
          </div>

          <div className={`${styles.footer} ${(selectedNfts.length > 0 || selectedStakedNfts.length > 0 || errorMessage) ? styles.footerVisible : ""}`}>
            {errorMessage ? (
              <div className={styles.errorMessage}>{errorMessage}</div>
            ) : (
              <div className={styles.buttonContainer}>
                {selectedNfts.length > 0 && (
                  <CustomWeb3Button
                    enabled={selectedNfts.length > 0}
                    action={() => stakeNfts(selectedNfts)}
                    contractAddress={stakingContractAddress}
                  >
                    Stake
                  </CustomWeb3Button>
                )}

                {selectedStakedNfts.length > 0 && (
                  <CustomWeb3Button
                    enabled={selectedStakedNfts.length > 0}
                    action={() => withdrawNfts(selectedStakedNfts)}
                    contractAddress={stakingContractAddress}
                  >
                    Withdraw
                  </CustomWeb3Button>
                )}
              </div>
            )}
          </div>

        </>
      )}
    </div>
  );
};

export default StakePage;
