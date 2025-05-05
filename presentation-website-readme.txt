# AI Research Presentation Website

A React-based slide presentation website for showcasing AI research findings. This website provides a clean, modern interface for presenting research in a slide-by-slide format with deep linking capabilities and responsive design.

## Features

- Slide-by-slide presentation format
- Multiple slide types for different content needs
- Section dividers to organize content
- Deep linking for navigation between sections
- Keyboard navigation (arrow keys)
- Mobile-responsive design
- Social media friendly meta tags

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone this repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

or if using yarn:

```bash
yarn install
```

### Required Dependencies

Make sure to install these dependencies:

```bash
npm install react react-dom react-router-dom
```

or with yarn:

```bash
yarn add react react-dom react-router-dom
```

### Running the Development Server

To start the development server:

```bash
npm start
```

or with yarn:

```bash
yarn start
```

The website will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production build:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

The built files will be in the `build` directory and can be deployed to any static hosting service.

## Project Structure

- `src/App.js` - Main application component and slide content
- `src/App.css` - Styles for the presentation
- `src/index.js` - Entry point for the React application
- `public/index.html` - HTML template with meta tags for social sharing

## Customizing Content

To update the presentation content, edit the `presentationData` object in `src/App.js`. The data structure is organized into sections and slides:

```javascript
const presentationData = {
  title: "Main Title",
  sections: [
    {
      id: "section-id",
      title: "Section Title",
      slides: [
        {
          type: "slide-type",
          title: "Slide Title",
          content: "Slide content..."
          // Additional properties depending on slide type
        }
      ]
    }
  ]
};
```

### Slide Types

The presentation supports various slide types:

- `cover` - Main title slide
- `section-cover` - Section title slide
- `text` - Basic text slide
- `toc` - Table of contents
- `hypothesis` - Research hypothesis presentation
- `methodology` - Research methodology
- `finding` - Research findings with points and quotes
- `thought-experiment` - Featured quote or thought experiment
- `links` - List of external links
- `vibe-coder` - Special layout for the "vibe coder" content

Each slide type has its own layout and styling.

## Deployment

This project can be deployed to any static hosting service such as:

- Netlify
- Vercel
- GitHub Pages
- Amazon S3
- Google Firebase Hosting

## License

This project is available for your use. Please provide attribution if you find it helpful.

## Acknowledgments

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Inter Font Family](https://fonts.google.com/specimen/Inter)
