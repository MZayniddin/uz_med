

// COMPONENTS
import NewsCard from "../news-card/NewsCard";

// SCSS
import "./News.scss";

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <h2 className="news-title section-title">NEWS</h2>
        <div className="news__wrapper">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </section>
  );
};

export default News;
