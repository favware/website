import React, { useEffect, useState, PropsWithChildren } from 'react';

export default ({ children }: PropsWithChildren<unknown>) => {
  const [isComponentMounted, setIsComponentMounted] = useState(false);

  // We don't want to send 'react-dom/server' to the client
  let ReactDOMServer;
  if (typeof window === 'undefined') {
    ReactDOMServer = require('react-dom/server');
  }

  useEffect(() => setIsComponentMounted(true), []);

  if (!ReactDOMServer || !isComponentMounted) {
    return null;
  }

  const staticMarkup = ReactDOMServer.renderToStaticMarkup(children);
  return <noscript dangerouslySetInnerHTML={{ __html: staticMarkup }} />;
};
