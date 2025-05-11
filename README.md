# MEvans AI Workbook Presentation

A React-based interactive presentation showcasing AI research, concepts, and personal projects developed using AI tools.

## Overview

This application is a web-based presentation with multiple sections covering:

1. **User Research** - Findings from interviews with professionals about their AI usage
2. **Concepts & Content** - Exploration of the "Chatphone" concept and curated AI resources
3. **Vibe Coding** - A workflow for building applications with AI assistance
4. **Summary & What's Next** - Conclusions and future directions for AI technology

## Features

- Interactive slide navigation with keyboard controls
- Hierarchical navigation menu with sections and subsections
- Multiple slide layouts for different content types
- Project showcase with links to live demos
- Responsive design for different screen sizes

## Installation

```bash
# Clone the repository
git clone [repository-url]
cd ai-research-presentation

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Usage

- Navigate slides using arrow keys, space bar, or on-screen controls
- Access the navigation menu by clicking "Menu" in the header
- Click on sections to expand/collapse subsections
- View live project demos by clicking on project cards

## Tech Stack

- React
- React Router
- CSS for styling
- SVG for interactive diagrams

## Development

The application is structured around a central `presentationData` object that defines all sections, subsections, and slides. To add or modify content, update this data structure in `src/App.js`.

## Deploy

The application is configured for deployment on Vercel. A live version is available at:
https://ai-research-presentation.vercel.app/section/intro/0

## License

MIT
