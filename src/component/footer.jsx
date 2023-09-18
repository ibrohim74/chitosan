import React, {useState} from 'react';
import '../assets/css/footer.css'
import { message  } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios";


const Footer = () => {
    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [tell, setTell] = useState('')
    const [messageApi, contextHolder] = message.useMessage();


    const checkForm = () => {
        setDisabled(true)
        setTimeout(()=>{setDisabled(false)},2000)
        if (username === '' || username.length === 0 || username.length <= 3 || username === '    ') {
            messageApi.open({
                type: 'error',
                content: 'Ismingizni xato yozdingiz',
            });
        } else if (tell.length === 0 || tell === '' || tell.length <11){
            messageApi.open({
                type: 'error',
                content: 'telefon raqamingiz xato',

            });
        }else {
            let msg = "<b>Buyurtma Qilindi</b> \n";
            msg +=`\n ismi: ${username}\n`
            msg +=`\n tell: +${tell}\n`

            const TOKEN = "6224412857:AAFeIq9iBUgbqqeHtF3zLSVKvjNKrrfBGBI";
            const CHAT_ID = "-1001874020695";
            console.log("click")
            try {
                axios.post("https://api.telegram.org/bot" + TOKEN + "/sendMessage", {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: msg
                }).then((res) => {
                        messageApi.open({
                            type: 'success',
                            content: 'Buyurtmangiz qabul qilindi',
                        });
                        setTimeout(()=>{
                            window.location.assign('/success')
                        },1800)

                    }
                )
            } catch (e) {
                if (e) {
                    messageApi.open({
                        type: 'error',
                        content: 'tizimda xatolik',
                    });
                }
            }
        }
    }
    return (
        <div className={'footer'} id={'footer'}>
            {contextHolder}
            <div className="footer-box">
                <h1 className={'wow animate__animated animate__fadeInUp'}>
                    Ortiqcha vazn haqida savollaringiz bormi? Unda kontakt ma'lumotlaringizni qoldiring va mutaxassislarimiz
                    sizga bepul maslaxat beradi
                </h1>
                <div className="form">
                    <div className="input-item ">
                        <p>Ismingiz</p>
                        <input type="text" placeholder={'Ismingizni kiriting'}
                               onChange={(e) => setUsername(e.target.value)} required
                        />
                    </div>
                    <div className="input-item ">
                        <p>Telefon raqamingizni kiriting</p>
                        <PhoneInput
                            style={{height:'50px !important'}}
                            country={'uz'}
                            placeholder={"+998 99 123 45 67"}
                            onChange={(phone) => setTell( phone)}
                            required
                        />
                    </div>
                    <div className="input-item">
                        <button onClick={checkForm} disabled={disabled}>Ro’yxatdan o’tish</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;