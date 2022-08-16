import Classnames from 'classnames/bind';
import MenuSidebar from './MenuSidebar/menuSidebar';
import MenuSidebarItem from './MenuSidebar/menuSidebarItem';
import confic from '../../../../confic/index';
import styles from './Sidebar.module.scss';
import { useEffect, useState } from 'react';
import {
    IconFollowingSidebar,
    IconFollowingSidebarColor,
    IconHomeSidebar,
    IconHomeSidebarColor,
    IconLiveSidebar,
} from '../../../Icons';
import MenuSidebarItems from '../../../Popper/MenuSidebar/MenuSidebarItems';

var cx = Classnames.bind(styles);

function Sidebar() {
    var [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=hoa&type=less')
            .then((res) => res.json())
            .then((res) => {
                setItem(res.data);
            });
    }, [item]);

    return (
        <div className={cx('wapper')}>
            <div className={cx('wapper-pageIcon')}>
                <MenuSidebar>
                    <MenuSidebarItem
                        title="For Your"
                        to={confic.home}
                        icon={<IconHomeSidebar />}
                        active={<IconHomeSidebarColor />}
                    />
                    <MenuSidebarItem
                        title="Following"
                        to={confic.following}
                        icon={<IconFollowingSidebar />}
                        active={<IconFollowingSidebarColor />}
                    />
                    <MenuSidebarItem
                        title="LIVE"
                        to={confic.live}
                        icon={<IconLiveSidebar />}
                        active={<IconLiveSidebar />}
                    />
                </MenuSidebar>
            </div>
            <div className={cx('wapper-item')}>
                <MenuSidebarItems data={item} />
            </div>
        </div>
    );
}

export default Sidebar;
