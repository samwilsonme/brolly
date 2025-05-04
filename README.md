# Brolly

**Your Witty Companion for Navigating the UK Weather**

Trying to predict the UK weather can feel like guessing the outcome of the Great British Bake Off – expect the unexpected, and always be prepared for a soggy bottom. ***Brolly*** is designed to bring clarity (and a bit of British humour) to that age-old question: *"Will I need an umbrella today?"*

This app, crafted with React and a generous helping of British witt, taps into the [OpenWeatherMap](https://openweathermap.org/) API to provide you with the most likely answer. Because, let's be honest, a simple *"Yes"* or *"No"* doesn't quite capture the nuances of weather that can change faster than you can say *"fancy a cuppa?"*

In the UK, the word *"brolly"* is a common slang term for an umbrella.

## Features

- **Local Forecasts**: Get the most accurate weather predictions for your location.
- **Umbrella Guidance**: We provide more than just a binary answer, offering insights like: *"The heavens have well and truly opened - Grab your brolly!"*
- **Weather Overview**: A snapshot of current conditions and temperature.
- **Plan your day**: A forecast covering the next 15 hours, including expected conditions and temperature.
- **Powered by OpenWeatherMap**: Leveraging reliable weather data from OpenWeatherMap.
- **A Touch of British Humour**: Because a bit of wit makes even the gloomiest forecast more bearable.

## Getting Started

Want to have a go at running Brolly yourself? Here's a guide to get you started.

### Prerequisites

- **Node.js**: To run the development server and build the application. Available at [nodejs.org](https://nodejs.org/).
- **npm**: Package manager for installing the necessary bits and pieces (npm is bundled with Node.js).
- **OpenWeatherMap API Key**: Brolly needs this to fetch weather and location data. It's free for personal use. You can obtain your key from [here](https://openweathermap.org/).

### Monorepo Structure

This project uses a **monorepo setup**, meaning both the frontend (React/Vite) and backend (Node.js/Express) live within the same repository but in separate directories. This makes it easier to manage shared configuration, deploy together, and keep everything in one place for simplicity during development.

    brolly/
    ├── client/         # React frontend (Vite)
    ├── server/         # Express backend (Node.js)
    ├── .gitignore
    └── README.md

### 1. Backend Setup (Express API)

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file:

    ```bash
    touch .env
    ```

    Add your API key like this:

    ```
    OPENWEATHER_API_KEY=YOUR_API_KEY_HERE
    ```

4. Start the backend:

    ```bash
    npm run dev
    ```

    The backend will run on `http://localhost:3000` and proxy weather data to keep your API key safe.

### 2. Frontend Setup (React)

1. In a separate terminal, navigate to the client directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend:

    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) to view the app.

## How to Use Brolly

Once the app is up and running, here's how to get your forecast:

1. **Location Search**: Use the search bar to enter a UK location (e.g. "London", "Manchester", "Edinburgh").
2. **Forecast Display**: The app will show the current weather conditions and provide brolly advice, along with a 15-hour forecast.

## Accuracy

We strive to provide the most accurate *"brolly required"* guidance. However, we cannot be held responsible for the UK's famously fickle weather. If you find yourself caught in a downpour despite our assurances, we suggest shaking your fist at the sky, not us. We're merely the messengers.

## Contributing

We welcome contributions! If you'd like to help make Brolly even better, please feel free to submit a pull request.

## Project Background

This project began as my first venture into React, evolving from my JavaScript studies on Codecademy and my involvement in their community. There, I connected with [Andrada](https://github.com/ndrada), who generously offered her support and expertise. Initially envisioned as a vanilla JS application, the project shifted to React after Andrada's experience with the framework inspired me to complete Codecademy's [Learn React: Introduction](https://www.codecademy.com/learn/learn-react-introduction) course in one day. I then created the initial React components for this app, and Andrada and I collaborated to develop it into its current form. I'm incredibly grateful to Andrada for her invaluable contributions and guidance throughout this process.

We plan to continue enhancing ***Brolly***, with future updates including a backend database for more witty brolly advice and other improvements. If you're interested in contributing or have another project idea you'd like to collaborate on, you can find us on the Codecademy community:

- [Sam](https://community.codecademy.com/u/52921cf0)
- [Andrada](https://community.codecademy.com/u/83a8a8f4)