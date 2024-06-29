This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).


## Introduction to the Stocks/ETFs Broking Platform Android Application

The Stocks/ETFs Broking Platform Android application is a comprehensive and user-friendly platform designed to provide investors with seamless access to the stock and exchange-traded funds (ETFs) market. Developed using either Kotlin or React Native, this application offers two key screens that cater to the diverse needs of modern investors.

### Explore Screen
The Explore Screen serves as the central hub for market insights and performance tracking. This screen is divided into two tabs: Top Gainers and Top Losers. Each tab presents a grid of cards that display essential information about the stocks and ETFs, allowing users to quickly identify the top-performing and underperforming assets.

### Product Screen
The Product Screen delves deeper into the details of individual stocks and ETFs. This screen provides users with comprehensive information about the selected asset, including its basic details and a line graph depicting the price movements over time. This feature empowers investors to make informed decisions by analyzing the historical performance and trends of the assets they are interested in.

The Stocks/ETFs Broking Platform Android application is designed to be intuitive, visually appealing, and packed with valuable insights. By leveraging the power of either Kotlin or React Native, the application ensures a seamless and responsive user experience, catering to the needs of both experienced and novice investors.

This application serves as a valuable tool for investors seeking to stay informed, make data-driven decisions, and navigate the dynamic stock and ETF markets with confidence. Its robust features and user-friendly interface make it a compelling choice for anyone looking to manage their investment portfolio on the go.


I have used Alpha Vantage's APIs to fetch the required data for the Stocks/ETFs Broking Platform Android application. Specifically, I leveraged the following endpoints:

- Alpha Intelligence API for retrieving the Top Gainers and Losers data[1]
- Fundamental data API for fetching the Company Overview information[1]
- Core Stocks API for searching and retrieving stock tickers[1]

Alpha Vantage provides a comprehensive set of APIs that cover a wide range of financial data, from traditional asset classes like stocks and ETFs to economic indicators, foreign exchange rates, and commodities.


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
