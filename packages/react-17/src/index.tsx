import React from 'react';
import { render } from 'react-dom';

import { log } from '@react-17/utils/log';
import { App } from '@react-17/App';

const appId = process.env.APP_ID;

if (!appId) {
  throw new Error('APP_ID is not defined');
}

const container = document.querySelector(`#${appId}`);

render(<App />, container);

log('Hello from react');
