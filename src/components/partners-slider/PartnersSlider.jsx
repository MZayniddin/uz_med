import { v4 as uuidv4 } from "uuid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// STYLES
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PartnersSlider.scss";

// IMAGES
import p1 from "../../assets/partners-img/p1.png";
import p2 from "../../assets/partners-img/p2.png";
import p3 from "../../assets/partners-img/p3.png";
import p4 from "../../assets/partners-img/p4.png";
import p5 from "../../assets/partners-img/p5.png";
import p6 from "../../assets/partners-img/p6.png";
import p7 from "../../assets/partners-img/p7.png";
import p8 from "../../assets/partners-img/p8.png";
import p9 from "../../assets/partners-img/p9.png";

export default function PartnersSlider() {
  const partnersLogoArr = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
  return (
    <section className="partners">
      <div className="container">
        <h2 className="partners__title section-title">PARTNERS</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="partners-swiper"
        >
          {partnersLogoArr.map((partner) => (
            <SwiperSlide key={uuidv4()} className="partners-swiper__item">
              <img src={partner} alt="Partners' logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
