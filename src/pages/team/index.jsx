import * as React from 'react';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning/index';
import Nav from '../../components/shared/nav/index';
import Modal from '../../components/shared/modal/index';
import Header from '../../components/shared/header/section';
import HeaderContentBox from '../../components/shared/header/content-box';
import { useState, useEffect } from 'react';

let members = [
  {
    name: 'Afsaneh Asaei',
    title: 'Head of Artificial Intelligence',
    shortDescription: `I advise and coach our teams in exploring AI applications. `,
    description: `I have more than 17 years professional experience in applied artificial intelligence research and development. I completed my PhD at the Swiss Federal Institute of Technology, Lausanne, on the robustness of machine learning in commercial applications. My contributions were recognized via community awards and I was granted several million Euros of national & international funding.<br>
I advise and coach our teams in exploring AI applications, their feasibility and risks during problem-solution fits. In a multi-disciplinary environment, I support the participants to understand how to transform assumptions and data requirements into a product vision, alongside exploring market opportunities and how a data-driven solution should be evaluated. `,
    pic: 'afsaneh.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://www.linkedin.com/in/afsaneh-asaei-490b6621',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Samreen Azam',
    title: 'Digital Marketing & Community Manager',
    shortDescription: `I take care of the social media channels of DPS and the alumni network. `,
    description: `I  am responsible for marketing at Digital Product School (DPS) by creating content for our ongoing social media channels and also reaching out to talents from all around the world who might benefit with opportunity like DPS. <br>
    Apart from that I am currently working on a creative solution to sustain the DPS alumni community. I was part of DPS Batch#5 as a participant myself where I got to work with a team of engineers and built a great product solution. I pursued my Masters degree in Integrated Design from Anhalt University of Applied Sciences, Germany. Also I have previously founded startup projects and worked at Rocket Internet GmbH.`,
    pic: 'samreen.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://www.linkedin.com/in/samreen-azam-803760140/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Daniel Bedö',
    title: 'Head of Software Engineering',
    shortDescription: `I hope with my expertise I can help our teams avoid the same mistakes I made at the beginning of my career.`,
    description: `After receiving my master’s degree in computer science at ELTE in Budapest, I worked as a researcher at the university. Later, I moved to Germany and worked for different companies in the subject areas of machine learning and data analytics before shifting my focus towards people management.<br>
During my time at university I accumulated a lot of knowledge in data structures and algorithms, but it was only when I started working within the industry that I realised how much it takes to be a good software engineer. I hope with my expertise I can help our teams avoid the same mistakes I made at the beginning of my career. `,
    pic: 'daniel.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://www.linkedin.com/in/danielbedo/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Natthagorn Bunnet',
    title: 'Team and Event Manager',
    shortDescription: `I organize all events at DPS and throw the best batch closing parties.`,
    description: `After my dual vocational training as a specialist in media and information services at the publishing house Sueddeutscher Verlag in Munich, I became a junior project manager at the communication agency SZ Scala. During the last 2.5 years, I acquired project management and marketing skills, in particular how to optimize processes efficiently.<br>
My role is to organize all events at DPS and throw the best batch closing parties. Alongside this, I assist the marketing team with operations and I am also the contact person for all matters like office supplies and access cards. `,
    pic: 'natt.jpg',
    social: [
      {
        icon: '/assets/team/insta.svg',
        link: 'https://www.instagram.com/natt_chanida/',
        alt: 'instagram',
      },
    ],
  },
  {
    name: 'Lorenz Hutterer',
    title: 'Product Lead Digital Business Lab',
    shortDescription: `I help the teams to make money through their ideas.`,
    description: `I studied management and technology at Technische Universität München and hustled in startups throughout different industries.<br>
I take care of the business side of projects at DPS and support our teams in how to make money through their ideas. `,
    pic: 'lorenz.jpg',
    social: [
      {
        icon: '/assets/team/xing.svg',
        link: 'https://www.xing.com/profile/Lorenz_Hutterer2/cv',
        alt: 'xing',
      },
    ],
  },
  {
    name: 'Steffen Kastner',
    title: 'Head of Product Management',
    shortDescription: `I love to stir things up with provocative questions.`,
    description: `I am a trained journalist who somehow slipped into product management and user research. I launched the online stores for software and toys for Amazon and made products useful to the customers of Weltbild. I went on to develop dozens of digital products for Haymarket Media and established user research at Gutefrage.net.<br>
I help teams at DPS to spot problems and create ideas that join the dots discovered through user research. I also support them in turning those ideas into reality, plus I love to stir things up with provocative questions. `,
    pic: 'steffen.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://www.linkedin.com/in/steffen-kastner-177494a9/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Tobias Kalkowsky',
    title: 'Agile Coach',
    shortDescription: `I build self organized and fast learning teams.`,
    description: ` After my diploma of media technology I spent a couple of years in the film industry before I completed a management traineeship at Hubert Burda Media and got into classical project management.<br> Meeting Marty Cagan on my way of becoming a product manager was definitely a changing point in my career.
    My aim is to support the participants and the team members to evolve into a self organized and fast learning team.`,
    pic: 'tobias.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://de.linkedin.com/in/tobias-kalkowsky-21b7a4163',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Bela Sinoimeri',
    title: 'Software Engineer',
    shortDescription: `I advise and support the teams with my technical expertise.`,
    description: `I recently graduated from my master’s studies in Electronics Engineering. During my studies I worked as an IT specialist at the Ministry of Finance and Economy. Before joining DPS as a core team member, I was a participant at batch #8 in the Software Engineering track. Me and my team developed a web application for warehouse maintenance and failure prediction.
     </br>
    At DPS, I can help teams with various software and hardware engineering tasks. As I was previously a participant at DPS, I can support the teams with my own learnings during my DPS journey and help them to improve their teamwork.`,
    pic: 'bela.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://www.linkedin.com/in/bsinoimeri/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Marcus Paeschke',
    title: 'Head of Interaction Design',
    shortDescription: `I bring compelling interactions to life through advanced prototyping. `,
    description: `After studying Interface Design in Potsdam, teaching data visualisation and starting the company behind Incom.org I've spent the last 5 years before joining DPS working at IDEO.
    Apart from a broad experience from design research to strategic design, my particular focus is on prototyping and testing digital products.
    </br>
    I help the teams with building a strong value proposition through user research, designing compelling interactions and bringing them to life through advanced prototyping.`,
    pic: 'marcus.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://www.linkedin.com/in/marcus-paeschke-66305a55/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Bastian Rieder',
    title: 'Head of Performance Marketing',
    shortDescription: `I spread the word about DPS and motivate talents to apply.`,
    description: `At the DPS I am responsible for marketing: telling the story of DPS and motivating students and graduates to apply. Before joining DPS in February 2017, I had a small startup in the online advertising business and worked for an advertising agency in Munich for 13 years. I have a Bachelor's degree in social sciences and an MBA in marketing.<br>
I help the teams with all marketing-related questions: finding test persons, creating landing pages, running small campaigns to get users on the landing page, creating small advertisements, and everything else that helps the teams to test their hypotheses. `,
    pic: 'basti.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://www.linkedin.com/in/bastian-rieder-marketingmba/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Annina Schaupp',
    title: 'Lead Team Development Coach',
    shortDescription: `I equip the teams with agile methods and bring them into a meaningful workflow.`,
    description: `I am an experienced scrum master. I have a background in business administration from HTWG Constance, Germany.  Early in my career I realised that agile and scrum methods play a crucial role in product development. This is when I decided to pursue this topic and become a scrum master.<br>
As an agile coach at DPS, I support teams to overcome obstacles through practicing smooth communication. I equip them to learn agile methods and also show them how to apply these methods so they can adopt a meaningful workflow when building a product.  `,
    pic: 'annina.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://www.linkedin.com/in/annina-schaupp-18a913177/v',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Michael Stockerl',
    title: 'Director Digital Product School',
    shortDescription: `I help teams to identify and overcome technical risks in their solutions.`,
    description: `I studied computer science at LMU in Munich and, alongside this, worked part time in early-stage startups. During this time, I figured out that I enjoy working on data engineering topics. After graduation, I joined gutefrage.net and we established the use of machine learning in Germany's biggest Q&A platform.<br>
At DPS, I help teams to identify technical risks in their solution and enable them to come up with a feasible first version of their product. During code reviews, I give feedback on code-related issues. In addition to this, I help groups to improve their overall teamwork. `,
    pic: 'michi.jpg',
    social: [
      {
        icon: '/assets/team/linkedin.svg',
        link: 'https://www.linkedin.com/in/michael-stockerl-8584a347/',
        alt: 'linkedin',
      },
    ],
  },
];

