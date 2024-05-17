// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import "./style.css";
import { Certificates } from '../../utils/certificatesData';

export const Certificados = () => {
    return(
        <section className="section certificado" id="certificate">
            <h2 className="sectionTitle">Certificados</h2>
            <span className="sectionSubTitle">Alguns certificados</span>

            <Swiper 
                className="certificadoContainer"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination]}
            >
                {Certificates.map((certificate)=>(
                    <SwiperSlide key={certificate.id} className="certificadoContainer-item">
                        <img src={certificate.image} alt="imagem" className="certificadoItem-image" />
                        
                        <h3 className="certificadoItem-title">{certificate.title}</h3>
                        
                        <a download="" href={certificate.certificate} className="button--flex certicadoButton">
                            Download Certificado 
                            <i className="uil uil-import certificadoItem-icon"></i>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}