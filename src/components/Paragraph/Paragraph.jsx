import React from "react";

import styles from "./Paragraph.module.css"

function Paragraph(props) {

    const { title, text, children } = props
    return (
        <>
            <div className="container">
                <div className={styles.paragraph}>
                    <h2>{title}</h2>
                    {/* <hr /> */}
                    {children}
                    <p>{text}</p>
                </div>
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

export default Paragraph;
