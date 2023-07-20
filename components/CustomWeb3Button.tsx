// CustomWeb3Button.tsx
import { Web3Button } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css'; // Replace with your styles file
import { Contract } from "ethers"; // Import this if your action prop uses it

interface CustomWeb3ButtonProps {
  enabled: boolean;
  action: () => Promise<void> | (() => Promise<Contract>);
  contractAddress: string;
  children: React.ReactNode;
}

const CustomWeb3Button: React.FC<CustomWeb3ButtonProps> = ({ enabled, action, contractAddress, children }) => {
  if (enabled) {
    return (
      <Web3Button
        contractAddress={contractAddress}
        action={action}
      >
        {children}
      </Web3Button>
    );
  } else {
    return (
      <button className={styles.disabledButton} disabled>
        {children}
      </button>
    );
  }
}

export default CustomWeb3Button;
