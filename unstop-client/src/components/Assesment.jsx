import React from "react";
import styles from "../components/Assesment.module.css";
import add from "../pics/add.png";
import beg from "../pics/beg.png";
import line from "../pics/line.png";
import cal from "../pics/cal.png";
import line2 from "../pics/line2.png";
import link from "../pics/link.png";
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
                  <div>
                    <div>job</div>
                    <img src={line} />
                    <div>
                      <img src={cal} />
                      <div>20 Apr 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={line2} />
            <div className={styles.last}>
              <div>
                <div>
                  <div>00</div>
                  <div>Duration</div>
                </div>
                <div>
                  <div>00</div>
                  <div>Questions</div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <img src={link} />
                  </div>
                  <div>share</div>
                </div>
                <div className={styles.lp}>
                  <div>LP</div>
                </div>
              </div>
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
                  <div>
                    <div>job</div>
                    <img src={line} />
                    <div>
                      <img src={cal} />
                      <div>20 Apr 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={line2} />
            <div className={styles.last}>
              <div>
                <div>
                  <div>00</div>
                  <div>Duration</div>
                </div>
                <div>
                  <div>00</div>
                  <div>Questions</div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <img src={link} />
                  </div>
                  <div>share</div>
                </div>
                <div className={styles.lp}>
                  <div>LP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assesment;
