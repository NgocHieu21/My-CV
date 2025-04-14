import React from "react";
import "./project.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Project = () => {
  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">App & Web</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1, // Hiển thị 1 slide trên mobile
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, video, title, description }) => (
          <SwiperSlide className="testimonial__card" key={id}>
            {video ? (
              <video className="testimonial__video" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={image} alt={title} className="testimonial__img" />
            )}
            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;
