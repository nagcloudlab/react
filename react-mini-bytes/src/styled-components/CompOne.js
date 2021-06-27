
import React from 'react';

import styles from './CompOne.module.css'
import {withCard} from './withCard'

function CompOne(props) {
    return (
        <div>
            <div className={styles['comp-text']}>im Comp-One</div>
        </div>
    );
}

export default withCard(CompOne);