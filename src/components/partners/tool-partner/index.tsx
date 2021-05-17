import * as React from 'react';

class ToolPartner extends React.Component {
  render() {
    return (
      <section className="tool-partner u-content-wrapper">
        <div className="tool-partner__content u-content">
          <h3 className="u-title uppercase">TOOL PARTNERS</h3>
          <div className="tool-partner__content__logos">
            <img
              alt="Eyequant"
              title="Eyequant, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/partners/eyequant.jpg"
            />
            <img
              alt="Invision"
              title="Invision, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/partners/invision.jpg"
            />
            <img
              alt="UXPIN"
              title="UXPIN, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/partners/uxpin.jpg"
            />
            <img
              alt="github"
              title="github, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/partners/github.jpg"
            />
          </div>
          <div
            style={{
              marginTop: '120px',
              marginBottom: '60px',
            }}
          >
            <h3 className="u-title uppercase">ENABLERS &amp; SUPPORTERS</h3>
            <div className="enabler-partner-wrapper">
              <div className="enabler-partner">
                <h6>part of the </h6>
                <div>
                  <img
                    alt="Mobility Hub"
                    title="Digital Product School is part of the Digital Hub Mobility by UnternehmerTUM"
                    className="tool-partner__content__logo"
                    src="/assets/partners/mobilityhub.jpg"
                  />
                </div>
              </div>

              <div className="enabler-partner">
                <h6>in cooperation with </h6>
                <img
                  alt="Technical University of Munich (TUM)"
                  title="Digital Product School is conducted in cooperation with the Technical University of Munich (TUM)"
                  className="tool-partner__content__logo"
                  src="/assets/partners/tum.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ToolPartner;
