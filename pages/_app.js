/* eslint-disable react/prop-types */
import React from "react";
import { ThemeProvider } from "next-themes";
import '../styles/globals.css';
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  
  )
}

export default MyApp
