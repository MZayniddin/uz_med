import "./AboutProject.scss";
import PartnersList from "./partners-list/PartnersList";
import StatisticsBox from "./statistics-box/StatisticsBox";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title section-title">ABOUT THE PROJECT</h2>
        <p className="about-subtitle">
          New master’s degree and training course programs in the field of
          medical engineering in Uzbekistan
        </p>
        <p className="about-text text">
          The project is addressed to solve the lack of specialists in
          installing, maintenance, management of medical devices in Uzbekistan.
          The main objective of the project is to develop and internationalize
          master’s program and training courses in the field of medical
          engineering using new medical technologies in Uzbekistan through
          innovative curricula that meet world market requirements and EU best
          practices
        </p>
        <h4 className="about-partners-title sm-title">Partners</h4>
        <PartnersList />
        <div className="about-statistics__wrapper">
          <StatisticsBox label="Consortium Partners" content="21" />
          <StatisticsBox label="Project Years" content="3" />
          <StatisticsBox label="New Core Curricula" content="11" />
          <StatisticsBox label="Budget" content="€ 523.986" />
        </div>
      </div>
    </section>
  );
};

export default About;
