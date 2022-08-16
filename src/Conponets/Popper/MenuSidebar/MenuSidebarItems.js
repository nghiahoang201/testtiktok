import classNames from 'classnames/bind';
import styles from '../../Popper/Popper.module.scss';
import AcCountItem from '../../AcCountItem/index';

var cx = classNames.bind(styles);

function MenuSidebarItems({ data }) {
    return (
        <div className={cx('wrapper-item')}>
            <div className={cx('search-result-item')}>
                <p className={cx('title')}>Tài khoản được đề xuất </p>
                {data.map((result) => (
                    <AcCountItem key={result.id} data={result} />
                ))}
            </div>
        </div>
    );
}

export default MenuSidebarItems;
