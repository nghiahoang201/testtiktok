import classNames from 'classnames/bind';
import styles from '../AcCountItem/AcCountItem.module.scss';
import { Link } from 'react-router-dom';
import { IconCheck } from '../Icons';

var cx = classNames.bind(styles);

function AcCountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avartar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>

                    {data.tick && <IconCheck className={cx('info-icon')} />}
                </p>
                <p className={cx('username')}> {data.nickname}</p>
            </div>
        </Link>
    );
}

export default AcCountItem;
