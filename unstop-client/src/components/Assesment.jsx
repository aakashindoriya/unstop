import React from "react";
import styles from "../components/Assesment.module.css";
import add from "../pics/add.png";
import beg from "../pics/beg.png";
function Assesment() {
  console.log(styles);
  return (
    <div className={styles.assesment}>
      <div>
        <div>My Assesment</div>
      </div>
      <div className={styles.mainBox}>
        <div>
          <div className={styles.card1}>
            <div className={styles.newAssesment}>
              <div>
                <img src={add} />
              </div>
              <div>New Assesment</div>
            </div>
            <div>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </div>
          </div>
          <div className={styles.card2}>
            <div>
              <div>
                <div className={styles.icon1}>
                  <img src={beg} />
                </div>
                <div className={styles.bottom}>
                  <div>Math Assessment</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Assesment;
