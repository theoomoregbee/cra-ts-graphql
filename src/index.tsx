import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloProvider,
  HttpLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const graphQLink = new HttpLink({
  uri: "https://graphql-weather-api.herokuapp.com/",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: graphQLink,
  cache,
  credentials: "include",
  resolvers: {},
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
