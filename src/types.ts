export type ProjectType = 'project' | 'tooling';

// Add more tags as needed
export type Tag = 
| 'AMM' 
| 'NFT' 
| 'DeFi' 
| 'DAO' 
| 'L2' 
| 'DEX'
| 'Wallet' 
| 'Gaming'
| 'Bridge' 
| 'Yield' 
| 'Staking' 
| 'Oracles' 
| 'Identity' 
| 'Interoperability' 
| 'Token API'
| 'NFT API'
| 'AA'
| 'RPC'
| 'Indexing'
| 'Data'


export interface Project {
  type: ProjectType;
  name: string;
  blurb: string; // 50 words max
  logo: string; // path to square 250x250 image
  banner: string; // path to 1500x500 image
  x?: string; // X url
  website?: string; // website url
  docs?: string; // documentation url
  tags: Tag[]; // project tags for filtering/categorization
}