import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";


// This is the chain your dApp will work on.
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="987aaad3404b309f38630a042f184b7b"
    >

      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

