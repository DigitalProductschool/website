import * as React from 'react';

const partnerLogos = [
  'bmw.jpg',
  'nokia.jpg',
  'sap.jpg',
  'swm.jpg',
  'aisin.jpg',
  'deutschebahn.jpg',
  'google.jpg',
  'hamburg.jpg',
  'IABG.jpg',
  'infineon.jpg',
  'lhm.jpg',
];

class IndustryPartners extends React.Component {
  render() {
    return (
      <div className="industry-partners u-content-wrapper">
        <div className="industry-partners u-content">
          <h2 className="industry-partners__title u-title uppercase">
            The Digital Hub Mobility and its Industry Partners
          </h2>
          <p className="industry-partners__description">
            The Digital Product School is part of the{' '}
            <a className="u-link" href="https://mobility.unternehmertum.de/">
              <span> Digital Hub Mobility </span>
            </a>{' '}
            . The Digital Hub Mobility connects companies from the mobility
            sector with tech-companies. These companies can set challenges for
            the teams at the Digital Product School. And they provide some of
            the team members for our so-called »Company Teams«. These teams work
            with talents like you to find out how far they can get within three
            months – all the while working lean and agile. Our partners also
            support the teams with technology, access to data and interview
            partners.
          </p>
          <ul className="industry-partners__logos">
            {partnerLogos.map(item => (
              <li key={item} className="industry-partners__logo">
                {' '}
                <img
                  alt={`industry-partner-logo-${item}`}
                  src={`/assets/partners/${item}`}
                />{' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default IndustryPartners;
