# ABC Game

An interactive alphabet learning application built with Ionic and React. This app displays all the letters of the alphabet (A-Z) and shows related images when a letter is clicked. It also features voice pronunciation capabilities using the Web Speech API.

![ABC Game Screenshot](screenshot/Screenshot%202025-04-06%20191646.png)

## Features

- Interactive alphabet display (A-Z)
- Shows 2-3 relevant images when a letter is clicked
- Voice pronunciation of letters and words using Web Speech API
- Responsive design that works on various device sizes
- Uses online images from Unsplash (no need to download images)

## Prerequisites

- Node.js 14.x or higher
- npm or yarn
- Internet connection (for loading online images)

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

## Running the Application

To start the development server:

```bash
ionic serve
```

The application will be available at `http://localhost:8100`.

## Image Sources

This application uses images from Unsplash, a free image service. The images are loaded directly from their URLs, so no download is necessary. If you want to use different images or add your own, you can modify the URLs in the `src/data/alphabet-data.ts` file.

## Voice API

This application uses the Web Speech API, which is built into modern browsers. No additional setup is required for the voice functionality to work. Users need to allow microphone access for voice recognition features.

## Building for Production

To build the app for production:

```bash
npm run build
# or
yarn build
```

## License

[MIT](LICENSE)
