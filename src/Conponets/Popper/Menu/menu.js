import classNames from 'classnames/bind';
import styles from '../Menu/Menu.module.scss';
import MenuIteam from './menuItem.js';

var cx = classNames.bind(styles);

function Menu({ items = [] }) {
    var reanderItem = () => {
        return items.map((item, index) => <MenuIteam key={index} data={item} />);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-result')}>{reanderItem()}</div>
        </div>
    );
}

export default Menu;
