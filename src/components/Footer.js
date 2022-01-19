import React from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/Footer.scss';
function Footer(props) {
    const {t} = useTranslation();
    return (
        <div className='footer mt-5'>
            <div className='container'>
                <div className='footer-content'>
                   <div className='footer-content-left'>
                    <ul className='footer-content-one'>
                            <li>
                             {t('footer.row1')}                   
                            </li>
                            <li>
                            {t('footer.row2')} 
                            </li>
                            <li>
                            {t('footer.row3')} 
                            </li>
                        </ul>
                        <ul className='footer-content-two'>
                            <li>
                            {t('footer.row4')}              
                            </li>
                            <li>
                            {t('footer.row5')} 
                            </li>
                            <li>
                            {t('footer.row6')} 
                            </li>
                        </ul>
                        <ul className='footer-content-three'>
                            <li>
                            {t('footer.row7')}                
                            </li>
                            <li>
                            {t('footer.row8')} 
                            </li>
                        
                        </ul>
                        <p>{t('footer.row9')}  </p>
                        <p>{t('footer.row10')}  </p>
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