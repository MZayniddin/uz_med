import "./News.scss";
import NewsCard from "./news-card/NewsCard";


const News = () => {
    return (
        <section>
            <div className="container">

                <h2 className="about_news_h2">NEWS</h2>
                <div className="line_news_1"></div>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>


            </div>

        </section>
    );
};

export default News;
