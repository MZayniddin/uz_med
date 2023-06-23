import { Link } from "react-router-dom";

// ICONS
import { ReactComponent as CalendarIcon } from "../../assets/ui-icons/calendar.svg";
import { ReactComponent as EyeIcon } from "../../assets/ui-icons/eye.svg";

// STYLE
import "./NewsCard.scss";

const NewsCard = () => {
  return (
    <article className="news-card">
      <img
        className="news-card__image"
        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
        alt="Image"
      />
      <div className="news-card__content">
        <div className="news-card__date">
          <CalendarIcon />
          <span>15-05-2023</span>
        </div>
        <h1 className="news-card__title">
          В провинции никого не пугает старческий скрип Амстердама
        </h1>
        <p className="news-card__text text">
          Не следует, однако, забывать, что внедрение современных методик
          требует от нас анализа позиций, занимаемых участниками в отношении
          поставленных задач. Есть над чем задуматься: предприниматели в сети
          интернет своевременно верифицированы.
        </p>
        <div className="news-card__view-count">
          <EyeIcon />
          <span>99.999</span>
        </div>
      </div>
      <Link className="news-card__link">More</Link>
    </article>
  );
};

export default NewsCard;
