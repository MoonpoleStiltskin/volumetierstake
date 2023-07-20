import { useEffect, useState , useMemo } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { stakingContractAddress, stakingContractABI } from "../consts/contractAddresses";
import { BigNumber, ethers } from "ethers";

export const useTotalBoost = (address: string) => {
  const { contract: stakingContract } = useContract(
    stakingContractAddress,
    stakingContractABI
  );
  const { data: tierMultipliers } = useContractRead(stakingContract, "getTierMultipliers");
  const { data: tierThresholds } = useContractRead(stakingContract, "getTierThresholds");
  const [totalBoost, setTotalBoost] = useState<BigNumber | null>(null);

  useEffect(() => {
    if (!stakingContract || !address || !tierMultipliers || !tierThresholds) return;

    const loadTotalBoost = async () => {
      try {
        const boost = await stakingContract.call("getTotalBoost", [address]);
        setTotalBoost(ethers.BigNumber.from(boost));
      } catch (error) {
        console.error("Failed to fetch totalBoost:", error);
      }
    };

    loadTotalBoost();
  }, [address, stakingContract, tierMultipliers, tierThresholds]);

  const tier1Multiplier = tierMultipliers?.[0] || ethers.BigNumber.from(0);
  const tier1Threshold = tierThresholds?.[0] || ethers.BigNumber.from(0);
  const tier2Multiplier = tierMultipliers?.[1] || ethers.BigNumber.from(0);
  const tier2Threshold = tierThresholds?.[1] || ethers.BigNumber.from(0);
  const tier3Multiplier = tierMultipliers?.[2] || ethers.BigNumber.from(0);
  const tier3Threshold = tierThresholds?.[2] || ethers.BigNumber.from(0);

  const boostLevel = useMemo(() => {
    if (!totalBoost || totalBoost.lt(tier1Threshold)) {
      return "None";
    } else if (totalBoost.lt(tier2Threshold)) {
      return "Tier 1";
    } else if (totalBoost.lt(tier3Threshold)) {
      return "Tier 2";
    } else {
      return "Tier 3";
    }
  }, [totalBoost, tier1Threshold, tier2Threshold, tier3Threshold]);

  return {
    tier1Multiplier,
    tier1Threshold,
    tier2Multiplier,
    tier2Threshold,
    tier3Multiplier,
    tier3Threshold,
    totalBoost,
    boostLevel,
  };
};
