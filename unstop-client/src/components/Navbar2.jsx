import React from "react";
import style from "./Navbar2.module.css";
import burger from "../pics/burger.png";
import laptop from "../pics/laptop.png";
export default function Navbar2() {
  return (
    <div className={style.nav}>
      <div className={style.top}>
        <div className={style.topLeft}>
          <div className={style.drower}>
            <div>
              <img src={burger} />
            </div>
          </div>
          <div className={style.navHead}>Assessment</div>
        </div>
        <div className={style.topRight}>
          <img src={laptop} />
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.bottomLeft}>
          <div>My Assessments</div>
        </div>
        <div className={style.bottomRight}>
          <div>Unstop Assessments</div>
        </div>
      </div>
    </div>
  );
}
