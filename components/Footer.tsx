import React, { ReactNode } from 'react';
import styles from "../styles/Home.module.css";

interface FooterProps {
  children: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.stakeButtonContainer}>
        {children}
      </div>
    </div>
  );
};

export default Footer;
