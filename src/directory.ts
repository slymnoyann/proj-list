import { APPS } from './apps';
import { COLLECTIONS } from './collections';
import { GAMES } from './games';
import { TOOLS } from './tools';
import { Project } from './types';

export const projects: Project[] = [
  ...APPS,
  ...GAMES,
  ...COLLECTIONS,
  ...TOOLS,
];