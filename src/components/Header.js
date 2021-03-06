import React, { useState } from 'react';
import logo from '../logo-icon-1.png';
import { NavLink } from 'react-router-dom';
import '../scss/Header.scss'
import { useLocation } from "react-router-dom";
import i18n from '../i18next/i18n';
import { useTranslation } from 'react-i18next';
function Header(props) {
    const [activeLanguage, setActiveLanguage] = useState('korea');
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [isOpen, setIsOpen] = useState(false);
    const handleClickMenu = () => {
        setIsOpen(!isOpen);
    }
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setActiveLanguage(lng);
    }
    const { t } = useTranslation();
    return (
        <header>
            <div className="container">
                <div className='wrap_header'>
                    <div className="logo">
                        <img src={logo} className="logo-img" alt="logo" />
                    </div>
                    <div className="menu-center">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to='introduction' className={splitLocation[1] === "introduction" ? "active" : ""}>
                                    {t('menu.itemMenu1')}</NavLink>
                                </li>
                                <li className={splitLocation[1] === "introduction" ? "active" : ""}>
                                    <NavLink to='Security'>{t('menu.itemMenu2')}</NavLink>
                                </li>
                                <li className={splitLocation[1] === "applications" ? "active" : ""}>
                                    <NavLink to='applications'>{t('menu.itemMenu3')}</NavLink>
                                </li>
                                <li className={splitLocation[1] === "benefits" ? "active" : ""}>
                                    <NavLink to='benefits'>{t('menu.itemMenu4')}</NavLink>
                                </li>
                                <li className={splitLocation[1] === "infomation" ? "active" : ""}>
                                    <NavLink to='infomation'>{t('menu.itemMenu5')}</NavLink>
                                </li>
                                <li className={splitLocation[1] === "service" ? "active" : ""}>
                                    <NavLink to='service'>{t('menu.itemMenu6')}</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="menu-right">
                        <nav>
                            <ul>
                                <li className={splitLocation[1] === "login" ? "active" : ""}>
                                    <NavLink to='login'>{t('menu.itemMenu7')}</NavLink>
                                </li>
                                <li className={splitLocation[1] === "sign-up" ? "active" : ""}>
                                    <NavLink to='sign-up'>{t('menu.itemMenu8')}</NavLink>
                                </li>
                                <li>
                                    <div className='language'>
                                        <div className={'en ' + (activeLanguage === 'en' ? "active" :'') } onClick={() => changeLanguage('en')}>EN</div>
                                        <div className={'kore ' + (activeLanguage === 'korea' ? "active" :'')} onClick={() => changeLanguage('korea')}>KORE</div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={'icon-mobile' + (isOpen === true ? ' isOpen' : '')}
                        onClick={handleClickMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={"menu-mobile" + (isOpen === true ? ' isOpen' : '')}>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to='introduction' className={splitLocation[1] === "introduction" ? "active" : ""}>????????? ??????</NavLink>
                                </li>
                                <li className={splitLocation[1] === "introduction" ? "active" : ""}>
                                    <NavLink to='Security'>????????????????????</NavLink>
                                </li>
                                <li className={splitLocation[1] === "applications" ? "active" : ""}>
                                    <NavLink to='applications'>?????? ??????</NavLink>
                                </li>
                                <li className={splitLocation[1] === "benefits" ? "active" : ""}>
                                    <NavLink to='benefits'>?????? ??????</NavLink>
                                </li>
                                <li className={splitLocation[1] === "infomation" ? "active" : ""}>
                                    <NavLink to='infomation'>?????? ??????</NavLink>
                                </li>
                                <li className={splitLocation[1] === "service" ? "active" : ""}>
                                    <NavLink to='service'>????????????</NavLink>
                                </li>
                                <li className={splitLocation[1] === "login" ? "active" : ""}>
                                    <NavLink to='login'>?????????</NavLink>
                                </li>
                                <li className={splitLocation[1] === "sign-up" ? "active" : ""}>
                                    <NavLink to='sign-up'>????????????</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;