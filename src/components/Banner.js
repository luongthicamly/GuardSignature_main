import React from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/Banner-home.scss'

function Banner(props) {
    const { t } = useTranslation();
    return (
        <div className='banner-home'>
            <div className='container'>
                <div className='box-banner'>
                    <div className='content-banner'>
                        <h1>
                            {t('banner.h1.row1')}<br />
                            {t('banner.h1.row2')}
                        </h1>
                        <p>
                            {t('banner.content.row1')} <br />
                            {t('banner.content.row2')} <br />
                            {t('banner.content.row3')}
                        </p>
                        <button className='btn-check-now'>
                            {t('banner.button')}  
                            <img src='../images/arrow-button.png' alt='arrow-button' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;