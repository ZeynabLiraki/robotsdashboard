# Robots Dashboard

# RobotsDashboard

Simple and Practical Dashboard for Delivery Robots


## Table of Contents

- [RobotsDashboard](#flippityflap)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
  - [Testing](#testing)
  - [Live Demo](#live-demo)
  - [Figma Link](#Figma)
  - [Further Improvements](#further-improvements)

## Introduction
This project is a simple and practical dashboard built with React and TypeScript using Vite. It’s designed for managing and monitoring delivery robots.

The app’s main layout is handled by the AppLayout component, which includes a top navigation bar and a side drawer menu. It reads the current user’s information from localStorage to personalize the interface and highlights the active menu item properly. For routing, I used React Router to load nested pages inside the main layout. Styling is done with Material UI to keep the UI clean, responsive, and user-friendly.

The list of delivery robots is rendered from a local JSON file, and each robot is displayed in a card component. When no data is available, a friendly message and icon are shown using a reusable EmptyState component. Components are structured using React best practices—separating logic and presentation—so the code is easy to maintain and extend later.

Error handling is done using an ErrorBoundary component that wraps around each robot card. If any error occurs in a specific robot card, it doesn’t crash the whole app—instead, a styled error message with a reload button is displayed, improving app stability.

The BatteryIndicator component shows battery status with color indicators: red for low, orange for medium, and green for high. This makes it easy to get a quick idea of the robot’s battery status at a glance.

Location data (latitude and longitude) is visualized using React Leaflet, but maps only render conditionally to prevent performance issues. When a robot’s status is “On Delivery,” a “Map” button appears on the card, and clicking it opens a modal showing the robot’s location on the map. This helps users quickly understand where the robot is without needing to interpret coordinates.


## Technologies Used

Mention the technologies and frameworks used in the project:
- React (with TypeScript)
- Vite
- Material UI 
- styled-components
- React Router
- React Leaflet
- Jest (for testing)

## Setup and Installation

Step-by-step instructions to set up the project locally:

    

1. Clone the repository:

     git clone https://github.com/ZeynabLiraki/robotsdashboard.git

     cd Robots_Dashboard


2. Install dependencies:
    
     npm install
    

2. Start the development server:
    
    npm run dev
    

3. Open the application in your browser that is provided for you:

    http://localhost:5173
    
    
    
## Testing

1. Run the tests:
    
    npm test
    

Provide an overview of the testing framework and approach used.


## Live Demo

You can access the live version of the application here:
[Live Demo](https://robotsdashboard.vercel.app/)
          


## Figma
[Figma Link](https://www.figma.com/design/ysbCZgO4pM09PomGVAyPX3/Untitled?node-id=0-1&p=f&t=DrM4CjFCnitaa7Sd-0)


## Further Improvements

List areas where the project could be improved:

- Add dark mode and theme switching
- Add more tests for edge cases
- Expand map features: route tracking, live robot movement, geofencing
- Improve component-level documentation
- Publish components to an NPM package for reuse
