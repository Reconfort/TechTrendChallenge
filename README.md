## Overview

**Tech Trend** is a step-based application built using Next.js, Material UI, Redux Toolkit (with RTK Query for GraphQL), and TypeScript. The application allows users to navigate through multiple steps, each representing a different part of the workflow. The app is designed with a modal-based step navigation and fetches data from a GraphQL API.

## Features

- Step-based navigation using Redux for state management
- Dynamic data fetching from a GraphQL API using RTK Query
- Responsive UI built with Material UI and CSS Flexbox
- Custom loading animations and error handling
- Easy-to-navigate user interface with dynamic buttons

## Deployment

The project is deployed and can be accessed at:

**[Live Demo](https://your-deployed-app-link.com)**

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **Material UI**: UI library for styling and component-based design
- **Redux Toolkit**: For managing global state and step transitions
- **RTK Query**: Simplified data fetching with GraphQL support
- **GraphQL**: API for fetching responsibilities data
- **TypeScript**: Type-safe JavaScript for improved code quality and maintainability

## Installation & Setup

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone git@github.com:Reconfort/TechTrendChallenge.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TechTrendChallenge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file in the root directory with the following variables:
   ```bash
   NEXT_PUBLIC_GRAPHQL_API_URL=http://example-graphql-api-url.com
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

The app will be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project follows a modular structure:

- **components/**: Contains all the reusable React components like buttons and the modal dialog.
- **pages/**: Next.js page components.
- **store/**: Redux store configuration and slices.
- **types/**: Contains TypeScript interfaces and type definitions.
- **lib/**: Apollo Client setup and other utility functions.

## Technical Debt & Future Improvements

While the core functionality of the app is in place, there are some areas that require further work:

- **Profile Section**: The Profile section is currently under development and is not fully functional.
- **Step Management**: Step navigation works, but there is room for improvement in handling edge cases, such as navigating back and forth between steps and preserving state correctly.
- **Error Handling**: The app could benefit from improved error handling, particularly in cases where the GraphQL API fails or returns unexpected results.

These areas will be addressed in future updates.