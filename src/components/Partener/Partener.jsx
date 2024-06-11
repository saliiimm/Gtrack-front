
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode,Autoplay } from 'swiper/modules';
import "./Partener.css"
import image1 from '../../assets/logoG.png'
import image2 from '../../assets/Holiday_Inn_Logo.png'
import image3 from '../../assets/Qatar_Airways_Logo.png'
import image4 from '../../assets/facility.png'

export default function Partener() {
  return (
    <div className='Partener' id='Partener'>
         <div className="title-board">
        <h2>Ils nous ont fait confiance</h2>
      </div>
      
         <Swiper
    slidesPerView={3}
    spaceBetween={30}
    speed={2500}
    autoplay={{
        delay: -2500,
        disableOnInteraction: false,
      }}
    loop={true}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay,FreeMode]}
    className="mySwiper"
  >
    <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
    <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
    <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
    <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
  
  </Swiper>
</div>
  )
}
