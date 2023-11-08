import React from "react";

const Price =()=>{
    return(
        <div className={'s5 container'}>
        <div className="s5-left-item " style={{textAlign:"center"}}>
        <div className="s5-title wow animate__animated animate__fadeInUp">
                    <h1>Narxlar</h1>
                </div>
                <h1>500.000 so'm</h1>
        </div>
        <div className="s5-right-item wow animate__animated animate__fadeInUp">
        <img src={require('../assets/img/s3/s3-img.png')} alt=""/>
        </div>
    </div>
    )
}
export default Price