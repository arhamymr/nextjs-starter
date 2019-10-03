import React from 'react';
import App, { Container } from 'next/app';
import { initStore } from 'Config/store';

// Redux
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'

class MyApp extends App {
  
  constructor(props) {
    super(props);
  }
  
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store} >
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default withRedux(initStore)(MyApp);