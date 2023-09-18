import React from 'react';
import "../assets/css/header.css"


const Header = () => {
    return (
        <div className={'header'}>
            <div className={'container'}>
            <nav>
                <div className="nav-content">
                    <h1 className={'wow animate__animated animate__fadeInLeft'}>ChitosanFull</h1>
                    <a href='#footer' className={'wow animate__animated animate__fadeInRight'}>Buyurtma berish</a>
                </div>
            </nav>
            <div className="header-text-box">
                <div className="header-text wow animate__animated animate__fadeIn">
                    <h1>
                        <span style={{color: '#14D785'}}>Chitosan Full</span>
                        - Endi ortiqcha vazindan xalos bo’lish juda onson bo’ladi
                    </h1>
                    <p style={{color: '#798292'}}>Chitosan Full - Diabetning barcha eng xavfli asoratlariga barham
                        berishga ko’maklashadi</p>
                    <a href="#batafsil">Batafsil</a>
                </div>
            </div>
        </div>
            <div className="header-element-t-l wow animate__animated animate__fadeInLeft"><img src={require("../assets/img/imgComponent/header-t-l.png")} alt=""/></div>
            <div className="header-element-t-r wow animate__animated animate__fadeInRight"><img src={require("../assets/img/imgComponent/header-t-r.png")} alt=""/></div>
            <div className="header-element-t-r2 wow animate__animated animate__fadeInRight"><img src={require("../assets/img/imgComponent/header-t-r2.png")} alt=""/></div>
            <div className="header-element-c-l wow animate__animated animate__fadeInLeft"><img src={require("../assets/img/imgComponent/header-c-l.png")} alt=""/></div>
            <div className="header-element-c-r wow animate__animated animate__fadeInRight"><img src={require("../assets/img/imgComponent/header-c-r.png")} alt=""/></div>
            <div className="header-bottom-box">
                <div className="header-bottom-bg"></div>
                <div className="header-bottom-img wow animate__animated animate__fadeInUp">
                    <img src={require('../assets/img/imgComponent/chitosanHeader.png')} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;