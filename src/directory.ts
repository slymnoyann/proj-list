import { APPS } from './apps';
import { GAMES } from './games';
import { TOOLS } from './tools';
import { Project } from './types';

export const projects: Project[] = [
  ...APPS,
  ...GAMES,
  ...TOOLS,
];