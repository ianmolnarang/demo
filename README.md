## Introduction 

The Stocks/ETFs Broking Platform Android application is a comprehensive and user-friendly platform designed to provide investors with seamless access to the stock and exchange-traded funds (ETFs) market. Developed using React Native, this application offers two key screens that cater to the diverse needs of modern investors.

### Explore Screen
The Explore Screen serves as the central hub for market insights and performance tracking. This screen is divided into two tabs: Top Gainers and Top Losers. Each tab presents a grid of cards that display essential information about the stocks and ETFs, allowing users to quickly identify the top-performing and underperforming assets.

### Product Screen
The Product Screen delves deeper into the details of individual stocks and ETFs. This screen provides users with comprehensive information about the selected asset, including its basic details and a line graph depicting the price movements over time. This feature empowers investors to make informed decisions by analyzing the historical performance and trends of the assets they are interested in.

The Stocks/ETFs Broking Platform Android application is designed to be intuitive, visually appealing, and packed with valuable insights. By leveraging the power of either Kotlin or React Native, the application ensures a seamless and responsive user experience, catering to the needs of both experienced and novice investors.

This application serves as a valuable tool for investors seeking to stay informed, make data-driven decisions, and navigate the dynamic stock and ETF markets with confidence. Its robust features and user-friendly interface make it a compelling choice for anyone looking to manage their investment portfolio on the go.


I have used Alpha Vantage's APIs to fetch the required data for the Stocks/ETFs Broking Platform Android application. Specifically, I leveraged the following endpoints:

- Alpha Intelligence API for retrieving the Top Gainers and Losers data
- Fundamental data API for fetching the Company Overview information
- Core Stocks API for searching and retrieving stock tickers

Alpha Vantage provides a comprehensive set of APIs that cover a wide range of financial data, from traditional asset classes like stocks and ETFs to economic indicators, foreign exchange rates, and commodities.

## Architecture 

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

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

