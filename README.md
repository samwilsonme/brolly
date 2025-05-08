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

Want to have a go at running Brolly locally for development or contribution? Here's how to get set up.

### Prerequisites

- **Node.js**: Required for running the development environment and managing packages. Download from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager, included with Node.js installation. Used for installing project dependencies.
- **Vercel CLI**: Needed to run the serverless functions locally. Install globally via npm: `npm install -g vercel`. You may need to log in using `vercel login`.
- **OpenWeatherMap API Key**: Brolly fetches weather data via a serverless function that uses the OpenWeatherMap API. Get a free key from [openweathermap.org/](https://openweathermap.org/).

### Project Setup

This project uses [React](https://react.dev/) with [Vite](https://vite.dev/) for the frontend and [Vercel Serverless Functions](https://vercel.com/docs/functions) for secure backend API calls.

### Installation & Configuration

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/brolly.git
    cd brolly
    ```

2.  **Install Dependencies:**
    Install the necessary Node.js packages for both the frontend and the serverless functions
    ```bash
    npm install
    ```

3.  **Configure Environment Variable:**
    The serverless function (`api/getWeather.js`) needs your OpenWeatherMap API key. Create a file named `.env` in the root directory of the project and add your API key to this file.
    ```dotenv
    OPENWEATHERMAP_API_KEY=YOUR_SECRET_API_KEY_HERE
    ```
    **Security:** The `.env` file is listed in `.gitignore` to prevent accidentally committing your secret API key. Keep it safe!

### Running Locally

To run the application locally, you need **two** terminals open: one for the Vercel development server (which runs the serverless function) and one for the Vite development server (which serves the React frontend).

1.  **Terminal 1: Start Vercel Development Server:**
    This command runs your serverless function in the `api` directory locally and proxies requests.
    ```bash
    vercel dev
    ```
    Keep this terminal running. Note the port it starts on (usually `http://localhost:3000`). The Vite proxy is configured to point to this.

2.  **Terminal 2: Start Vite Development Server:**
    This command starts the React application frontend.
    ```bash
    npm run dev
    ```
    Vite will typically start the frontend on `http://localhost:5173` (or the next available port).

3.  **Access the App:**
    Open your web browser and navigate to the address provided by Vite (e.g., `http://localhost:5173`). The React app will make requests to `/api/getWeather`, which Vite will automatically proxy to your `vercel dev` server running on port 3000.

Now you have the Brolly application running locally, using the secure serverless function approach!

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
