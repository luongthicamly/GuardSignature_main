import React from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/ContractingProcess.scss';
function ContractingProcess(props) {
    const { t } = useTranslation();
    return (
        <div className='contracting-process mt-5'>
            <div className='container'>
                <h3>{t('contracting.title')}</h3>
                <p>
                    {t('contracting.descreption.des1')}<br />
                    {t('contracting.descreption.des2')}<br />
                    {t('contracting.descreption.des3')}
                </p>
                <div className='row-process mt-5'>
                    <div className='item-process'>
                        <img src='./images/upload-icon-1.png' alt='upload-icon-1' />
                        <p className='title-item'>{t('contracting.process.itemProcess1.title')}</p>
                        <p>
                            {t('contracting.process.itemProcess1.content.row1')}<br />
                            {t('contracting.process.itemProcess1.content.row2')}
                        </p>
                    </div>
                    <div className='item-process'>
                        <img src='./images/upload-icon-2.png' alt='upload-icon-2' />
                        <p className='title-item'>{t('contracting.process.itemProcess2.title')}</p>
                        <p>
                            {t('contracting.process.itemProcess2.content.row1')}<br />
                            {t('contracting.process.itemProcess2.content.row2')}
                        </p>
                    </div>
                    <div className='item-process'>
                        <img src='./images/upload-icon-3.png' alt='upload-icon-3' />
                        <p className='title-item'>{t('contracting.process.itemProcess3.title')}</p>
                        <p>
                            {t('contracting.process.itemProcess3.content.row1')}<br />
                            {t('contracting.process.itemProcess3.content.row2')}
                        </p>
                    </div>
                    <div className='item-process'>
                        <img src='./images/upload-icon-4.png' alt='upload-icon-4' />
                        <p className='title-item'>{t('contracting.process.itemProcess4.title')}</p>
                        <p>
                            {t('contracting.process.itemProcess4.content.row1')}<br />
                            {t('contracting.process.itemProcess4.content.row2')}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContractingProcess;