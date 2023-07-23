import React from "react";
import style from "../components/Navbar.module.css";
import vector from "../pics/Vector.png";

export default function Navbar() {
  return (
    <div>
      <div className={style.nav}>
        <table cellPadding={0} cellSpacing={0}>
          <tr>
            <td style={{ padding: "10px" }}>
              <table>
                <tr>
                  <td align="left" className={style.assesment}>
                    Assesment
                  </td>
                  <td align="left">My Assesments</td>
                  <td align="right">
                    <img src={vector} alt="" width={13.99} height={22} />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
