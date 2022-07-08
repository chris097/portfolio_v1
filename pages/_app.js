/* eslint-disable react/prop-types */
import React from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import '../styles/globals.css';
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </ThemeProvider>
  
  )
}

export default MyApp
