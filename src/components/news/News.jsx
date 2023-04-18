import "./News.scss";
import section from "../../assets/images/section-bg.jpg"

const News = () => {
    return (
        <section className="news">
            <div className="container">

                <h1 className="about_newsh1">NEWS</h1>
                <div className="line_news_1"></div>
                <div className="new_box">
                    <img className="new_box_img" src={section} alt="" />
                    <div className="new_box_text">
                        <h1 className="new_box_text1">Training and research centers (labs) in the  framework of the ERASMUS PLUS projects at TTPU</h1>
                        <p className="new_box_text2">Training and research centers (labs) in the  framework of th...</p>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default News;
