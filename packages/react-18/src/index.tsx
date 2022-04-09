import { createRoot } from 'react-dom/client';
import React from 'react';

import { log } from '@react-18/utils/log';
import { App } from '@react-18/App';

const appId = process.env.APP_ID;

if (!appId) {
  throw new Error('APP_ID is not defined');
}

const container = document.querySelector(`#${appId}`);

if (!container) {
  throw new Error('container is not defined');
}

const root = createRoot(container);

log(`Hello from react ${React.version}`);

root.render(<App />);
