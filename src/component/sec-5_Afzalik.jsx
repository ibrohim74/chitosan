import React from 'react';
import '../assets/css/sec-5_Afzalik.css'

const Sec5Afzalik = () => {
    return (
        <div className={'s5 container'}>
            <div className="s5-left-item ">
                <div className="s5-title wow animate__animated animate__fadeInUp">
                    <h1>Bizning afzalliklarimiz</h1>
                    <p>
                        <img src={require('../assets/img/s5/line.png')} alt=""/>
                        Mahsulotlarni sotib olish sizga nima beradi?
                    </p>
                </div>
                <div className="s5-box">
                    <div className="s5-box-item wow animate__animated animate__fadeInUp">
                        <img src={require('../assets/img/s5/s5Dot.png')} alt=""/>
                        <div className="s5-item-text">
                            <h1>Shaxsiy yordam konsultatsiyasi</h1>
                            <p>Mutaxassislarimiz ishbilarmon natija topguningizga siz bilan muloqotda qatnashadi!</p>
                        </div>
                    </div>
                    <div className="s5-box-item wow animate__animated animate__fadeInUp">
                        <img src={require('../assets/img/s5/s5Dot.png')} alt=""/>
                        <div className="s5-item-text">
                            <h1>Mahsulotlardan foydalanish bo’yicha tavsiyalar</h1>
                            <p>Bizning mutaxassislar salomatligingizdagi o’zgarishlarni nazorat qilib turishadi</p>
                        </div>
                    </div>
                    <div className="s5-box-item wow animate__animated animate__fadeInUp">
                        <img src={require('../assets/img/s5/s5Dot.png')} alt=""/>
                        <div className="s5-item-text">
                            <h1>Ekologik toza va tabiiy maxsulot</h1>
                            <p>Maxsulotlar tarkibini noyob meva, sabzavot va o’simlik nanazarralari tashkil qiladi</p>
                        </div>
                    </div>
                    <div className="s5-box-item wow animate__animated animate__fadeInUp">
                        <img src={require('../assets/img/s5/s5Dot.png')} alt=""/>
                        <div className="s5-item-text">
                            <h1>Bepul yetkazib berish xizmati</h1>
                            <p>Buyurtmadan so’ng maxsulot qisqa vaqt ichida qo’lingizga yetkazib beriladi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s5-right-item wow animate__animated animate__fadeInUp">
                <img src={require('../assets/img/s5/left-element.png')} alt=""/>
            </div>
        </div>
    );
};

export default Sec5Afzalik;