import React from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/GetStarted.scss';
function GetStarted(props) {
    const { t } = useTranslation();
    return (
        <div className='get-started mt-5'>
            <p className='blue-text'>
                {t('getStarted.smallText')}
            </p>
            <h4>
                {t('getStarted.h4.row1')}<br />
                {t('getStarted.h4.row2')}
            </h4>
            <div className='div-btn'>
                <div className='btn-see-more'>
                    <div>{t('getStarted.button')}</div>
                    <img src='./images/icon-next.png' alt='icon-next' />
                </div>
            </div>
        </div>
    );
}

export default GetStarted;