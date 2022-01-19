import React from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/Signature.scss';
function Signature(props) {
    const {t} = useTranslation();
    return (
        <div className='signature'>
            <div className='container'>
                <div className='item-signature'>
                    <div className='item-signature-left'>
                        <p className='title'>
                            {t('signature.block1.title.row1')}<br/>
                            {t('signature.block1.title.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block1.item1.title')}
                        </p>
                        <p>
                            {t('signature.block1.item1.content.row1')} <br/>
                            {t('signature.block1.item1.content.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block1.item2.title')}
                        </p>
                        <p>
                            {t('signature.block1.item2.content.row1')} <br/>
                            {t('signature.block1.item2.content.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block1.item3.title')}
                        </p>
                        <p>
                            {t('signature.block1.item3.content.row1')} <br/>
                            {t('signature.block1.item3.content.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block1.item4.title')}
                        </p>
                        <p>
                            {t('signature.block1.item4.content.row1')} <br/>
                            {t('signature.block1.item4.content.row2')}<br/>
                            {t('signature.block1.item4.content.row3')}
                        </p>
                    </div>
                    <div className='item-signature-right'>
                        <img src='./images/service_way_01_img.png' alt='service_way_01_img'/>
                    </div>
                </div>
                <div className='item-signature mt-5'>
                    <div className='item-signature-left'>
                        <img src='./images/service_way_02_img.png' alt='service_way_01_img'/>
                    </div>
                    <div className='item-signature-right'>
                        <p className='title'>
                            {t('signature.block2.title.row1')}<br/>
                            {t('signature.block2.title.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block2.item2.title')}
                        </p>
                        <p>
                            {t('signature.block2.item2.content.row1')} <br/>
                            {t('signature.block2.item2.content.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block2.item3.title')}
                        </p>
                        <p>
                            {t('signature.block2.item2.content.row1')} <br/>
                            {t('signature.block2.item2.content.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block2.item3.title')}
                        </p>
                        <p>
                            {t('signature.block2.item3.content.row1')} <br/>
                            {t('signature.block2.item3.content.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block2.item4.title')}
                        </p>
                        <p>
                            {t('signature.block2.item4.content.row1')} <br/>
                            {t('signature.block2.item4.content.row2')}<br/>
                        </p>
                    </div>
                </div>
                <div className='item-signature mt-5'>
                    <div className='item-signature-left'>
                    <p className='title'>
                            {t('signature.block3.title.row1')}<br/>
                            {t('signature.block3.title.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block3.item2.title')}
                        </p>
                        <p>
                            {t('signature.block3.item2.content.row1')} <br/>
                            {t('signature.block3.item2.content.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block3.item3.title')}
                        </p>
                        <p>
                            {t('signature.block3.item2.content.row1')} <br/>
                            {t('signature.block3.item2.content.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block3.item3.title')}
                        </p>
                        <p>
                            {t('signature.block3.item3.content.row1')} <br/>
                            {t('signature.block3.item3.content.row2')}
                        </p>
                        <p className='title-block'>
                            {t('signature.block3.item4.title')}
                        </p>
                        <p>
                            {t('signature.block3.item4.content.row1')} <br/>
                            {t('signature.block3.item4.content.row2')}<br/>
                        </p>
                    </div>
                    <div className='item-signature-right'>
                        <img src='./images/service_way_03_img.png' alt='service_way_01_img'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signature;