import React from 'react';
import '../assets/css/sec-2_Alomatlar.css'

const Sec2Alomatlar = () => {
    return (
        <div className={'s2 container'}>
            <div className="s2-title wow animate__animated animate__fadeInUp"><h1>Alomatlar</h1></div>
            <div className="s2-box">
                <div className="list">
                    <div className="list-top">
                        <div className="list-item wow animate__animated animate__fadeInUp"><img src={require('../assets/img/s2/galichka.png')} alt=""/>
                            Har doim juda chanqagan
                        </div>
                        <div className="list-item wow animate__animated animate__fadeInUp"><img src={require('../assets/img/s2/galichka.png')} alt=""/>
                            Tez-tez xojatxonaga boradi ayniqsa kechasi
                        </div>
                        <div className="list-item wow animate__animated animate__fadeInUp"><img src={require('../assets/img/s2/galichka.png')} alt=""/>
                            Kelajakda jiddiy bo’lishi mumkun bo’lgan nogironlikga olib kelishi ehtimoli bo’lgan qon
                            tomirlari
                        </div>
                    </div>
                    <div className="list-bottom">
                        <div className="list-item wow animate__animated animate__fadeInUp"><img src={require('../assets/img/s2/galichka.png')} alt=""/>
                            Yurak xurujiga olib kelishi mumkun bo’lgan koroner yurak kasalligi
                        </div>
                        <div className="list-item wow animate__animated animate__fadeInUp"><img src={require('../assets/img/s2/galichka.png')} alt=""/>
                            Charchash
                        </div>
                    </div>
                </div>
                <div className="s2-img-box">
                    <div className="s2-img">
                        <img src={require('../assets/img/s2/s2-img.png')} alt="" className={'imgElement wow animate__animated animate__fadeInUp'}/>
                    </div>

                    <img src={require('../assets/img/s2/s2-left-element.png')} alt="" className={'element1'}/>
                    <img src={require('../assets/img/s2/s2-right-element.png')} alt="" className={'element2'}/>


                </div>
            </div>
        </div>
    );
};

export default Sec2Alomatlar;