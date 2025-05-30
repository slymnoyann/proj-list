import { projects } from '../directory';
import fs from 'fs';
import path from 'path';

describe('Projects Directory', () => {
  test('projects array should not be empty', () => {
    expect(projects.length).toBeGreaterThan(0);
  });
  
  test('each project should have required fields', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('type');
      expect(project).toHaveProperty('name');
      expect(project).toHaveProperty('blurb');
      expect(project).toHaveProperty('logo');
      expect(project).toHaveProperty('banner');
      expect(project).toHaveProperty('tags');
    });
  });
  
  test('project types should be valid', () => {
    const validTypes = ['project', 'tooling', 'gaming', 'nft-collection'];
    projects.forEach(project => {
      expect(validTypes).toContain(project.type);
    });
  });
  
  test('tags should be an array of strings', () => {
    projects.forEach(project => {
      expect(Array.isArray(project.tags)).toBe(true);
      project.tags.forEach(tag => {
        expect(typeof tag).toBe('string');
      });
    });
  });
  
  test('project image paths should be correct and files should exist', () => {
    const rootDir = process.cwd();
    
    projects.forEach(project => {
      try {
        // Check logo path format - allow any image name pattern 
        // but enforce directory structure
        expect(project.logo).toMatch(
          /^\/projects\/[\w-]+\/[\w-]+\.(png|jpg|jpeg|webp|svg)$/
        );
        
        // Check banner path format - allow any image name pattern 
        // but enforce directory structure
        expect(project.banner).toMatch(
          /^\/projects\/[\w-]+\/[\w-]+\.(png|jpg|jpeg|webp|svg)$/
        );
        
        // Check if files exist in filesystem by removing the leading slash
        const logoPath = path.join(rootDir, project.logo.substring(1));
        const bannerPath = path.join(rootDir, project.banner.substring(1));
        
        expect(fs.existsSync(logoPath)).toBe(true);
        expect(fs.existsSync(bannerPath)).toBe(true);
      } catch (error) {
        console.error(`Test failed for project: ${project.name}`);
        throw error;
      }
    });
  });
});