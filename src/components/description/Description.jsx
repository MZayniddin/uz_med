import { v4 as uuidv4 } from "uuid";
import "./Description.scss";

export default function Description({
    data: { title, description, duration, lead, objectives },
}) {
    return (
        <section className="desc">
            <div className="container">
                <h2 className="desc__title section-title">{title}.</h2>
                <div className="desc__sub-title">Description:</div>
                <p className="desc__info desc__text">{description}</p>
                <div className="desc__text">
                    <strong>Duration: </strong>
                    {duration}
                </div>
                <div className="desc__text">
                    <strong>Lead Beneficiary: </strong>
                    {lead}
                </div>
                <div className="desc__text">
                    <strong>Objectives: </strong>
                </div>
                <ol className="desc__list">
                    {objectives.map((obj, idx) => (
                        <li className="desc__text" key={uuidv4()}>
                            {idx + 1}. {obj}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
