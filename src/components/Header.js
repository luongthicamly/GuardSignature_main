import React, { useState } from 'react';
import logo from '../logo-icon-1.png';
import { NavLink } from 'react-router-dom';
import '../scss/Header.scss'
import { useLocation } from "react-router-dom";
function Header(props) {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [isOpen, setIsOpen] = useState(false);
    const handleClickMenu = () => {
        setIsOpen(!isOpen);
    }
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
                                    <NavLink to='introduction' className={splitLocation[1] === "introduction" ? "active" : ""}>서비스 소개</NavLink>
                                </li>
                                <li className={splitLocation[1] === "introduction" ? "active" : ""}>
                                    <NavLink to='Security'>법적효력·보안</NavLink>
                                </li>
                                <li className={splitLocation[1] === "applications" ? "active" : ""}>
                                    <NavLink to='applications'>활용 분야</NavLink>
                                </li>
                                <li className={splitLocation[1] === "benefits" ? "active" : ""}>
                                    <NavLink to='benefits'>이용 혜택</NavLink>
                                </li>
                                <li className={splitLocation[1] === "infomation" ? "active" : ""}>
                                    <NavLink to='infomation'>요금 안내</NavLink>
                                </li>
                                <li className={splitLocation[1] === "service" ? "active" : ""}>
                                    <NavLink to='service'>고객센터</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="menu-right">
                        <nav>
                            <ul>
                                <li className={splitLocation[1] === "login" ? "active" : ""}>
                                    <NavLink to='login'>로그인</NavLink>
                                </li>
                                <li className={splitLocation[1] === "sign-up" ? "active" : ""}>
                                    <NavLink to='sign-up'>회원가입</NavLink>
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
                                    <NavLink to='introduction' className={splitLocation[1] === "introduction" ? "active" : ""}>서비스 소개</NavLink>
                                </li>
                                <li className={splitLocation[1] === "introduction" ? "active" : ""}>
                                    <NavLink to='Security'>법적효력·보안</NavLink>
                                </li>
                                <li className={splitLocation[1] === "applications" ? "active" : ""}>
                                    <NavLink to='applications'>활용 분야</NavLink>
                                </li>
                                <li className={splitLocation[1] === "benefits" ? "active" : ""}>
                                    <NavLink to='benefits'>이용 혜택</NavLink>
                                </li>
                                <li className={splitLocation[1] === "infomation" ? "active" : ""}>
                                    <NavLink to='infomation'>요금 안내</NavLink>
                                </li>
                                <li className={splitLocation[1] === "service" ? "active" : ""}>
                                    <NavLink to='service'>고객센터</NavLink>
                                </li>
                                <li className={splitLocation[1] === "login" ? "active" : ""}>
                                    <NavLink to='login'>로그인</NavLink>
                                </li>
                                <li className={splitLocation[1] === "sign-up" ? "active" : ""}>
                                    <NavLink to='sign-up'>회원가입</NavLink>
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