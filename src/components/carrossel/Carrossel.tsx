import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrossel.css";

import { Navigation, Pagination } from 'swiper/modules';
import { CSSProperties } from "react";

function Carrossel() {

    const items = [
        { id: '1', img: 'https://i.imgur.com/Mjbs1GW.png' },
        { id: '2', img: "https://imgur.com/KczbS4p.png" },
        { id: '3', img: "https://imgur.com/KBNGfQm.png" },
    ]

    return (
            <Swiper 
            style={{
                "--swiper-pagination-color": "rgba(203, 95, 93, 0.39)",
            }as CSSProperties}
        
            
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >


                {
                    items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.img} alt="Imagem Carrossel" />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
    )
}

export default Carrossel