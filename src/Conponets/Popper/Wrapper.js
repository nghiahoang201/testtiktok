import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import AcCountItem from '../AcCountItem';

var cx = classNames.bind(styles);

function Wapper({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-result')}>
                <h4>Accounts</h4>
                {data.map((result) => (
                    <AcCountItem key={result.id} data={result} />
                ))}
            </div>
        </div>
    );
}

export default Wapper;
