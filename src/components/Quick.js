import React from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/QuickEasy.scss';
function Quick(props) {
    const {t} = useTranslation();
    return (
        <div className='easy-quick'>
            <div className='container'>
                <div className='easy-quick-content'>
                    <div className='easy-quick-left'>
                        {t('quick.title.row1')}<br className='mobile-br'/> {t('quick.title.row2')}
                    </div>
                    <div className='easy-quick-right'>
                        {t('quick.content.row1')}<br />
                        {t('quick.content.row2')}<br />
                        {t('quick.content.row3')}<br />
                        <p>{t('quick.content.row4')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quick;