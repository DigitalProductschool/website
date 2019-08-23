import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../../seo';
import { useState, useEffect } from 'react';

// can't use as <img /> because we want to be able to dynamically change
// the fill color
const HamburgerIcon = () => (
  <svg width="30px" height="30px" viewBox="0 0 60 51" version="1.1">
    <title>Group</title>
    <desc>Created with Sketch.</desc>
    <g
      id="Navigation"
      stroke="none"
      stroke-width="1"
      fill="currentColor"
      fill-rule="evenodd"
    >
      <g
        id="Home_Navigation_Mobile"
        transform="translate(-618.000000, -78.000000)"
        stroke="currentColor"
        stroke-width="6"
      >
        <g id="Group" transform="translate(618.000000, 81.000000)">
          <path d="M0,0.5 L60,0.5" id="Line"></path>
          <path d="M0,22.5 L60,22.5" id="Line-Copy"></path>
          <path d="M0,44.5 L60,44.5" id="Line-Copy-2"></path>
        </g>
      </g>
    </g>
  </svg>
);

const CloseIcon = () => (
  <svg width="30px" height="30px" viewBox="0 0 48 47" version="1.1">
    <title>Group</title>
    <desc>Created with Sketch.</desc>
    <g
      id="Navigation"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Home_Navigation_Mobile_Subnavi-close"
        transform="translate(-624.000000, -80.000000)"
        stroke="currentColor"
        stroke-width="6"
      >
        <g id="Group" transform="translate(625.566757, 81.066757)">
          <path
            d="M-7.56675683,22.5 L52.4332432,22.5"
            id="Line-Copy-3"
            transform="translate(22.433243, 22.500000) rotate(45.000000) translate(-22.433243, -22.500000) "
          ></path>
          <path
            d="M-8,22.5 L52,22.5"
            id="Line-Copy-4"
            transform="translate(22.000000, 22.500000) scale(-1, 1) rotate(45.000000) translate(-22.000000, -22.500000) "
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const addClass = props.addClass || '';
  const logo = props.logo || '/assets/shared/dps-logo-white.svg';
  const menuIconColor = addClass === 'nav--black' ? 'black' : 'white';

  useEffect(() => {
    if (isOpen) {
      document
        .getElementsByTagName('body')[0]
        .classList.add('u-disable-scroll');
    } else {
      document
        .getElementsByTagName('body')[0]
        .classList.remove('u-disable-scroll');
    }
  }, [isOpen]);

  console.log({ isOpen, setIsOpen });

  return (
    <nav className={`nav ${addClass}`}>
      <Seo />
      <div
        className={`nav__content u-content ${addClass} nav__content--desktop`}
      >
        <Link to="/">
          <img alt="nav-logo" className="nav__logo" src={`${logo}`} />
        </Link>
        <ul className="nav__menu">
          <li className="nav__menu__item">
            <Link to="/"> Home </Link>
          </li>
          <li className="nav__menu__item">
            <Link to="/our-program"> Our Program </Link>
          </li>
          <li className="nav__menu__item">
            <Link to="/apply"> Apply </Link>
          </li>
          <li className="nav__menu__item">
            <Link to="/faq"> FAQ </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: '86px',
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0, 0.56)',
          }}
        ></div>
      )}
      <div
        className={`nav__content u-content ${addClass} nav__content--mobile`}
      >
        <Link to="/">
          <img alt="nav-logo" className="nav__logo" src={`${logo}`} />
        </Link>
        {!isOpen && (
          <span
            className="nav__hamburger-icon"
            onClick={() => setIsOpen(_isOpen => !_isOpen)}
            style={{ color: menuIconColor }}
          >
            <HamburgerIcon />
          </span>
        )}
        {isOpen && (
          <span
            className="nav__hamburger-icon"
            onClick={() => setIsOpen(_isOpen => !_isOpen)}
            style={{ color: menuIconColor }}
          >
            <CloseIcon />
          </span>
        )}
        <ul
          className={`nav__menu nav__menu--mobile ${
            isOpen ? 'nav__menu--mobile-open' : ''
          }`}
        >
          <li
            className="nav__menu__item nav__menu__item--mobile"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/"> Home </Link>
          </li>
          <li
            className="nav__menu__item nav__menu__item--mobile"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/our-program"> Our Program </Link>
          </li>
          <li
            className="nav__menu__item nav__menu__item--mobile"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/apply"> Apply </Link>
          </li>
          <li
            className="nav__menu__item nav__menu__item--mobile"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/faq"> FAQ </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
