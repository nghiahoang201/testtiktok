import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../../Sidebar/Sidebar.module.scss';

var cx = classNames.bind(styles);

function MenuSidebarItem({ title, to, icon, active }) {
    return (
        <NavLink className={(nav) => cx('menuItem', { active: nav.isActive })} to={to}>
            <span className={cx('menuItem-icon')}>{icon}</span>
            <span className={cx('menuItem-active')}>{active}</span>
            <span className={cx('menuItem-title')}>{title}</span>
        </NavLink>
    );
}

MenuSidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuSidebarItem;
