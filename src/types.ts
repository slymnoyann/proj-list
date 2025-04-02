export type ProjectType = 'project' | 'infrastructure' | 'tooling';

// Add more tags as needed
export type Tag = 
| 'AMM' 
| 'NFT' 
| 'DeFi' 
| 'DAO' 
| 'L2' 
| 'Wallet' 
| 'Bridge' 
| 'Yield' 
| 'Staking' 
| 'Oracles' 
| 'Identity' 
| 'Interoperability' 
| 'Developer Tools'
| 'payments'
| 'crypto'
| 'automotive';


export interface Project {
  type: ProjectType;
  name: string;
  oneLiner: string;
  blurb: string; // 50 words max
  logo: string; // path to square 250x250 image
  banner: string; // path to 1500x500 image
  tags: Tag[]; // project tags for filtering/categorization
}