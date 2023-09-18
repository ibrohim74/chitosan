import React from 'react';
import Header from "../component/header";
import Sec1_Muammo from "../component/sec-1_Muammo";
import Sec2Alomatlar from "../component/sec-2_Alomatlar";
import Sec3Vazin from "../component/sec-3_Vazin";
import Sec4Kompleks from "../component/sec-4_Kompleks";
import Sec5Afzalik from "../component/sec-5_Afzalik";
import Sec6_FooterTopText from "../component/sec-6_FooterTopText";
import Footer from "../component/footer";

const Index = () => {
    return (
        <div className={''}>
            <Header/>
            <Sec1_Muammo/>
            <Sec2Alomatlar/>
            <Sec3Vazin/>
            <Sec4Kompleks/>
            <Sec5Afzalik/>
            <Sec6_FooterTopText/>
            <Footer/>
        </div>
    );
};

export default Index;