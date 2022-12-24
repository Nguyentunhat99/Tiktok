// import PropTypes from 'prop-types';
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss'
const cx = classNames.bind(styles)

function SugAccountItem() {
    return ( 
        <div className={cx('account-item')}>
            <img 
                className={cx('avatar')}
                src='https://vcdn-thethao.vnecdn.net/2022/12/10/messi-3-jpeg-1670629980-167062-8929-4204-1670631569.jpg'
                alt=''
            />
            <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                    <strong>@LeoMessi</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <p className={cx('name')}>Lionel Messi</p>
            </div>
        </div>
     );
}

// SugAccountItem.propTypes = {
    
// }

export default SugAccountItem;