import Classnames from "classnames/bind"
import styles from "./DefaulLayout.module.scss"
import Header  from "./Header";
import Profile from "./Profile";
import Sidebar  from "./Sidebar";




var cx = Classnames.bind(styles)

function DefaulLayout () {

    return (

        <div className={cx('wapper')}>
            <Header /> 
            <div className={cx('container')}>
              <Sidebar />
                <div className={cx('content')}>
                    <Profile />
                </div>
            </div>
        </div>
  
    )
}

export default DefaulLayout