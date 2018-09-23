import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../src/App';
import store from '../src/redux/store';
import routes from '../src/routes';


export const renderApp = (req, res) => {
  const context = {};
  const { component: { actions = [] } } = routes.find(route => matchPath(req.url, route));
  const promises = actions.map(action => {
    return store.dispatch(action());
  });

  Promise.all(promises)
    .then(() => {
      const html = renderToStaticMarkup(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      res.send(
        `
<html>
    <head>
        <title>Hello world</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script>
            window.__INITIAL_DATA__ = ${JSON.stringify(store.getState())};
        </script>
        <script src="/bundle.js"></script>
    </body>
</html>
  `
      );
    })
    .catch(e => console.log(e));
};