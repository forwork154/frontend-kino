import App from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { withRouter } from 'next/router';
import withRedux from 'next-redux-wrapper';

import '../utils/i18n';

// import '../assets/css/markdown.css';
// import '../assets/css/main.css';

import initStore from '../utils/redux';
import { routing } from '../routes';
import { RouteHandler, Header, Footer, Onload } from '../containers';

class MyApp extends App {
  // Fetching serialized(JSON) store state
  static async getInitialProps({ Component, ctx }) {
    await routing({ ...ctx });
    const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store, router } = this.props;

    return (
      <ReduxProvider store={store}>
        <RouteHandler />
        <Onload />
        {router.pathname === '/payment' ? (
          <Component {...pageProps} />
        ) : (
          <div id="Wrapper">
            <Header />
            <div id="Content">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        )}
      </ReduxProvider>
    );
  }
}

export default withRouter(withRedux(initStore, { debug: false })(MyApp));
