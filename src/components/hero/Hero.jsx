import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

// SCSS
import "swiper/css";
import "swiper/css/effect-fade";
import "./Hero.scss";

// IMAGES
import image1 from "../../assets/hero-img/hero1.jpg";

export default function Hero() {
    const imagesArr = [image1, "https://robohash.org/test?set=set3"];
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
                    <SwiperSlide>
                        <img className="hero__swiper-img" src={img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
