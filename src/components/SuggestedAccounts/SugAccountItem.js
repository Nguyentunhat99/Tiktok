// import PropTypes from 'prop-types';
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'

import styles from './SuggestedAccounts.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Image from '~/components/Image'
import AccountPreview from './AccountPreview';


const cx = classNames.bind(styles)

function SugAccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        )
    }
   
    return ( 
        <div>
            <Tippy  
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image 
                        className={cx('avatar')}
                        src='https://vcdn-thethao.vnecdn.net/2022/12/10/messi-3-jpeg-1670629980-167062-8929-4204-1670631569.jpg'
                        alt='leomessi'
                        fallback="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/241561126_629702118029729_8170529577232344788_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=K_9E-WXn98YAX_tMCmH&_nc_ht=scontent-hkt1-1.xx&oh=00_AfDJXGS4pEsFMQrkPb9w8Qegfpldu5F3O4OSIScDoiTZUA&oe=63952DA7"
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <strong>@LeoMessi</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </h4>
                        <p className={cx('name')}>Lionel Messi</p>
                    </div>
                </div>
            </Tippy>
        </div>
     );
}

// SugAccountItem.propTypes = {
    
// }

export default SugAccountItem;