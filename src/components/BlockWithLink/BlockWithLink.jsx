import React from "react";
import { Link } from "react-router-dom";

import styles from "./BlockWithLink.module.css"



function BlockWithLink(props) {

    const { title, text, link, linkText, colorModif, children } = props;


    function colorModifCheck(colorModif) {
        switch (colorModif) {
            case 'Dark':
                return styles.bwlDark;
            case 'Light':
                return styles.bwlLight;
            default:
                return styles.bwlDefault;
        }
    }

    return (

        <>
                <div className={[styles.block,  colorModifCheck(colorModif)].join(' ') }>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Link to={link}>{linkText}</Link>
                </div>
        </>
    );




    // console.log(props)
    // const { name, text, children } = props
    // return (
    //     <>
    //         {children}
    //         <div className="container">
    //             <div className={styles.paragraph}>
    //                 <h2>{text}</h2>
    //                 <hr />
    //                 <p>{name}</p>
    //             </div>
    //         </div>
    //     </>
    // );
}

export default BlockWithLink;
