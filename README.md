# Contacts Application

A responsive React application for browsing contacts fetched from JSONPlaceholder API.

## Features

- ✅ Fetches contacts from JSONPlaceholder API (`https://jsonplaceholder.typicode.com/users`)
- ✅ Responsive grid layout that works on all devices
- ✅ Clean, minimal grey aesthetic design
- ✅ Loading states and error handling
- ✅ Modern typography using Inter font
- ✅ Hover effects and smooth transitions
- ✅ No external dependencies beyond React

## Technologies Used

- **React 19.1.1** - Frontend framework
- **CSS3** - Styling with modern features
- **JSONPlaceholder API** - Mock data source
- **Inter Font** - Modern typography

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd contacts-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
contacts-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ContactsList.jsx    # Main contacts list component
│   │   ├── ContactsList.css    # Styles for contacts list
│   │   ├── ContactCard.jsx     # Individual contact card
│   │   └── ContactCard.css     # Styles for contact cards
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global app styles
│   └── index.js               # App entry point
├── package.json
└── README.md
```

## API Information

The application fetches data from JSONPlaceholder's `/users` endpoint:
- **URL:** `https://jsonplaceholder.typicode.com/users`
- **Method:** GET
- **Response:** Array of 10 user objects with contact information

Each contact includes:
- Name and username
- Email address
- Phone number
- Website
- Company information
- Address details