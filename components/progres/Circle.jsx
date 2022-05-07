import React from "react";
import styles from "../../styles/circle.module.scss";


const Circle = ( number,) => {
  return (

    <div className={styles.circle}>
             <div className="box">
          <div className={styles.percent}>
            <svg>
            <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className={styles.num}>
              <h2>
                90<span>%</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Circle;
