import React from 'react';
import '../assets/css/sec-3_Vazin.css'

const Sec3Vazin = () => {
    return (
        <div className={'s3 container'} id={'batafsil'}>
            <div className="s3-item-left">
                <div className="s3-title wow animate__animated animate__fadeInUp">
                    <h1>Ortiqcha vazindan qutilish uchun nima qilish kerak?</h1>
                    <p><img src={require('../assets/img/s3/line.png')} alt=""/>Sizga <span
                        style={{color: '#14D785'}}>Chitosan</span> yordam beradi</p>
                </div>
                <div className="s3-list">
                    <div className="s3-list-left">
                        <div className="s3-list-item wow animate__animated animate__fadeInUp">
                            <img src={require("../assets/img/s3/s3Dot.png")} alt=""/>
                            Organizmni umumiy tozalaydi
                        </div>
                        <div className="s3-list-item wow animate__animated animate__fadeInUp">
                            <img src={require("../assets/img/s3/s3Dot.png")} alt=""/>
                            Shlak va zararli to’qsinlardan halos qiladi
                        </div>
                        <div className="s3-list-item wow animate__animated animate__fadeInUp">
                            <img src={require("../assets/img/s3/s3Dot.png")} alt=""/>
                            Organizmdagi ortiqcha yog’larni eritadi
                        </div>
                    </div>
                    <div className="s3-list-right">
                        <div className="s3-list-item wow animate__animated animate__fadeInUp">
                            <img src={require("../assets/img/s3/s3Dot.png")} alt=""/>
                            Xolesterin miqdorini meyorlashtiradi
                        </div>
                        <div className="s3-list-item wow animate__animated animate__fadeInUp">
                            <img src={require("../assets/img/s3/s3Dot.png")} alt=""/>
                            Tana qomatini meyorga keltirib beradi
                        </div>
                        <div className="s3-list-item wow animate__animated animate__fadeInUp">
                            <img src={require("../assets/img/s3/s3Dot.png")} alt=""/>
                            Xazm faoliyatini yaxshilaydi
                        </div>
                    </div>
                </div>
            </div>
            <div className="s3-item-right wow animate__animated animate__fadeInUp">
                <img src={require('../assets/img/s3/s3-img.png')} alt=""/>
            </div>
        </div>
    );
};

export default Sec3Vazin;