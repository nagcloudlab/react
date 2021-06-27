
import React from 'react';

import styles from './CompTwo.module.css'

function CompTwo(props) {
    return (
        <div>
            <div className={styles['comp-text']}>im Comp-Two</div>
        </div>
    );
}

export default CompTwo;