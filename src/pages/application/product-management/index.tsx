import * as React from 'react';

import Footer from '../../../components/shared/footer/index';
import CookieWarning from '../../../components/shared/cookie-warning';
import Header from '../../../components/application/header';
import Form from '../../../components/application/form/index';

export default function ApplicationSE() {
  return (
    <React.Fragment>
      <CookieWarning />
      <Header track="pm" />
      <Form track="pm" />
      <Footer addSectionClass="u-section-margin-top" />
    </React.Fragment>
  );
}
