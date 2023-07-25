import React from "react";
import styles from "./Sidebar.module.css";
export default function Sidebar() {
  return (
    <div className={styles.frameWrapper6} style={{ position: "static" }}>
      <div className={styles.frameParent30}>
        <div className={styles.frameParent31}>
          <div className={styles.dashboardParent}>
            <img className={styles.dashboardIcon} alt="" src="/dashboard.svg" />
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.noteAltParent}>
            <img className={styles.noteAltIcon} alt="" src="/note-alt.svg" />
            <div className={styles.dashboard}>Assessment</div>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.quizParent}>
            <img className={styles.dotIcon} alt="" src="/quiz.svg" />
            <div className={styles.assessmentsOverview}>My Library</div>
          </div>
          <div className={styles.frameChild19} />
          <div className={styles.frameChild19} />
          <div className={styles.frameChild19} />
          <div className={styles.billAndPlanLineWrapper}>
            <div className={styles.linkIcon} />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild22} alt="" src="/vector-267.svg" />
          <div className={styles.frameParent32}>
            <div className={styles.adminWrapper}>
              <div className={styles.newAssessment}>Admin</div>
            </div>
            <div className={styles.adminMedsParent}>
              <img className={styles.dotIcon} alt="" src="/admin-meds.svg" />
              <div className={styles.assessmentsOverview}>
                <p className={styles.round}>Round</p>
                <p className={styles.round}>Status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
