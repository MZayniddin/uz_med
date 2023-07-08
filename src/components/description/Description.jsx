import { v4 as uuidv4 } from "uuid";
import "./Description.scss";

export default function Description({
  data: { title, description, duration, lead, objectives },
}) {
  return (
    <section className="desc">
      <div className="container">
        <h2 className="desc__title section-title">{title}</h2>
        <h4 className="desc__sub-title">Description</h4>
        <p className="desc__text text">{description}</p>
        <h4 className="desc__sub-title">Objectives</h4>
        <ol className="desc__list desc__info">
          {objectives.map((obj, idx) => (
            <li className="text" key={uuidv4()}>
              {idx + 1}. {obj}
            </li>
          ))}
        </ol>
        <h4 className="desc__sub-title">Lead Beneficiary</h4>
        <p className="text desc__info">{lead}</p>
        <h4 className="desc__sub-title">Duration</h4>
        <p className="text desc__info">{duration}</p>
      </div>
    </section>
  );
}
