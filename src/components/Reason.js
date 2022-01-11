import React, { useState } from 'react';
import '../scss/Reason.scss'
function Reason(props) {
    const [tab, setTab] = useState('tab-1');
    const handleClickTab = (nameTab) => {
        // console.log(nameTab)
        setTab(nameTab);
    }
    return (
        <div className='reason mt-5'>
            <div className='container'>
                <p className='title'>
                    가드 시그니처를 선택하는 이유
                </p>
                <p>
                    많은 기업들이 가드 시그니처를 선택하는 이유,<br/>
                    아래 버튼을 눌러 상세한 정보를 알아보세요.
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
                                쉽고 편리하게
                            </p>
                            <p>
                                번거로운 절차 없이 누구나<br/>
                                빠르게 계약을 체결할 수 있습니다.       
                            </p>
                        </div>
                        <div className={'item-tab '+ (tab === 'tab-2' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-2')}
                        >
                            {tab === 'tab-2' ? <img src='./images/reason_icon_2.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_2.1.png' alt='reason_icon'/>
                            }
                            <p className='title-item-tab'>
                                안전한 보안
                            </p>
                            <p>
                                데이터는 암호화되어 전송되고<br/>
                                안전한 곳에 저장됩니다.     
                            </p>
                        </div>
                        <div className={'item-tab '+ (tab === 'tab-3' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-3')}
                        >
                            {tab === 'tab-3' ? <img src='./images/reason_icon_3.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_3.1.png' alt='reason_icon'/>
                            }
                            <p className='title-item-tab'>
                                다양한 파일형식
                            </p>
                            <p>
                                한글, 오피스부터 PDF, JPG와<br/>
                                같은 이미지 파일도 변환없이 지원       
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
                                쉽고 편리하게
                            </p>
                            <p>
                                번거로운 절차 없이 누구나<br/>
                                빠르게 계약을 체결할 수 있습니다.       
                            </p>
                        </div>
                        <div className={'item-tab '+ (tab === 'tab-5' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-5')}
                        >
                            {tab === 'tab-5' ? <img src='./images/reason_icon_5.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_5.1.png' alt='reason_icon'/>
                            }
                            <p className='title-item-tab'>
                                안전한 보안
                            </p>
                            <p>
                                데이터는 암호화되어 전송되고<br/>
                                안전한 곳에 저장됩니다.     
                            </p>
                        </div>
                        <div className={'item-tab '+ (tab === 'tab-6' ? 'active' : '')}
                            onClick={()=> handleClickTab('tab-6')}
                        >
                            {tab === 'tab-6' ? <img src='./images/reason_icon_6.png' alt='reason_icon'/>
                            : <img src='./images/reason_icon_6.1.png' alt='reason_icon'/>
                            }
                            <p className='title-item-tab'>
                                다양한 파일형식
                            </p>
                            <p>
                                한글, 오피스부터 PDF, JPG와<br/>
                                같은 이미지 파일도 변환없이 지원       
                            </p>
                        </div>
                    </div>
                </div>
                <div className='btn-div'>
                    <div className='btn-download'>
                        <div>가이드 다운로드</div>
                        <img src="./images/icon-next.png" alt="icon-next"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reason;