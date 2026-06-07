import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-vyper";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  vyper: {
    version: "0.3.9",
  },
  networks: {
    kairos: {
      url:"https://public-en-kairos.node.kaia.io",
      accounts: ["0xd15ed560b28168ab1335592d6f37e6b35b9b3f795a9ee2b7a3ff1984c3c427b2"],
    }
  },
  etherscan: {
      apiKey: {
        kairos: "unnecessary",
      },
      customChains: [
        {
          network: "kairos",
          chainId: 1001,
          urls: {
            apiURL: "https://compiler-api-v2.kaiascan.io/kairos/hardhat-verify",
            browserURL: "https://kairos.kaiascan.io",
          }
        },
      ]
    },
}

export default config;