members.sort((m1, m2) => (m1.name > m2.name ? 1 : -1));

function Card(props) {
  const { member } = props;

  return (
    <li className="team__card">
      <img
        src={`/assets/team/${member.pic}`}
        className="team__card__profile-image"
        alt={member.name}
        title={`${member.name}, ${member.title} at Digital Product School`}
        onClick={() => props.setIsOpenId(props.index)}
      ></img>
      <h5 className="team__name">{member.name}</h5>
      <h5
        className="team__card__description"
        style={{
          margin: 0,
          marginTop: '2px',
          fontWeight: '300',
        }}
      >
        {member.title}
      </h5>
      <p className="team__card__description">{member.shortDescription}</p>
      <p
        className="team__card__readmore"
        onClick={() => props.setIsOpenId(props.index)}
      >
        Read more
      </p>
      {member.social.map(item => (
        <a
          href={item.link}
          className="team__card__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item.icon} alt={item.alt}></img>
        </a>
      ))}
    </li>
  );
}

function Team() {
  const [openId, setIsOpenId] = useState(undefined);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        setIsOpenId(undefined);
      }
    };

    document.addEventListener('keydown', handleKeyDown, false);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <React.Fragment>
      <div id="modal-root"></div>
      <CookieWarning />
      <Nav />
      {openId !== undefined && (
        <Modal onClose={() => setIsOpenId(undefined)}>
          <span
            style={{
              position: 'absolute',
              top: '12px',
              right: '20px',
              fontSize: '24px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
            onClick={() => setIsOpenId(undefined)}
          >
            x
          </span>
          <img
            src={`/assets/team/${members[openId].pic}`}
            className="team__modal__profile-image"
            alt={members[openId].name}
          ></img>
          <h4
            style={{
              marginBottom: '0',
            }}
          >
            {members[openId].name}
          </h4>
          <h5
            style={{
              marginTop: '5px',
              fontWeight: '300',
              textTransform: 'uppercase',
              fontSize: '12px',
            }}
          >
            {members[openId].title}
          </h5>
          <p
            dangerouslySetInnerHTML={{ __html: members[openId].description }}
          ></p>
          <button
            className="u-button u-button--reversed"
            onClick={() => setIsOpenId(undefined)}
          >
            close
          </button>
        </Modal>
      )}
      <Header image="/assets/team/header.jpg">
        the heart-throbs of innovation
      </Header>
      <HeaderContentBox>
        The Digital Product School (DPS) core team consists of an autonomous
        group of experts in roles typically found in a successful startup:
        product management, design, software engineering, artificial
        intelligence (AI), agile coaching, business development, and marketing
        and operations.
        <br />
        Before joining DPS they gained long-term experience in digital product
        development while working at tech-startups, corporates and in academia.
        Together they support, guide and help the participants to develop a
        user-centric digital product in an agile team.
      </HeaderContentBox>

      <div className="u-content">
        <h1
          className="team__title"
          style={{
            marginTop: '80px',
          }}
        >
          THE DIGITAL PRODUCT SCHOOL CORE TEAM
        </h1>
        <ul className="team__cards">
          {members.map((member, index) => (
            <Card
              key={index}
              member={member}
              setIsOpenId={setIsOpenId}
              index={index}
            />
          ))}
        </ul>
      </div>

      <Footer addSectionClass="u-section-margin-top" />
    </React.Fragment>
  );
}

export default Team;
