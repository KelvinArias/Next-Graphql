import React from 'react';
import styles from '../scss/header.module.scss'

const Header = props => {

    return (
        <header className={styles.header}>
            <div className="container p-2">
                <div className="row">
                    <div className="row col-xs-4">
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/48792dd29811/assets/img/logos_desktop/default.png" alt="logo" />
                    </div>
                    <div className="col-xs-4">
                        <div className={`${styles.search} row p-1`}>
                            <div className="col-xs-10 p-0 border-r">
                                <input placeholder="Search..." className={`${styles.input} p-2`} />
                            </div>
                            <div className="lensBox col-xs-2 p-0 row justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 

export default Header
