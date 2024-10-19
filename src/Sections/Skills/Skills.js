import './Skills.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';  // Core Swiper styles
import 'swiper/css/navigation';  // Navigation module styles
import 'swiper/css/pagination';  // Pagination module styles




const Skills = () => {

   

  return (
    <div className="w-full flex justify-center items-center container relative">
      <Swiper
        slidesPerView={3}  
        centeredSlides={true}  
        spaceBetween={0}  
        loop={true} 
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper flex justify-center items-center"
      >
        <SwiperSlide className='flex justify-center items-center shadow-sm shadow-black'>
          <div className="slide-content rounded-lg text-center">
            <h2 className="text-base font-bold">Numerus</h2>
            <p className='text-xs p-2 sm:p-5'>Anhand von echten Zahlen machen wir Dein Marketing planbar und skalierbar.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='flex justify-center items-center shadow-sm shadow-black'>
          <div className="slide-content rounded-lg text-center">
            <h2 className="text-base font-bold">Quo Vadis</h2>
            <p className='text-xs p-2 sm:p-5'>Wo stehst Du gerade und vor allem wohin möchtest Du?</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='flex justify-center items-center shadow-sm shadow-black'>
          <div className="slide-content rounded-lg text-center">
            <h2 className="text-base font-bold">Success</h2>
            <p className='text-xs p-2 sm:p-5'>Wir begleiten Dich auf dem Weg bis zur Zielerreichung.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='flex justify-center items-center shadow-sm shadow-black'>
          <div className="slide-content rounded-lg text-center">
            <h2 className="text-base font-bold">Navigate</h2>
            <p className='text-xs p-2 sm:p-5'>Wir zeigen Dir den Weg, analysieren ihn laufend und optimieren bei Bedarf die Route.</p>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};
export default Skills