// Layout
// import HeaderOnly from '../Conponets/Layout/HeaderOnly'

import confic from '../confic/index';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import upload from '../pages/Upload';
import Search from '../pages/Search';
import FedBack from '../pages/Fedback';
import Live from '../pages/Live';

var publicRoutes = [
    { path: confic.home, component: Home },
    { path: confic.following, component: Following },
    { path: confic.profile, component: Profile },
    { path: confic.upload, component: upload, layout: null },
    { path: confic.search, component: Search, layout: null },
    { path: confic.fedback, component: FedBack, layout: null },
    { path: confic.live, component: Live, layout: null },
];
var privateRoutes = [];

export { publicRoutes, privateRoutes };
