import React from 'react';
import '../scss/ContractingProcess.scss';
function ContractingProcess(props) {
    return (
        <div className='contracting-process mt-5'>
            <div className='container'>
                <h3>간단하게 끝내는 계약과정</h3>
                <p>
                    계약서 파일을 업로드하여 서명을 요청해 보세요.<br />
                    상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다.<br />
                    언제 어디서든 5분만에 계약을 체결해 보세요.
                </p>
                <div className='row-process mt-5'>
                    <div className='item-process'>
                        <img src='./images/upload-icon-1.png' alt='upload-icon-1' />
                        <p className='title-item'>업로드하기</p>
                        <p>
                            필요한 계약서 파일을<br />
                            업로드합니다.
                        </p>
                    </div>
                    <div className='item-process'>
                        <img src='./images/upload-icon-2.png' alt='upload-icon-2' />
                        <p className='title-item'>서명 요청하기</p>
                        <p>
                            업로드한 계약서 파일에<br />
                            서명 요청을 하세요.
                        </p>
                    </div>
                    <div className='item-process'>
                        <img src='./images/upload-icon-3.png' alt='upload-icon-3' />
                        <p className='title-item'>서명 입력하기</p>
                        <p>
                            상대방이 간단한 절차를 통해<br />
                            서명할 수 있습니다.
                        </p>
                    </div>
                    <div className='item-process'>
                        <img src='./images/upload-icon-4.png' alt='upload-icon-4' />
                        <p className='title-item'>계약 완료</p>
                        <p>
                            언제 어디서든<br />
                            5분 만에 계약 완료!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContractingProcess;