import React from 'react';
import '../assets/css/sec-4_Kompleks.css'

const Sec4Kompleks = () => {
    return (
        <div className={'s4 container'}>
            <div className="s4-box">
                <div className="s4-title wow animate__animated animate__fadeInUp">
                    <h1>Chitosan organizm tozalov kompleksi yog’larni eritishdan tashqari qanday xususiyatlarga ega</h1>
                    <img src={require('../assets/img/s4/line.png')} alt=""/>
                </div>
                <div className="s4-box-container">
                    <div className="s4-box-top">
                        <div className="s4-box-item wow animate__animated animate__fadeInUp">
                            <div className="s4-number">01</div>
                            <div className="s4-text">Yog'larni va uglevodlarni to'liq parchalanishiga yordam beradi,
                                ovkat
                                xo'jaligini va oshqozonichak tizimini yaxshilashni yaxshilaydi.
                            </div>
                        </div>
                        <div className="s4-box-item wow animate__animated animate__fadeInUp">
                            <div className="s4-number">02</div>
                            <div className="s4-text">Immunitetni mustahkamlaydi, moddalar almashinuvini tiklaydi,
                                organizmni yoshartiradi, quvvatni va mehnat qobiliyatini oshiradi.
                            </div>
                        </div>
                        <div className="s4-box-item wow animate__animated animate__fadeInUp">
                            <div className="s4-number">03</div>
                            <div className="s4-text">
                                Barcha turdagi gijjalarga qarshi ichish uchun tavsiya etiladi
                            </div>
                        </div>
                    </div>
                    <div className="s4-box-bottom">
                        <div className="s4-box-item wow animate__animated animate__fadeInUp">
                            <div className="s4-number">04</div>
                            <div className="s4-text">
                                Turli parazitlar, qurtlardan va keraksiz ortiqcha semirishga sabab bo’ladigan yog’lardan
                                tozalaydi
                            </div>
                        </div>
                        <div className="s4-box-item wow animate__animated animate__fadeInUp">
                            <div className="s4-number">05</div>
                            <div className="s4-text">
                                Oshqozon, ichaklar, o't-yullari, jigar, nafas azolari, buyraklar, bosh va orqa miya,
                                bug'inlar tozalanadi.
                            </div>
                        </div>
                    </div>

                </div>
                <div className="s4-box-container-mobile">
                    <div className="s4-box-mobile-item wow animate__animated animate__fadeInUp">
                        <div className="number-mobile">01</div>
                        <div className="text-mobile">
                            Yog'larni va uglevodlarni to'liq parchalanishiga yordam beradi, ovkat xo'jaligini va
                            oshqozonichak tizimini yaxshilashni yaxshilaydi.
                        </div>
                    </div>
                    <div className="s4-box-mobile-item wow animate__animated animate__fadeInUp">
                        <div className="number-mobile" style={{ left:'75%'}}>02</div>
                        <div className="text-mobile">
                            Immunitetni mustahkamlaydi, moddalar almashinuvini tiklaydi, organizmni yoshartiradi,
                            quvvatni va mehnat qobiliyatini oshiradi.
                        </div>
                    </div>
                    <div className="s4-box-mobile-item wow animate__animated animate__fadeInUp">
                        <div className="number-mobile" style={{top:'-45%'}}>03</div>
                        <div className="text-mobile">
                            Barcha turdagi gijjalarga qarshi ichish uchun tavsiya etiladi
                        </div>
                    </div>
                    <div className="s4-box-mobile-item wow animate__animated animate__fadeInUp">
                        <div className="number-mobile" style={{ left:'80%'}}>04</div>
                        <div className="text-mobile">
                            Turli parazitlar, qurtlardan va keraksiz ortiqcha semirishga sabab bo’ladigan yog’lardan
                            tozalaydi
                        </div>
                    </div>
                    <div className="s4-box-mobile-item wow animate__animated animate__fadeInUp">
                        <div className="number-mobile" style={{top:'-35%'}}>05</div>
                        <div className="text-mobile">
                            Oshqozon, ichaklar, o't-yullari, jigar, nafas azolari, buyraklar, bosh va orqa miya,
                            bug'inlar tozalanadi.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec4Kompleks;