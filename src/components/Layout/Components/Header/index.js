import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faEllipsisVertical, faKeyboard, faLanguage, faMagnifyingGlass, faCircleQuestion, faSpinner, faMessage, faPaperPlane, faCloudUpload, faUser, faCoins, faGear, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import  'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Header.module.scss'
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt'
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([])
    const currentUser = true
    
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        },3000)
    },[])

    const handleMenuChange = (menuItem)=>{
        switch (menuItem.type) {
            case 'language':
                //
                break;
        
            default:
                break;
        }
    }

    const user_Menu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@nhat',
            
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',    
            separate: true,
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ] 

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>
                <HeadlessTippy 
                    interactive
                    visible={searchResult.length>0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                            </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input 

                            placeholder='Search accounts and videos...'
                            spellCheck = {false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>   
                    </div>
                    </HeadlessTippy>
                    <div className={cx('actions')}>

                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content='Tin nhắn'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                           <Tippy delay={[0, 200]} content='Hộp thư'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                           </Tippy>                         
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary small>Log in</Button>            
                        </>
                    )}
                        <Menu items={currentUser ? user_Menu : MENU_ITEMS}
                            onChange={handleMenuChange}
                        >
                        {currentUser ? (
                            <img src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1635139824091137.jpeg?x-expires=1670263200&x-signature=b4mQocYyN6Kda467u1sJ5CRJs%2BY%3D' className={cx('user-avatar')} alt='nhat'/>
                        ):(
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        ) 
                        }
                        </Menu>
                    </div>

            </div>
        </header>
    ) 
}

export default Header;