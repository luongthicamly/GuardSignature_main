import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/Reason.scss'
function Reason(props) {
    const [tab, setTab] = useState('tab-1');
    const handleClickTab = (nameTab) => {
        // console.log(nameTab)
        setTab(nameTab);
    }
    const {t} = useTranslation();
    return (
        <div className='reason mt-5'>
            <div className='container'>
                <p className='title'>
                    {t('reason.title')}
                </p>
                <p>
                    {t('reason.descreption.des1')}<br/>
                    {t('reason.descreption.des2')}
                </p>
                <div className='content-reason'>
                    <div className='tab-left'>
                        <div className={'item-tab '+ (tab === 'tab-1' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-1')}
                          >
                            {tab === 'tab-1' ? <img src='./images/reason_icon_1.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_1.1.png' alt='reason_icon'/>
                            }

                            <p className='title-item-tab'>
                                {t('reason.item1.title')}
                            </p>
                            <p>
                                {t('reason.item1.content.row1')}<br/>
                                {t('reason.item1.content.row2')}     
                            </p>
                        </div>
                        <div className={'item-tab '+ (tab === 'tab-2' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-2')}
                        >
                            {tab === 'tab-2' ? <img src='./images/reason_icon_2.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_2.1.png' alt='reason_icon'/>
                            }
                            <p className='title-item-tab'>
                                {t('reason.item2.title')}
                            </p>
                            <p>
                                {t('reason.item2.content.row1')}<br/>
                                {t('reason.item2.content.row2')}     
                            </p>
                        </div>
                        <div className={'item-tab '+ (tab === 'tab-3' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-3')}
                        >
                            {tab === 'tab-3' ? <img src='./images/reason_icon_3.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_3.1.png' alt='reason_icon'/>
                            }
                            <p className='title-item-tab'>
                                {t('reason.item3.title')}
                            </p>
                            <p>
                                {t('reason.item3.content.row1')}<br/>
                                {t('reason.item3.content.row2')}     
                            </p>
                        </div>
                    </div>
                    <div className='content-tab'>
                        {tab === 'tab-1' ? <img src='./images/reason_img_1.png' alt='reason_img' className='img-1'/> :''}
                        {tab === 'tab-2' ? <img src='./images/reason_img_2.png' alt='reason_img' className='img-2'/> :''}
                        {tab === 'tab-3' ? <img src='./images/reason_img_3.png' alt='reason_img' className='img-3'/> :''}
                        {tab === 'tab-4' ? <img src='./images/reason_img_4.png' alt='reason_img' className='img-4'/> :''}
                        {tab === 'tab-5' ? <img src='./images/reason_img_5.png' alt='reason_img' className='img-5'/> :''}
                        {tab === 'tab-6' ? <img src='./images/reason_img_3.png' alt='reason_img' className='img-6'/> :''}
                    </div>
                    <div className='tab-right'>
                        <div className={'item-tab '+ (tab === 'tab-4' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-4')}
                        >
                            {tab === 'tab-4' ? <img src='./images/reason_icon_4.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_4.1.png' alt='reason_icon'/>
                            }
                            <p className='title-item-tab'>
                                {t('reason.item4.title')}
                            </p>
                            <p>
                                {t('reason.item4.content.row1')}<br/>
                                {t('reason.item4.content.row2')}     
                            </p>
                        </div>
                        <div className={'item-tab '+ (tab === 'tab-5' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-5')}
                        >
                            {tab === 'tab-5' ? <img src='./images/reason_icon_5.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_5.1.png' alt='reason_icon'/>
                            }
                            <p className='title-item-tab'>
                                {t('reason.item5.title')}
                            </p>
                            <p>
                                {t('reason.item5.content.row1')}<br/>
                                {t('reason.item5.content.row2')}     
                            </p>
                        </div>
                        <div className={'item-tab '+ (tab === 'tab-6' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-6')}
                        >
                            {tab === 'tab-6' ? <img src='./images/reason_icon_6.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_6.1.png' alt='reason_icon'/>
                            }
                            <p className='title-item-tab'>
                                {t('reason.item6.title')}
                            </p>
                            <p>
                                {t('reason.item6.content.row1')}<br/>
                                {t('reason.item6.content.row2')}     
                            </p>
                        </div>
                    </div>
                </div>
                <div className='btn-div'>
                    <div className='btn-download'>
                        <div>{t('reason.button')}</div>
                        <img src="./images/icon-next.png" alt="icon-next"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reason;