export type ProjectType = 'project' | 'infrastructure' | 'tooling';

export interface Project {
  type: ProjectType;
  name: string;
  oneLiner: string;
  blurb: string; // 150 words max
  logo: string; // path to square 250x250 image
  banner: string; // path to 1500x500 image
}