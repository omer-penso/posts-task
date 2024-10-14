# React Posts Feed

## Description
This project is a React application that fetches posts from the JSONPlaceholder API. Users can filter posts by authors, navigate through paginated results, and enjoy a responsive design suitable for various screen sizes.

## Features
- Fetches posts from an external API
- Filter posts by selected authors
- Pagination to navigate through posts
- Responsive design for mobile and desktop views

## Technologies Used
- React
- JavaScript
- CSS
- JSONPlaceholder API
- React Select for multi-select dropdown

## File Structure
- `src/`
  - `components/` - Contains React components for the application.
    - `Feed.js` - Main component for displaying the feed of posts.
    - `PostList.js` - Component for rendering a list of posts.
    - `Post.js` - Component for individual posts
  - `hooks/` - Contains custom hooks.
    - `useFetch.js` - Custom hook for fetching data from APIs.
  - `styles/` - Contains CSS files for styling the components.
    - `Feed.css` - Styles for the Feed component.
    - `Post.css` - Styles for individual Post components.
    - `PostList.css` - Styles for the PostList component.
    - `index.css` - Global styles for the application.
  - `App.js` - Main application file.
  - `index.js` - Entry point of the application.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/omer-penso/paypal-task.git
   cd paypal-task
2.Install dependencies:
  ```bash
  npm install
3.Start the development server:
  ```bash
  npm start

## Usage
- Open the application in your browser at http://localhost:3000.
- Select authors from the dropdown to filter the displayed posts.
- Use the pagination buttons to navigate through the posts.
