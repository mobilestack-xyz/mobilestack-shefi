import {
  StatsigDynamicConfigs,
  StatsigExperiments,
  StatsigMultiNetworkDynamicConfig,
  StatsigParameter,
} from 'src/statsig/types'
import { NetworkId } from 'src/transactions/types'
import { Testnets } from 'src/web3/networkConfig'
import { DEFAULT_TESTNET } from 'src/config'

export const ExperimentConfigs = {
  // NOTE: the keys of defaultValues MUST be parameter names
  [StatsigExperiments.ONBOARDING_TERMS_AND_CONDITIONS]: {
    experimentName: StatsigExperiments.ONBOARDING_TERMS_AND_CONDITIONS,
    defaultValues: {
      variant: 'control' as 'control' | 'colloquial_terms' | 'checkbox',
    },
  },
} satisfies {
  [key in StatsigExperiments]: {
    experimentName: key
    defaultValues: { [key: string]: StatsigParameter }
  }
}

const ALL_NETWORKS: NetworkId[] = {
  [Testnets.mainnet]: [
    NetworkId['celo-mainnet'],
    NetworkId['ethereum-mainnet'],
    NetworkId['arbitrum-one'],
    NetworkId['op-mainnet'],
    NetworkId['polygon-pos-mainnet'],
    NetworkId['base-mainnet'],
  ],
  [Testnets.alfajores]: [
    NetworkId['celo-alfajores'],
    NetworkId['ethereum-sepolia'],
    NetworkId['arbitrum-sepolia'],
    NetworkId['op-sepolia'],
    NetworkId['polygon-pos-amoy'],
    NetworkId['base-sepolia'],
  ],
}[DEFAULT_TESTNET as Testnets]

const CELO_ETH_NETWORKS: NetworkId[] = {
  [Testnets.mainnet]: [NetworkId['celo-mainnet'], NetworkId['ethereum-mainnet']],
  [Testnets.alfajores]: [NetworkId['celo-alfajores'], NetworkId['ethereum-sepolia']],
}[DEFAULT_TESTNET as Testnets]

const CICO_TOKEN_INFO: { tokenInfo: { [tokenId: string]: { cicoOrder: number } } } = {
  [Testnets.mainnet]: {
    tokenInfo: {
      'celo-mainnet:native': { cicoOrder: 1 }, // CELO
      'celo-mainnet:0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e': {
        cicoOrder: 2,
      }, // USDT
      'celo-mainnet:0xceba9300f2b948710d2653dd7b07f33a8b32118c': {
        cicoOrder: 3,
      }, // USDC
      'celo-mainnet:0x765de816845861e75a25fca122bb6898b8b1282a': {
        cicoOrder: 4,
      }, // cUSD
      'celo-mainnet:0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73': {
        cicoOrder: 5,
      }, // cEUR
      'celo-mainnet:0xe8537a3d056da446677b9e9d6c5db704eaab4787': {
        cicoOrder: 6,
      }, // cREAL
      'ethereum-mainnet:native': { cicoOrder: 7 }, // ETH
      'ethereum-mainnet:0xdac17f958d2ee523a2206206994597c13d831ec7': {
        cicoOrder: 8,
      }, // USDT
      'ethereum-mainnet:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
        cicoOrder: 9,
      }, // USDC
      'arbitrum-one:native': { cicoOrder: 10 }, // ETH
      'arbitrum-one:0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9': {
        cicoOrder: 11,
      }, // USDT
      'arbitrum-one:0xaf88d065e77c8cc2239327c5edb3a432268e5831': {
        cicoOrder: 12,
      }, // USDC
      'op-mainnet:native': { cicoOrder: 13 }, // ETH
      'op-mainnet:0x94b008aa00579c1307b0ef2c499ad98a8ce58e58': {
        cicoOrder: 14,
      }, // USDT
      'op-mainnet:0x0b2c639c533813f4aa9d7837caf62653d097ff85': {
        cicoOrder: 15,
      }, // USDC
    },
  },
  [Testnets.alfajores]: {
    tokenInfo: {
      'celo-alfajores:native': { cicoOrder: 1 }, // CELO
      // "celo-alfajores:0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e": { "cicoOrder": 2 }, // USDT
      'celo-alfajores:0x2f25deb3848c207fc8e0c34035b3ba7fc157602b': {
        cicoOrder: 3,
      }, // USDC
      'celo-alfajores:0x874069fa1eb16d44d622f2e0ca25eea172369bc1': {
        cicoOrder: 4,
      }, // cUSD
      'celo-alfajores:0x10c892a6ec43a53e45d0b916b4b7d383b1b78c0f': {
        cicoOrder: 5,
      }, // cEUR
      'celo-alfajores:0xe4d517785d091d3c54818832db6094bcc2744545': {
        cicoOrder: 6,
      }, // cREAL
      'ethereum-sepolia:native': { cicoOrder: 7 }, // ETH
      'ethereum-sepolia:0x7169d38820dfd117c3fa1f22a697dba58d90ba06': {
        cicoOrder: 8,
      }, // USDT
      'ethereum-sepolia:0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8': {
        cicoOrder: 9,
      }, // USDC
      'arbitrum-sepolia:native': { cicoOrder: 10 }, // ETH
      // "arbitrum-sepolia:0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": { "cicoOrder": 11 }, // USDT
      'arbitrum-sepolia:0x75faf114eafb1bdbe2f0316df893fd58ce46aa4d': {
        cicoOrder: 12,
      }, // USDC
      'op-sepolia:native': { cicoOrder: 13 }, // ETH
      // "op-sepolia:0x94b008aa00579c1307b0ef2c499ad98a8ce58e58": { "cicoOrder": 14 }, // USDT
      // "op-sepolia:0x0b2c639c533813f4aa9d7837caf62653d097ff85": { "cicoOrder": 15 }, // USDC
    },
  },
}[DEFAULT_TESTNET as Testnets]

