import Classnames from 'classnames/bind';
import styles from '../Menu/Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Iconbox, IconMessage } from '../../Icons';
import Images from '../../../assets/images/images.js';

var cx = Classnames.bind(styles);

function MenuUser() {
    return (
        <div className={cx('menu-user')}>
            <button className={cx('btn-item-update')}>Tải lên</button>
            <Tippy
                delay={[0, 100]}
                interactive
                render={(attrs) => (
                    <div className={cx('box')} tabIndex="-1" {...attrs}>
                        Tin nhắn
                    </div>
                )}
            >
                <button className={cx('btn-message')}>
                    <IconMessage className={cx('icon-message')} />
                </button>
            </Tippy>
            <Tippy
                delay={[0, 100]}
                interactive
                render={(attrs) => (
                    <div className={cx('box')} tabIndex="-1" {...attrs}>
                        Hộp thư
                    </div>
                )}
            >
                <button className={cx('btn-message')}>
                    <Iconbox className={cx('icon-messages')} />
                </button>
            </Tippy>
            <img src={Images.imageLogo} className={cx('img')} alt="anh-user" />
        </div>
    );
}

export default MenuUser;
