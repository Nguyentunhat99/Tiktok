import classNames from 'classnames/bind'
import styles from './AccountPreview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles)


function AccoutPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}             >
                <Image 
                    src='https://vcdn-thethao.vnecdn.net/2022/12/10/messi-3-jpeg-1670629980-167062-8929-4204-1670631569.jpg'
                    className={cx('avatar')} 
                    alt='nhat'
                    fallback="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/241561126_629702118029729_8170529577232344788_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=K_9E-WXn98YAX_tMCmH&_nc_ht=scontent-hkt1-1.xx&oh=00_AfDJXGS4pEsFMQrkPb9w8Qegfpldu5F3O4OSIScDoiTZUA&oe=63952DA7"
                />
                <Button primary className={cx('btn-follow')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <strong>@LeoMessi</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                    </h4>
                <p className={cx('name')}>Lionel Messi</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>400M</strong>
                <span className={cx('label')}>Followwers</span>
                <strong className={cx('value')}>400M</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
     );
}

export default AccoutPreview;