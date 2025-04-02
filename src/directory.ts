import { Project } from './types';

export const projects: Project[] = [
  // Projects
  {
    type: 'project',
    name: 'GasPump',
    blurb: 'Gaspump is a concentrated liquidity DEX built within the Rise ecosystem, focusing on capital efficiency by narrowing liquidity ranges to reduce slippage while enhancing trading execution for users. The platform’s dynamic fee adjustments and liquidity optimization tools ensure a seamless trading experience with maximized returns for liquidity providers. Gaspump’s design fosters a highly efficient ecosystem for traders, ensuring minimal slippage and improved capital utilization through precision liquidity allocation.',
    logo: '/projects/gaspump/logo.png',
    banner: '/projects/gaspump/banner.png',
    tags: ['DeFi', 'AMM', 'DEX'],
  },
  // Tooling
  {
    type: 'tooling',
    name: 'Alchemy',
    blurb: 'Alchemy is a leading Web3 development platform that provides powerful tools and infrastructure for building decentralized applications.',
    logo: '/projects/alchemy/logo.png',
    banner: '/projects/alchemy/banner.png',
    tags: ['RPC', 'AA', 'NFT API', 'Token API', 'Data'],
  },
  {
    type: 'tooling',
    name: 'Goldsky',
    blurb: "Goldsky is Web3’s Realtime Data Platform. Build powerful dApps faster with high-performance blockchain indexing, instant subgraphs, and custom data streaming pipelines.",
    logo: '/projects/goldsky/logo.png',
    banner: '/projects/goldsky/banner.png',
    tags: ['Indexing', 'Data'],
  },
];