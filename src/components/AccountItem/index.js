import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "../Image";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return ( 
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src={data.avatar} 
                alt={data.full_name} 
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h4>{data.full_name}</h4>
                    {data.tick && <FontAwesomeIcon className={cx('search-check-icon')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
     );
}

export default AccountItem;