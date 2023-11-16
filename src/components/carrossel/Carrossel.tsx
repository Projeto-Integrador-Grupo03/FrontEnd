import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrossel.css";

import { Navigation, Pagination } from 'swiper/modules';
import { CSSProperties } from "react";

function Carrossel() {

    var items = [
        { img: "https://s2.glbimg.com/JYZ14pT3LO5WFsHtpl3hm-p0k5M=/e.glbimg.com/og/ed/f/original/2015/10/26/mulheres-que-empreendem-videos.jpg" },
        { img: "https://images.squarespace-cdn.com/content/v1/63937fe85df41f34b1fb94e9/106f7635-1846-45e9-885c-3d48a8e67208/CyAssist+-+banner+blog.jpg" },
        { img: "https://blog.gentrop.com/hubfs/Post_MulheresnaTecnologia_Banner.png" },
        { img: "https://img.freepik.com/vetores-premium/modelo-de-banner-de-campanha-de-feminismo_3870-450.jpg?w=2000" },
        { img: "https://img.freepik.com/vetores-premium/minusculo-dermatologista-examinando-a-pagina-de-destino-de-pele-de-rosto-seco-em-estilo-plano_74855-19076.jpg?size=626&ext=jpg" }
    ]

    return (
        <>
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
                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                        </SwiperSlide>
                    ))
                }

            </Swiper>


        </>
    )
}

export default Carrossel