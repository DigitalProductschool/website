import * as React from 'react';
import FacebookCopy from '../../../../../static/assets/home/whats-new/facebook.jpg';
import FacebookOG from '../../../../../static/assets/shared/Batch14.jpg';
import moment from 'moment';

class Facebook extends React.Component {
  state = {
    thumbnail: '',
    link: '',
    time: '',
    desc: '',
  };

  componentDidMount = () => {
    // We could add it as env variable so we have a separated cloud function for production/staging

    fetch(
      'https://europe-west1-dps-website-244212.cloudfunctions.net/whatsnewfacebook'
    )
      .then(res => res.json())
      .then(data => {
        const thumbnail = data.thumbnail;
        const link = data.link;
        const desc = data.desc.match(/((.|\n){1,100}\w)\s/)[1] + ' ...';
        const time = moment(data.time).format('Do MMMM [at] H:mm ');
        this.setState({
          link: link,
          thumbnail: thumbnail,
          desc: desc,
          time: time,
        });
      })
      .catch(error => {
        const thumbnail = FacebookOG;
        this.setState({
          thumbnail: thumbnail,
        });
      });
  };

  render() {
    return (
      <a
        href={this.state.link}
        target="_blank"
        className="whats-new__content__tile u-link"
      >
        <div
          className="whats-new__content__tile__thumb"
          style={{ backgroundImage: `url(${this.state.thumbnail})` }}
        ></div>
        <article>
          <div className="whats-new__content__facebook">
            <div className="item-1">
              <img
                src={FacebookCopy}
                alt="Facebook DPS"
                width="35"
                height="30"
              />
            </div>
            <div className="item-2">
              <h4>Digital Product School</h4>
              <p className="whats-new__content__time">{this.state.time}</p>
            </div>
          </div>
          <p>{this.state.desc}</p>
          <span>Read on Facebook ...</span>
        </article>
      </a>
    );
  }
}

export default Facebook;