type JumpstartConfig = {
  jumpstartContracts: {
    [key in NetworkId]?: {
      contractAddress?: string
      depositERC20GasEstimate: string
      retiredContractAddresses?: string[]
    }
  }
  maxAllowedSendAmountUsd: number
}

const WALLET_JUMPSTART_CONFIG: JumpstartConfig = {
  [Testnets.mainnet]: {
    jumpstartContracts: {
      'celo-mainnet': {
        contractAddress: '0xa73dcf69f028669c2b4d4077b848b9f3c1f871ef',
        depositERC20GasEstimate: '400000',
        retiredContractAddresses: [],
      },
    },
    maxAllowedSendAmountUsd: 100,
  },
  [Testnets.alfajores]: {
    jumpstartContracts: {
      'celo-alfajores': {
        contractAddress: '0xf25a016e53644eefe4a167ff05482213bcd627ed',
        depositERC20GasEstimate: '300000',
        retiredContractAddresses: [],
      },
    },
    maxAllowedSendAmountUsd: 100,
  },
}[DEFAULT_TESTNET as Testnets]

export const DynamicConfigs = {
  // Unusued in SheFi
  [StatsigDynamicConfigs.USERNAME_BLOCK_LIST]: {
    configName: StatsigDynamicConfigs.USERNAME_BLOCK_LIST,
    defaultValues: {
      blockedAdjectives: [] as string[],
      blockedNouns: [] as string[],
    },
  },
  [StatsigDynamicConfigs.WALLET_NETWORK_TIMEOUT_SECONDS]: {
    configName: StatsigDynamicConfigs.WALLET_NETWORK_TIMEOUT_SECONDS,
    defaultValues: {
      default: 15,
      cico: 30,
    },
  },
  [StatsigMultiNetworkDynamicConfig.MULTI_CHAIN_FEATURES]: {
    configName: StatsigMultiNetworkDynamicConfig.MULTI_CHAIN_FEATURES,
    defaultValues: {
      showCico: ALL_NETWORKS,
      showBalances: ALL_NETWORKS,
      showSend: ALL_NETWORKS,
      showSwap: ALL_NETWORKS,
      showTransfers: ALL_NETWORKS,
      showWalletConnect: ALL_NETWORKS,
      showApprovalTxsInHomefeed: CELO_ETH_NETWORKS,
      showNfts: CELO_ETH_NETWORKS,
      showPositions: CELO_ETH_NETWORKS,
      showShortcuts: CELO_ETH_NETWORKS,
    },
  },
  [StatsigDynamicConfigs.DAPP_WEBVIEW_CONFIG]: {
    configName: StatsigDynamicConfigs.DAPP_WEBVIEW_CONFIG,
    defaultValues: {
      disabledMediaPlaybackRequiresUserActionOrigins: [] as string[],
    },
  },
  [StatsigDynamicConfigs.SWAP_CONFIG]: {
    configName: StatsigDynamicConfigs.SWAP_CONFIG,
    defaultValues: {
      maxSlippagePercentage: '1.0',
      enableAppFee: false,
      popularTokenIds: [
        'ethereum-mainnet:native',
        'ethereum-mainnet:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        'ethereum-mainnet:0xdac17f958d2ee523a2206206994597c13d831ec7',
        'ethereum-mainnet:0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        'ethereum-mainnet:0x6b175474e89094c44da98b954eedeac495271d0f',
        'celo-mainnet:native',
        'celo-mainnet:0x765de816845861e75a25fca122bb6898b8b1282a',
        'celo-mainnet:0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73',
        'celo-mainnet:0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e',
        'celo-mainnet:0xceba9300f2b948710d2653dd7b07f33a8b32118c',
      ],
    },
  },
  [StatsigDynamicConfigs.CICO_TOKEN_INFO]: {
    configName: StatsigDynamicConfigs.CICO_TOKEN_INFO,
    defaultValues: CICO_TOKEN_INFO,
  },
  [StatsigDynamicConfigs.WALLET_JUMPSTART_CONFIG]: {
    configName: StatsigDynamicConfigs.WALLET_JUMPSTART_CONFIG,
    defaultValues: WALLET_JUMPSTART_CONFIG,
  },
  // Not used in SheFi
  [StatsigDynamicConfigs.NFT_CELEBRATION_CONFIG]: {
    configName: StatsigDynamicConfigs.NFT_CELEBRATION_CONFIG,
    defaultValues: {
      celebratedNft: {} as { networkId?: NetworkId; contractAddress?: string },
      deepLink: '',
      rewardExpirationDate: new Date(0).toISOString(),
      rewardReminderDate: new Date(0).toISOString(),
    },
  },
  // I can't find where this is actually used; I think it's currently not used anywhere
  [StatsigDynamicConfigs.EARN_STABLECOIN_CONFIG]: {
    configName: StatsigDynamicConfigs.EARN_STABLECOIN_CONFIG,
    defaultValues: {
      providerName: 'Aave',
      providerLogoUrl: '',
      providerTermsAndConditionsUrl: '',
      depositGasPadding: 0,
      approveGasPadding: 0,
      withdrawGasPadding: 0,
      rewardsGasPadding: 0,
      moreAavePoolsUrl: '',
    },
  },
  // TODO(mobilestack): Update this; not sure what these ought to be.
  [StatsigDynamicConfigs.APP_CONFIG]: {
    configName: StatsigDynamicConfigs.APP_CONFIG,
    defaultValues: {
      minRequiredVersion: '0.0.0',
      links: {
        web: 'https://valora.xyz/',
        tos: 'https://valora.xyz/terms',
        privacy: 'https://valora.xyz/privacy',
        faq: 'https://valora.xyz/faq',
        funding: 'https://valora.xyz/fund-wallet',
        forum: 'https://forum.celo.org/c/valora/8',
        swapLearnMore: 'https://valora.xyz/support/swap-learn-more',
        transactionFeesLearnMore: 'https://valora.xyz/support/transaction-fees-learn-more',
        inviteRewardsNftsLearnMore: 'https://valora.xyz/support/invite-rewards-nfts-learn-more',
        inviteRewardsStableTokenLearnMore:
          'https://valora.xyz/support/invite-rewards-stabletoken-learn-more',
        earnStablecoinsLearnMore: 'https://valora.xyz/stablecoin-earn',
      },
    },
  },
} satisfies {
  [key in StatsigDynamicConfigs | StatsigMultiNetworkDynamicConfig]: {
    configName: key
    defaultValues: { [key: string]: StatsigParameter }
  }
}
