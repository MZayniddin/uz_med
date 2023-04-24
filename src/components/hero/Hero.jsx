import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { v4 as uuidv4 } from "uuid";

// SCSS
import "swiper/css";
import "swiper/css/effect-fade";
import "./Hero.scss";

// IMAGES
import image1 from "../../assets/hero-img/hero1.jpg";
import image2 from "../../assets/hero-img/hero2.png";
import image3 from "../../assets/hero-img/hero3.jpg";

export default function Hero() {
    const imagesArr = [image1, image2, image3];
    return (
        <section className="hero">
            <Swiper
                slidesPerView={1}
                loop={true}
                effect={"fade"}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                speed={2500}
                modules={[Autoplay, EffectFade]}
                className="hero__swiper"
            >
                {imagesArr.map((img) => (
                    <SwiperSlide key={uuidv4()}>
                        <img className="hero__swiper-img" src={img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
