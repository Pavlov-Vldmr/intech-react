import React from "react";

import styles from "./BlockWithLinkGroup.module.css"

function BlockWithLinkGroup(props) {
const {children} = props
    return (                                
        <>
           
                <div className={styles.BlockWithLinkGroup}>
                    {children}
                </div>
           
        </>

    );

}

export default BlockWithLinkGroup;
