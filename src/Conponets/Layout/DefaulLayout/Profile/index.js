import classNames from 'classnames/bind';
import styles from '../Profile/Profile.module.scss';

var cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('warper')}>
            <h1>Profile</h1>;
        </div>
    );
}

export default Profile;
