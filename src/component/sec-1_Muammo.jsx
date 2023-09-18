import React from 'react';
import "../assets/css/sec-1_Muammo.css"

const Sec1Muammo = () => {
    return (
        <div className={'s1 '}>
        <div className={"container"}>
            <div className="s1-box">
                <div className="s1-title wow animate__animated animate__fadeInUp">
                    <h1>Asr muammosi: <br/> Semizlik va uning oqibatlari</h1>
                </div>
                <div className="s1-box-center">
                    <div className="s1-item wow animate__animated animate__fadeInUp"><img src={require('../assets/img/s1/1.png')} alt=""/></div>
                    <div className="s1-item wow animate__animated animate__fadeInUp">
                        <img src={require('../assets/img/s1/2.png')} alt=""/>
                        <img src={require('../assets/img/s1/3.png')} alt=""/>
                    </div>
                    <div className="s1-item wow animate__animated animate__fadeInUp"><img src={require('../assets/img/s1/4.png')} alt=""/></div>

                    <div className="s1-item wow animate__animated animate__fadeInUp">
                        <img src={require('../assets/img/s1/5.png')} alt=""/>
                        <img src={require('../assets/img/s1/6.png')} alt=""/>
                    </div>
                    <div className="s1-item wow animate__animated animate__fadeInUp"><img src={require('../assets/img/s1/7.png')} alt=""/></div>
                </div>
                <div className="s1-cycle"></div>
            </div>
        </div>
            <div className="s1-box-mobile container">
                <div className="s1-title-mobile wow animate__animated animate__fadeInUp">
                    <h1>Asr muammosi: <br/> Semizlik va uning oqibatlari</h1>
                </div>
                <div className="s1-box-center">
                    <div className="s1-box-item wow animate__animated animate__fadeInUp">
                        <div className="s1-box-item-left ">
                            <img src={require('../assets/img/s1/s1Mobile/1.png')} alt=""/>
                        </div>
                        <div className="s1-box-item-right">
                            <img src={require('../assets/img/s1/s1Mobile/2.png')} alt=""/>
                            <img src={require('../assets/img/s1/s1Mobile/3.png')} alt=""/>
                        </div>
                    </div>
                    <div className="s1-box-item-bottom wow animate__animated animate__fadeInUp">
                        <div className="s1-box-item-left">
                            <img src={require('../assets/img/s1/s1Mobile/4.png')} alt=""/>
                            <img src={require('../assets/img/s1/s1Mobile/6.png')} alt=""/>

                        </div>
                        <div className="s1-box-item-right">
                            <img src={require('../assets/img/s1/s1Mobile/5.png')} alt=""/>
                            <img src={require('../assets/img/s1/s1Mobile/7.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="s1-cycle"></div>
            </div>
        </div>
    );
};

export default Sec1Muammo;