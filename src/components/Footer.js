import React from 'react';
import '../scss/Footer.scss';
function Footer(props) {
    return (
        <div className='footer mt-5'>
            <div className='container'>
                <div className='footer-content'>
                   <div className='footer-content-left'>
                    <ul className='footer-content-one'>
                            <li>
                            이용약관                    
                            </li>
                            <li>
                            개인정보처리방침
                            </li>
                            <li>
                            고객센터
                            </li>
                        </ul>
                        <ul className='footer-content-two'>
                            <li>
                            (주) 가드시그니처                  
                            </li>
                            <li>
                            대표자 : 홍길동
                            </li>
                            <li>
                            사업자 등록번호 : 356-00-00000
                            </li>
                        </ul>
                        <ul className='footer-content-three'>
                            <li>
                            이메일 : test0101@guardsignature.co.kr                 
                            </li>
                            <li>
                            FAX : 070-0000-0000
                            </li>
                        
                        </ul>
                        <p>서울특별시 강남구 도산대로 8길 17 3층 </p>
                        <p>Copyright© GUARDSIGNATURE All rights reserved. </p>
                   </div>
                   <div className='footer-content-right'>
                       <div>
                        <img src='./images/sns_icon_1.png' alt='sns_icon'/>
                        <img src='./images/sns_icon_2.png' alt='sns_icon'/>
                        <img src='./images/sns_icon_3.png' alt='sns_icon'/>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;