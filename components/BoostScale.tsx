import React from "react";
import styles from "../styles/BoostScale.module.css";
import { BigNumber } from "ethers";

interface BoostScaleProps {
  tier1Multiplier: BigNumber;
  tier1Threshold: BigNumber;
  tier2Multiplier: BigNumber;
  tier2Threshold: BigNumber;
  tier3Multiplier: BigNumber;
  tier3Threshold: BigNumber;
  totalBoost: BigNumber | null;
  
}

const BoostScale: React.FC<BoostScaleProps> = ({
  tier1Multiplier,
  tier1Threshold,
  tier2Multiplier,
  tier2Threshold,
  tier3Multiplier,
  tier3Threshold,
  totalBoost,
}) => {
  const getBoostLevel = (): string => {
    if (!totalBoost || totalBoost.lt(tier1Threshold)) {
      return "None";
    } else if (totalBoost.lt(tier2Threshold)) {
      return "Tier 1";
    } else if (totalBoost.lt(tier3Threshold)) {
      return "Tier 2";
    } else {
      return "Tier 3";
    }
  };

  const getBoostScaleWidth = (): number => {
    if (!totalBoost || totalBoost.lt(tier1Threshold)) {
      return 0;
    } else if (totalBoost.lt(tier2Threshold)) {
      const boostPercentage = totalBoost.div(tier2Threshold).toNumber();
      return boostPercentage * 100;
    } else if (totalBoost.lt(tier3Threshold)) {
      const boostPercentage = totalBoost.div(tier3Threshold).toNumber();
      return boostPercentage * 100;
    } else {
      return 100;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.scale}>
        <div className={styles.threshold}>
          <span>{tier1Multiplier.toString()}</span>
          <span>{tier1Threshold.toString()}</span>
        </div>
        <div className={styles.threshold}>
          <span>{tier2Multiplier.toString()}</span>
          <span>{tier2Threshold.toString()}</span>
        </div>
        <div className={styles.threshold}>
          <span>{tier3Multiplier.toString()}</span>
          <span>{tier3Threshold.toString()}</span>
        </div>
        <div className={styles.gaugeContainer}>
          <div className={styles.gauge} style={{ width: `${getBoostScaleWidth()}%` }} />
          <div className={styles.boostLevel}>{getBoostLevel()}</div>
        </div>
      </div>
    </div>
  );
};

export default BoostScale;
