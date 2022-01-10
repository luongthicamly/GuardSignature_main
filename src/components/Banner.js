import React from 'react';
import '../scss/Banner-home.scss'
function Banner(props) {
    return (
        <div className='banner-home'>
            <div className='container'>
                <div className='box-banner'>
                    <div className='content-banner'>
                        <h1>
                            모든 계약을 쉽고<br />
                            간단하게, 빠르게 처리하세요.
                        </h1>
                        <p>
                            가드 시그니처를 이용하면 어떤 계약이든 <br />
                            복잡한 과정없이 간편하고 손쉽게 처리할 수 있고, <br />
                            문서 처리 및 관리까지 편리하게 이용할 수 있습니다.
                        </p>
                        <button className='btn-check-now'>
                            지금 확인하기
                            <img src='../images/arrow-button.png' alt='arrow-button' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;