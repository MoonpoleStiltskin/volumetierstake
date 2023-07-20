import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.part}>
        <h1 className={styles.h1}>Mint an NFT!</h1>
        <p className={styles.explain}>
          The staking rewards rate increases with some special traits. Try your luck to increase your chances.
        </p>
        <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

        <Web3Button
          theme="dark"
          contractAddress={nftDropContractAddress}
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => {
            alert("NFT Claimed!");
            router.push("/stake");
          }}
          onError={(error) => {
            alert(error);
          }}
        >
          MINT
        </Web3Button>
      </div>

      <div className={styles.part}>
        <h1 className={styles.h1}>Buy an NFT!</h1>
        <p className={styles.explain}>
          Pick an NFT with your desired traits from the marketplace.
        </p>
        <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
        <a 
          href="https://opensea.io/collection/bens-finale" // replace with your OpenSea page URL
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.openseaButton}
        >
          OPENSEA
        </a>
      </div>
    </div>
)
  
};

export default Mint;
