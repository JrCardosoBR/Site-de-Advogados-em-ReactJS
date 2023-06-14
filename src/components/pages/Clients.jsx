import React from "react"
import Slider from "react-slick"
import { clients } from "../data/dummydata"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='clients hero'>
        <div className='container'>
          <Slider {...settings}>
            {clients.map((val) => (
              <div className='box'>
                <i data-aos='zoom-out-up'>
                  <FormatQuoteIcon />
                </i>
                <p data-aos='zoom-out-down'>{val.text}</p>
                <div className='img' data-aos='zoom-out-right'>
                  <img src={val.image} alt='' />
                </div>
                <h3 data-aos='zoom-out-left'>{val.name}</h3>
                <label data-aos='zoom-out'>{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
