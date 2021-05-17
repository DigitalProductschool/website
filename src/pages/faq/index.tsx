import * as React from 'react';

import Nav from '../../components/shared/nav/index';
import Faq from '../../components/faq/index';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';
import logo from '../../../static/assets/shared/dps-logo-white.svg';
import Header from '../../components/shared/header/section';

class FAQ extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav logo={logo} />
        <Header
          image="/assets/faq/background.jpg"
          overlayColor="#fea11f"
          opacity=".65"
        >
          FREQUENTLY ASKED QUESTIONS
        </Header>
        <Faq />
        <Footer />
      </React.Fragment>
    );
  }
}

export default FAQ;
