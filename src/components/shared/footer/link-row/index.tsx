import * as React from 'react';
import SVG from 'react-inlinesvg';
import { Link } from 'gatsby';

class LinkRow extends React.Component {
  render() {
    return (
      <div className="link_row u-content">
        <div className="link_row__legal">
          <Link to="/legal-disclosure"> Impressum – Legal Notice </Link>
          <Link to="/privacy-policy"> Privacy Policy </Link>
        </div>
        <div className="link_row__social__media">
          <a
            href="https://www.facebook.com/digitalproductschool"
            title="dps facebook link"
          >
            <SVG
              className="link_row__social__media__link"
              src="/assets/shared/footer/facebook.svg"
            ></SVG>
          </a>
          <a href="https://twitter.com/dpschool_io" title="dps twitter link">
            <SVG
              className="link_row__social__media__link"
              src="/assets/shared/footer/twitter.svg"
            ></SVG>
          </a>
          <a
            href="https://www.instagram.com/digitalproductschool/"
            title="dps instagram link"
          >
            <SVG
              className="link_row__social__media__link"
              src="/assets/shared/footer/instagram.svg"
            ></SVG>
          </a>
          <a
            href="https://www.youtube.com/channel/UCvmerSnTMl2ZeoLtuKoONJQ/videos"
            title="dps youtube link"
          >
            <SVG
              className="link_row__social__media__link"
              src="/assets/shared/footer/youtube.svg"
            ></SVG>
          </a>
          <a
            href="https://www.linkedin.com/company/digital-product-school/"
            title="dps linkedin link"
          >
            <SVG
              className="link_row__social__media__link"
              src="/assets/shared/footer/linkedin.svg"
            ></SVG>
          </a>
        </div>
      </div>
    );
  }
}

export default LinkRow;
