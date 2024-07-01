## Google Drive Link
Please find apk, video here:
https://drive.google.com/drive/folders/1XP4TglO1BfuMwLwvZHbYTNKorGflnWh3?usp=sharing

## Introduction 

The Stocks/ETFs Broking Platform Android application is a comprehensive and user-friendly platform designed to provide investors with seamless access to the stock and exchange-traded funds (ETFs) market. Developed using React Native, this application offers two key screens that cater to the diverse needs of modern investors.

### Explore Screen
The Explore Screen serves as the central hub for market insights and performance tracking. This screen is divided into two tabs: Top Gainers and Top Losers. Each tab presents a grid of cards that display essential information about the stocks and ETFs, allowing users to quickly identify the top-performing and underperforming assets.

### Product Screen
The Product Screen delves deeper into the details of individual stocks and ETFs. This screen provides users with comprehensive information about the selected asset, including its basic details and a line graph depicting the price movements over time. This feature empowers investors to make informed decisions by analyzing the historical performance and trends of the assets they are interested in.

This application serves as a valuable tool for investors seeking to stay informed, make data-driven decisions, and navigate the dynamic stock and ETF markets with confidence. Its robust features and user-friendly interface make it a compelling choice for anyone looking to manage their investment portfolio on the go.

## About API's

I have used Alpha Vantage's APIs to fetch the required data for the Stocks/ETFs Broking Platform Android application. Specifically, I leveraged the following endpoints:

- Alpha Intelligence API for retrieving the Top Gainers and Losers data
- Fundamental data API for fetching the Company Overview information
- Core Stocks API for searching and retrieving stock tickers

Alpha Vantage provides a comprehensive set of APIs that cover a wide range of financial data, from traditional asset classes like stocks and ETFs to economic indicators, foreign exchange rates, and commodities.

# Features

1. **Explore Screen**
    - **Tabs for Top Gainers and Top Losers**: The Explore Screen serves as the central hub for market insights and performance tracking. It features two tabs:
        1. **Top Gainers**: Displays a grid of cards showing the top-performing stocks/ETFs.
        2. **Top Losers**: Displays a grid of cards showing the underperforming stocks/ETFs.

2. **Product Screen**
    - **Detailed Information**: Provides comprehensive information about individual stocks and ETFs.
    - **Line Graph**: Depicts the price movements over time, allowing users to analyze historical performance and trends.

3. **Data API Integration**
    - **Alpha Intelligence API**: Retrieves Top Gainers and Losers data.
    - **Fundamental Data API**: Fetches the Company Overview information.
    - **Core Stocks API**: Searches and retrieves stock tickers.

4. **Additional Features**
    - **Loading/Error/Empty State Handling**: Ensures the application gracefully handles loading, error, and empty states.
    - **Well-Defined Folder Structure**: Follows a standard, well-defined folder structure for better organization and maintainability.
    - **Third-Party Library for Line Graphs**: Utilizes a third-party library for rendering line graphs.
    - **API Response Caching**: Implements caching with expiration for API responses to improve performance.
    - **Dynamic Theme Switching**: Supports dynamic theme switching between Light and Dark modes.
    - **Categorized Searches**: Allows users to filter searches by "All", "Stocks", and "ETFs" using search bar.
    - **Handled the edge case**, since the API limit is 25 req/day, added a static data which will replace the dynamic data once the req are over, this will prevent the app to break.
  
      
## Architecture 
![image](https://github.com/ianmolnarang/demo/assets/76910737/2a2e6ba3-a415-4cfc-be84-583b962d2b53)




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
# OR using Yarn
yarn android
```

### For iOS

```bash

# OR using Yarn
yarn ios
```


