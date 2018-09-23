import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';


export const renderApp = (req, res) => {
  const context = {};
  const html = renderToString(
    <Provider>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );


  return `
<html>
    <head>
        <title>Hello world</title>
    </head>
    <body>
        <div id="root">
            ${html}
        </div>
        <script src="/bundle.js"></script>
    </body>
</html>
  `;
};