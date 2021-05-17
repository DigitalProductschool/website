import * as React from 'react';

import Nav from '../../shared/nav/index';
import Header from '../../shared/header/section';
import HeaderContentInside from '../../shared/header/content-inside-header';

interface IHeaderProps {
  headerType: string;
}

class HomeHeader extends React.Component<IHeaderProps, {}> {
  render() {
    return (
      <React.Fragment>
        <section className="header u-content-wrapper">
          <Nav />
          {this.props.headerType == 'Photo' ? (
            <Header image="/assets/home/header/header.jpg">
              Master your project. Become
              <span className="u-outline"> experienced.</span>
              <HeaderContentInside
                description="The Digital Product School Munich is where interdisciplinary teams learn how to build digital products that solve real-world problems."
                buttonText="Apply"
                buttonUrl="/apply"
                target="_self"
              />
            </Header>
          ) : (
            <div className="u-content header-content">
              <video autoPlay muted loop className="cover__video">
                <source src="/assets/home/header/header.mp4" type="video/mp4" />
              </video>
              <h1 className="header-section__content__title">
                {' '}
                Master your project. Become
                <span className="u-outline"> experienced.</span>
              </h1>
              <HeaderContentInside
                description="The Digital Product School Munich is where interdisciplinary teams learn how to build digital products that solve real-world problems."
                buttonText="Apply"
                buttonUrl="/apply"
                target="_self"
              />
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default HomeHeader;
