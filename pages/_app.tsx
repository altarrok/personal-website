import React, { Component } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <AnimatePresence mode="wait" initial={false}>
    <Component {...pageProps} />
  </AnimatePresence>
);

export default MyApp;
