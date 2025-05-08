# Security Policy

Welcome to Brolly—your witty companion for navigating the UK’s unpredictable weather. We’re a small team of amateur coders learning and building together. While we’re not actively seeking contributions, we value a secure and respectful environment for anyone who interacts with our project.

## Reporting Security Issues

If you discover a security vulnerability in Brolly, please report it by [opening an issue](https://github.com/samwilsonme/brolly/issues) in this repository. We appreciate your help in keeping our project safe.

## Supported Versions

Currently, we do not maintain or support any specific versions of Brolly. [Version 1.0](https://github.com/samwilsonme/brolly/releases/tag/v1.0) was our initial release, built as a standalone React frontend. This version exposed secret API keys for OpenWeatherMap directly in the frontend, posing a significant security risk. Subsequent restructuring addressed this vulnerability by implementing a secure backend.

## Deployment and API Handling

The current Brolly repository is designed for deployment on [Vercel](https://vercel.com/). We leverage [Vercel Functions](https://vercel.com/docs/functions) to securely handle API key management and data fetching from weather services like OpenWeatherMap.

Instead of directly exposing API keys in the frontend code, the React frontend makes requests to our serverless Vercel Functions. These functions, running on the Vercel platform, securely store and utilize the API keys to fetch weather data and then return the relevant information to the frontend. This architecture significantly enhances the security of our application by keeping sensitive API credentials on the server-side.

## Acknowledgments

Thank you for helping us improve the security of Brolly. Your contributions are invaluable to our learning journey.
