import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import { Menu, Icon, Segment, Sidebar, Container, Grid } from 'semantic-ui-react';
import {Media, MediaContextProvider} from '../utils/media';

function MyApp({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <Component {...pageProps} />
    </MediaContextProvider>
  );
}

export default MyApp