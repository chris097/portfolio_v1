/* eslint-disable react/prop-types */
import React from "react";
import '../styles/globals.css';
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
