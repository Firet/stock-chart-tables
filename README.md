This is React web application for visualizing stock price charts.

## Technologies Used
- [React](https://react.dev/)
- [Redux toolkit](https://redux-toolkit.js.org/) to manage state
- [Axios](https://axios-http.com/)
- [Highcharts](https://www.highcharts.com/) to make graphs
- Consume finantial data from [Twelvedata api](https://twelvedata.com/)

## How to Run the Application

Requirements: Have [node js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) installed.

Run:
- `npm install` 
and then
- `npm start`

> **Note:** if npm start doesn't work try with `npm start --openssl-legacy-provide`.

- Get your api key by creating an account in [Twelvedata](https://twelvedata.com/)

- Create an `.env` file and store your api key in a variable named `REACT_APP_API_KEY`

- Finally, open http://localhost:3000 with your browser to see the result

That's it! 