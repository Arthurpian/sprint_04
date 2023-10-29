import { useEffect, useState, useRef } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import parque_1 from '../img/parque_1.jpg';
import parque_2 from '../img/parque_2.jpg';
import parque_3 from '../img/parque_3.jpg';

import seta01 from '../img/seta-direita.png';
import '../estilos/home/home.sass';

function Home() {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:5173/src/json/json.json')
            .then((response) => response.json())
            .then(setData)
            .catch((error) => {
                console.error('Erro ao carregar os dados:', error);
            });
    };

    const scrollCarousel = (offset) => {
        if (carousel.current) {
            carousel.current.scrollLeft += offset;
        }
    };

    if (!data?.length) return null;
    return (
        <>
            <Swiper className="slide-show"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='slide'>
                    <img src={parque_1}></img>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={parque_2}></img>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={parque_3}></img>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <div className="top">
                    <div className="parteEsquerda">
                        <div className="titulo">Destaques</div>
                        <div className="subtitulo">Veja os destaques da semana</div>
                    </div>
                    <div className="parteDireita">
                        <div className="botao">Veja Mais</div>
                    </div>
                </div>
                <div className="carosel" ref={carousel}>
                    {data.map((item) => {
                        const { id, name, endereco, img } = item;
                        return (
                            <div className="item" key={id}>
                                <div className="imagem">
                                    <img src={img} alt={name} />
                                </div>
                                <div className="info">
                                    <div className="titulo_1">{name}</div>
                                    <div className="subtitulo">{endereco}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="buttons">
                    <div className="button" onClick={() => scrollCarousel(-carousel.current.offsetWidth)}>
                        <img src={seta01} alt="seta" />
                    </div>
                    <div className="button" onClick={() => scrollCarousel(carousel.current.offsetWidth)}>
                        <img src={seta01} alt="seta" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home