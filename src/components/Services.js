import React from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/Service.scss'
function Services(props) {
    const { t } =useTranslation();
    return (
        <div className='services mt-5'>
            <div className='item-service'>
                <div className='container'>
                    <div className='service'>
                        <div className='img-service'>
                            <img src='./images/service-01-img.png' alt='service-01-img' />
                        </div>
                        <div className='content-service'>
                            <div>
                                <p className='blue-text'>{t('service.block1.small')}</p>
                                <p className='title-service'>
                                    {t('service.block1.title.row1')}<br />
                                    {t('service.block1.title.row2')}
                                </p>
                                <p className='info-service'>
                                    {t('service.block1.content.row1')}<br />
                                    {t('service.block1.content.row2')}<br />
                                    {t('service.block1.content.row3')}<br />
                                    {t('service.block1.content.row4')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='item-service mt-5'>
                <div className='container'>
                    <div className='service'>
                        <div className='content-service'>
                            <div>
                                <p className='blue-text'>{t('service.block2.small')}</p>
                                <p className='title-service'>
                                    {t('service.block2.title.row1')}<br />
                                    {t('service.block2.title.row2')}
                                </p>
                                <p className='info-service'>
                                    {t('service.block2.content.row1')}<br />
                                    {t('service.block2.content.row2')}<br />
                                    {t('service.block2.content.row3')}<br />
                                    {t('service.block2.content.row4')}
                                </p>
                            </div>
                        </div>
                        <div className='img-service'>
                            <img src='./images/service-02-img.png' alt='service-02-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='item-service mt-5'>
                <div className='container'>
                    <div className='service'>
                        <div className='img-service'>
                            <img src='./images/service-03-img.png' alt='service-03-img' />
                        </div>
                        <div className='content-service'>
                            <div>
                                <p className='blue-text'>{t('service.block3.small')}</p>
                                <p className='title-service'>
                                    {t('service.block3.title.row1')}<br />
                                    {t('service.block3.title.row2')}
                                </p>
                                <p className='info-service'>
                                    {t('service.block3.content.row1')}<br />
                                    {t('service.block3.content.row2')}<br />
                                    {t('service.block3.content.row3')}<br />
                                    {t('service.block3.content.row4')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='item-service mt-5'>
                <div className='container'>
                    <div className='service'>
                        <div className='content-service'>
                            <div>
                                <p className='blue-text'>{t('service.block4.small')}</p>
                                <p className='title-service'>
                                    {t('service.block4.title.row1')}<br />
                                    {t('service.block4.title.row2')}
                                </p>
                                <p className='info-service'>
                                    {t('service.block4.content.row1')}<br />
                                    {t('service.block4.content.row2')}<br />
                                    {t('service.block4.content.row3')}<br />
                                    {t('service.block4.content.row4')}
                                </p>
                            </div>
                        </div>
                        <div className='img-service'>
                            <img src='./images/service-04-img.png' alt='service-04-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;