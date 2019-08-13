import App, { Container } from "next/app";
import React from "react";
import Helmet from "react-helmet";
import moment from "moment";

import Layout from "../components/Layout";

moment.locale("ko");

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <Container>
        <Helmet title="WeFestivate" />
        <Layout {...other} {...this.state}>
          <Component {...other} {...this.state} />
        </Layout>
      </Container>
    );
  }
}
