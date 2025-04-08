# Movie Database App

A React Native mobile application that allows users to browse and manage their movie watchlist.

## Features

- Browse movies by categories:
  - Now Playing
  - Upcoming 
  - Popular
- View detailed information about specific movies
- Manage personal watchlist:
  - Add movies to watchlist
  - Remove movies from watchlist

### Installation

1. **Install Node.js**: Download and install Node.js from the [official website](https://nodejs.org/).
2. **Install React Native CLI**: Run `npm install -g react-native-cli` to install the React Native command line interface.
3. **Set up your development environment**: Follow the [React Native Environment Setup Guide](https://reactnative.dev/docs/environment-setup) for detailed instructions.

### Project Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd MovieApplication
   ```
2. **Install dependencies**:
   ```bash
   npm install
   cd ios && pod install && cd .. # For iOS
   ```

### Running the Application

- **iOS**:
  1. Open the project in Xcode.
  2. Select a simulator and click the run button.
  3. Alternatively, use the command line:
     ```bash
     npx react-native run-ios
     ```

- **Android**:
  1. Open Android Studio and start an emulator.
  2. Use the command line:
     ```bash
     npx react-native run-android
     ```

### Troubleshooting

- **Metro Bundler not starting**: Ensure all dependencies are installed and try running `npm start`.
- **Build errors**: Check for any missing dependencies or incorrect configurations in Xcode or Android Studio.
- **Simulator/Emulator issues**: Ensure the simulator/emulator is running and properly configured in your development environment.
