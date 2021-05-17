import React from 'react';
import Footer from '../components/shared/footer/index';
import Nav from '../components/shared/nav/index';
import CookieWarning from '../components/shared/cookie-warning';
import '../styles.css';

const NotFoundPage = () => (
  <React.Fragment>
    <CookieWarning />
    <Nav addClass={'nav--black'} logo={'/assets/shared/dps-logo-black.svg'} />
    <section className="not-found u-content-wrapper">
      <div className="not-found__content u-content">
        <h2 className="u-title uppercase">Sad times :(</h2>
        <img
          alt="Annina Sad"
          className="not-found_content-image"
          src="/assets/shared/not-found.jpg"
        />
        <div className="apply-now__content__description">
          <p className="u-text not-found__content-text">
            We are not able to find the page you are looking for.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </React.Fragment>
);

export default NotFoundPage;
