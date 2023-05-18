import React from 'react';
import Banner1 from '../../../assets/Banner/banner1.png';
import Banner2 from '../../../assets/Banner/banner2.png';
import Banner3 from '../../../assets/Banner/banner3.jpg';
import Banner4 from '../../../assets/Banner/banner4.jpg';

const BannerSlider = () => {
    return (
        <div className="carousel w-full h-1/2 ">
            <div id="slide1" className="carousel-item relative w-full h-1/2">
                <img src={Banner1} className="w-full h-1/2" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-1/2">
                <img src={Banner2} className="w-full h-1/2" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-1/2">
                <img src={Banner3} className="w-full h-1/2" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-1/2">
                <img src={Banner4} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;