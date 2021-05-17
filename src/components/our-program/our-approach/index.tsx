import * as React from 'react';

class OurApproach extends React.Component {
  render() {
    return (
      <section className="our-approach u-section-margin-top u-content-wrapper">
        <div className="our-approach__content u-content">
          <h2 className="u-title uppercase">Our approach</h2>
          <p className="u-text u-text--bold">
            According to the Design Thinking Model of the Double Diamond our
            teams discover and validate problems before they search for a
            solution and develop it by permanently testing it.
          </p>
          <img
            alt="double-diamond"
            className="u-image"
            src="/assets/program/our-approach/double-diamond.jpg"
          />
          <ul className="our-approach__process">
            <li className="our-approach__process__step">
              <h4 className="our-approach__process__step__title">
                1. Discover
              </h4>
              <p className="our-approach__process__step__description">
                In order to find a problem that is worth solving, the teams
                explore their problem spaces first. They think about who might
                have a problem and go out to verify it.
              </p>
            </li>
            <li className="our-approach__process__step">
              <h4 className="our-approach__process__step__title">2. Define</h4>
              <p className="our-approach__process__step__description">
                Once the teams identify several problems they decide which one
                provides the biggest opportunity. Often, this is the time for
                first experiments.
              </p>
            </li>
            <li className="our-approach__process__step">
              <h4 className="our-approach__process__step__title">3. Develop</h4>
              <p className="our-approach__process__step__description">
                Once a problem has been decided upon, the teams generate as many
                ideas as they can to solve it.
              </p>
            </li>
            <li className="our-approach__process__step">
              <h4 className="our-approach__process__step__title">4. Deliver</h4>
              <p className="our-approach__process__step__description">
                At this stage, promising solutions are tested and narrowed down,
                allowing students to find out which solution to build. And
                during building further testing ensures the product is build the
                right way.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default OurApproach;
