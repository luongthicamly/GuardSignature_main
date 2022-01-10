import React from 'react';
import '../scss/GetStarted.scss';
function GetStarted(props) {
    return (
        <div className='get-started mt-5'>
            <p className='blue-text'>
                지금 바로 시작하세요!
            </p>
            <h4>
                설명이 필요 없는 간단한 계약 과정,<br />
                직접 경험해보세요!
            </h4>
            <div className='div-btn'>
                <div className='btn-see-more'>
                    <div>더 살펴보기</div>
                    <img src='./images/icon-next.png' alt='icon-next' />
                </div>
            </div>
        </div>
    );
}

export default GetStarted;