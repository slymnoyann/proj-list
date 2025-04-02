# Contributing to RISE Project Directory

This repository serves as a directory of all RISE apps, tools, and infrastructure that will be displayed on the RISE website.

## How to Add Your Project

1. **Fork this repository** and create a new branch for your addition.

2. **Add your project logo and banner images**:
   - Create a directory for your project: `projects/your-project-name/`
   - Add a square logo (250x250px): `projects/your-project-name/logo.png`
   - Add a banner image (1500x500px): `projects/your-project-name/banner.png`

3. **Update the directory**:
   - Add your project to `src/directory.ts`
   - Follow the existing format and provide all required fields

   Example:
   ```typescript
   {
     type: 'project', // Choose from: 'project', 'infrastructure', or 'tooling'
     name: 'Your Project Name',
     oneLiner: 'A short, catchy description (one sentence)',
     blurb: 'A detailed description of your project (max 150 words)',
     logo: '/projects/your-project-name/logo.png',
     banner: '/projects/your-project-name/banner.png',
   }
   ```

4. **Submit a pull request** with your changes.

## Requirements

- Images must be in PNG format
- Logo must be 250x250px square
- Banner must be 1500x500px
- Blurb should be 150 words maximum
- All fields are required

## Review Process

Once you submit your PR, the RISE team will review your submission. We may request changes if necessary. After approval, your project will be added to the official RISE website directory.