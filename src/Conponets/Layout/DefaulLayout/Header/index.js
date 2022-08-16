import { useState, useEffect, useRef } from 'react';
import Classnames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '../../../Popper/Wrapper.js';
import Menu from '../../../Popper/Menu/menu.js';
import MenuUser from '../../../Popper/menuUser';
import useDebounce from '../../../../hook/useDebounce.js';
import { Link } from 'react-router-dom';
import confic from '../../../../confic/index';

import ImageLogo from '../../../../assets/images';
import { Clear, IconMenu, Loadding, Search } from '../../../Icons';

var cx = Classnames.bind(styles);

var MENU_ITEMS = [
    {
        icon: (
            <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 2C7.68629 2 5 4.68629 5 8V40C5 43.3137 7.68629 46 11 46H37C40.3137 46 43 43.3137 43 40V8C43 4.68629 40.3137 2 37 2H11ZM9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V40C39 41.1046 38.1046 42 37 42H11C9.89543 42 9 41.1046 9 40V8ZM26.063 14.1175C25.7306 13.4415 25.0465 13.0096 24.2933 13.0002C23.54 12.9907 22.8453 13.4054 22.4961 14.0729L15.6945 27.0746L12.4672 33.1814C12.2092 33.6697 12.3958 34.2747 12.8841 34.5328L14.6524 35.4672C15.1407 35.7253 15.7457 35.5386 16.0038 35.0503L18.6718 30.0017H29.4421L32.0324 35.0274C32.2854 35.5183 32.8885 35.7112 33.3794 35.4581L35.1572 34.5419C35.6481 34.2888 35.8409 33.6858 35.5879 33.1948L32.4477 27.1022L26.063 14.1175ZM27.4492 26.0017H20.77L24.213 19.4202L27.4492 26.0017Z"
                ></path>
            </svg>
        ),
        title: 'Tiếng Việt',
    },
    {
        icon: (
            <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
                ></path>
            </svg>
        ),
        title: 'Phản hồi và trợ giúp',
        to: '/fedback',
    },
    {
        icon: (
            <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24ZM24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM15 14C14.4477 14 14 14.4477 14 15V17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V15C18 14.4477 17.5523 14 17 14H15ZM14 31C14 30.4477 14.4477 30 15 30H33C33.5523 30 34 30.4477 34 31V33C34 33.5523 33.5523 34 33 34H15C14.4477 34 14 33.5523 14 33V31ZM15 22C14.4477 22 14 22.4477 14 23V25C14 25.5523 14.4477 26 15 26H17C17.5523 26 18 25.5523 18 25V23C18 22.4477 17.5523 22 17 22H15ZM22 15C22 14.4477 22.4477 14 23 14H25C25.5523 14 26 14.4477 26 15V17C26 17.5523 25.5523 18 25 18H23C22.4477 18 22 17.5523 22 17V15ZM23 22C22.4477 22 22 22.4477 22 23V25C22 25.5523 22.4477 26 23 26H25C25.5523 26 26 25.5523 26 25V23C26 22.4477 25.5523 22 25 22H23ZM30 15C30 14.4477 30.4477 14 31 14H33C33.5523 14 34 14.4477 34 15V17C34 17.5523 33.5523 18 33 18H31C30.4477 18 30 17.5523 30 17V15ZM31 22C30.4477 22 30 22.4477 30 23V25C30 25.5523 30.4477 26 31 26H33C33.5523 26 34 25.5523 34 25V23C34 22.4477 33.5523 22 33 22H31Z"
                ></path>
            </svg>
        ),
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    var [searchValue, setSearchValue] = useState('');
    var [searchResult, setSearchResult] = useState([]);
    var [showResult, setShowResult] = useState(true);
    var [loadding, setloadding] = useState(false);

    var debounce = useDebounce(searchValue, 500);

    var inputRef = useRef();

    var handClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    var handleChange = (e) => {
        var searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    var handHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setloadding(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setloadding(false);
            })
            .catch(() => {
                setloadding(false);
            });
    }, [debounce]);

    var currenUser = true;

    return (
        <header className={cx('wapper')}>
            <div className={cx('nav')}>
                <Link to={confic.home}>
                    <div className={cx('logo')}>
                        <ImageLogo />
                    </div>
                </Link>
                {/* Using a wrapper div tag around the reference element solves this by creating a new parentNode context. */}
                <div>
                    <Tippy
                        onClickOutside={handHideResult}
                        interactive
                        visible={showResult && searchResult.length > 0}
                        render={(attrs) => <PopperWrapper data={searchResult} />}
                    >
                        <div className={cx('search')}>
                            <div className={cx('input')}>
                                <input
                                    ref={inputRef}
                                    value={searchValue}
                                    className={cx('search-input')}
                                    placeholder="Tìm kiếm tài khoản và video"
                                    onChange={handleChange}
                                    onFocus={() => setShowResult(true)}
                                ></input>
                                {!!searchValue && !loadding && (
                                    <button className={cx('search-icon-clear')} onClick={handClear}>
                                        <Clear />
                                    </button>
                                )}
                                {loadding && <Loadding className={cx('search-icon-loadding')} />}
                            </div>
                            <span className={cx('search-l')}></span>
                            <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                                <Search />
                            </button>
                        </div>
                    </Tippy>
                </div>
                {currenUser ? (
                    <MenuUser />
                ) : (
                    <div className={cx('items')}>
                        <button className={cx('btn-item-update')}>Tải lên</button>
                        <button className={cx('btn-item-login')}>Đăng nhập</button>
                        <Tippy interactive placement="bottom-end" render={(attrs) => <Menu items={MENU_ITEMS} />}>
                            <i className={cx('icon-menu')}>
                                <IconMenu />
                            </i>
                        </Tippy>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
