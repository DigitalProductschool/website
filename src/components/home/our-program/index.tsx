import * as React from 'react';

class OurProgram extends React.Component {
  render() {
    return (
      <section className="our-program u-content-wrapper">
        <div className="our-program__content u-content">
          <h3 className="our-program__title">Our Program</h3>
          <p className="our-program__description">
            Digital Product School is a full-time training program by
            UnternehmerTUM in Munich, Europe's biggest Entrepreneurship Center.
            There are three batches per year, usually starting in January, May,
            and September – and lasting for 3 months. <br />
            <br />
            It's your chance to build digital products in a diverse and
            cross-functional team – to solve real-world problems around mobility
            and transportation. In a realistic startup environment, we grow the
            next generation of digital product makers. <br />
            <br />
          </p>

          <ul className="our-program__perks">
            <li className="our-program__perks__item">
              <div className="our-program__perks__item__icon-wrapper">
                <img
                  alt="calendar-icon"
                  className="our-program__perks__item__icon-wrapper__img our-program__perks__item__icon-wrapper__img--first"
                  src="/assets/home/our-program/calendar-icon.jpg"
                />
              </div>
              <h4 className="our-program__perks__title">3 Months full-time</h4>
              <p className="our-program__perks__description">
                DPS is all about working in an agile team. You will work in
                weekly sprints and proceed with your product every day. To gain
                these experiences you have to be on-site and continously
                exchange with your team.
              </p>
            </li>
            <li className="our-program__perks__item">
              <div className="our-program__perks__item__icon-wrapper">
                <img
                  alt="scholar-icon"
                  className="our-program__perks__item__icon-wrapper__img our-program__perks__item__icon-wrapper__img--second"
                  src="/assets/home/our-program/scholar-icon.svg"
                />
              </div>
              <h4 className="our-program__perks__title">
                Up to € 2,250 SCHOLARSHIP
              </h4>
              <p className="our-program__perks__description">
                Every applicant who gets accepted will receive a scholarship of
                up to € 750 per month. You can find more about the scholarship
                in our FAQs.
              </p>
            </li>
            <li className="our-program__perks__item">
              <div className="our-program__perks__item__icon-wrapper">
                <img
                  alt="network-icon"
                  className="our-program__perks__item__icon-wrapper__img our-program__perks__item__icon-wrapper__img--third"
                  src="/assets/home/our-program/network-icon.svg"
                />
              </div>
              <h4 className="our-program__perks__title">expand your NETWORK</h4>
              <p className="our-program__perks__description">
                Visit the various other programs of UnternehmerTUM, take part in
                our or other meetups and get in touch with Munich's start-up and
                tech scene.
              </p>
            </li>
          </ul>

          <a className="our-program__button u-button" href="/our-program">
            OUR PROGRAM
          </a>
        </div>
      </section>
    );
  }
}

export default OurProgram;
