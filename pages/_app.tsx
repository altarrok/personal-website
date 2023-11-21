import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { robotoRegularFont, theBoldFont } from '../util/localFonts';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <style jsx global>
      {`
        h1,h2,h3,h4,h5 {
          font-family: ${theBoldFont.style.fontFamily};
        }

        p {
          font-family: ${robotoRegularFont.style.fontFamily}
        }
      `}
    </style>
    <Component {...pageProps} />
  </>
);

export default MyApp;
