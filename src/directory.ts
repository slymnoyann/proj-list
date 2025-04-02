import { Project } from './types';

export const projects: Project[] = [
  // Projects
  {
    type: 'project',
    name: 'GasPump',
    blurb: 'Gaspump is a concentrated liquidity DEX in the Rise ecosystem, optimizing capital efficiency and minimizing slippage through narrow liquidity ranges. Dynamic fees and smart liquidity tools enhance trading and boost returns for liquidity providers.',
    logo: '/projects/gaspump/logo.png',
    banner: '/projects/gaspump/banner.png',
    x: 'https://x.com/Gaspump_swap',
    // website: '',
    tags: ['DeFi', 'AMM', 'DEX'],
  },
  {
    type: 'project',
    name: 'For The Kingdom',
    blurb: "For The Kingdom is a web based MMORPG with a player driven economy and fully onchain gameplay. Players can risk tokens, create and monetize assets, and build custom logic and mods. Everything from game logic to world state lives on the blockchain.",
    logo: '/projects/forthekingdom/logo.png',
    banner: '/projects/forthekingdom/banner.png',
    x: 'https://x.com/4thekingdom_xyz',
    website: 'https://forthekingdom.xyz/',
    docs: 'https://docs.forthekingdom.xyz/ftk',
    tags: ['Gaming'],
  },
  // Tooling
  {
    type: 'tooling',
    name: 'Alchemy',
    blurb: 'Alchemy is a leading Web3 development platform that provides powerful tools and infrastructure for building decentralized applications.',
    logo: '/projects/alchemy/logo.png',
    banner: '/projects/alchemy/banner.png',
    website: 'https://alchemy.com/',
    tags: ['RPC', 'AA', 'NFT API', 'Token API', 'Data'],
  },
  {
    type: 'tooling',
    name: 'Goldsky',
    blurb: "Goldsky is Web3’s Realtime Data Platform. Build powerful dApps faster with high-performance blockchain indexing, instant subgraphs, and custom data streaming pipelines.",
    logo: '/projects/goldsky/logo.png',
    banner: '/projects/goldsky/banner.png',
    website: 'https://goldsky.com/',
    tags: ['Indexing', 'Data'],
  },
];
