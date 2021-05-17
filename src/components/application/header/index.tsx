import * as React from 'react';
import BatchDetails from '../../shared/batch-details/batch-details';

import Nav from '../../shared/nav/index';

type trackData = {
  title: string;
  description1: string;
};

const data: {
  se: trackData;
  pm: trackData;
  ixd: trackData;
  ai: trackData;
  pmc: trackData;
  ac: trackData;
} = {
  se: {
    title: 'Software Engineer',
    description1:
      'Apply as Software Engineer now and take in the experience concentrate in digital product development',
  },
  ai: {
    title: 'AI Engineer',
    description1:
      'Apply as AI Engineer now and take in the experience concentrate in digital product development',
  },
  pm: {
    title: 'Product Manager',
    description1:
      'Apply as Product Manager now and take in the experience concentrate in digital product development',
  },
  ixd: {
    title: 'Interaction Designer',
    description1:
      'Apply as Interaction Designer now and take in the experience concentrate in digital product development',
  },
  pmc: {
    title: 'Product Marketing & Communications Manager',
    description1:
      'Apply now as Product Marketing & Communications Manager at Digital Product School and immerse yourself in product marketing and communication!',
  },
  ac: {
    title: 'Agile Team Coach',
    description1:
      'Apply now as Agile Team Coach at Digital Product School and immerse yourself in coaching agile teams!',
  },
};

interface IHeaderProps {
  track: 'se' | 'pm' | 'ixd' | 'ai' | 'pmc' | 'ac';
}

class Header extends React.Component<IHeaderProps, {}> {
  render() {
    const { track } = this.props;

    return (
      <section
        className={`applications__header u-content-wrapper applications__header--${track}`}
      >
        <Nav logo="/assets/shared/dps-logo-white.svg" track={track} />
        <div className="applications__header-content u-content">
          <h1 className="applications__header-content__title">
            APPLY AS <br /> {data[track].title}
          </h1>

          <p className="applications__header-content__description">
            Currently, you can apply for the following batches:{' '}
          </p>
          <p className="applications__header-content__batchDetails">
            <BatchDetails track={track} isCurrentOpenApplications={true} />
          </p>
        </div>
      </section>
    );
  }
}

export default Header;
