"use client";

import styles from "./styles.module.scss";
import ProfilePic from "../public/Chris_Randall.jpg";
import ResponsiveImage from "@components/Image";
import LinkedIn_icon from "public/LinkedIn_icon";
import Mail_icon from "public/Mail_icon";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.HomePageWrapper}>
      <div className={styles.BackgroundGradient}></div>
      <div className={styles.Content}>
        <div className={styles.LS}>
          <div>
            <div className={styles.PreTitle}>HELLO, MY NAME IS</div>
            <div className={styles.Divider}></div>

            <h2 className={styles.Title}>Chris Randall</h2>
            <span className={styles.SubTitle}>Web Developer</span>
            <Link href="https://www.linkedin.com/in/chris-randall-1b2919167/" className={styles.Contact}>
              <LinkedIn_icon />
              LinkedIn Profile
            </Link>
            <Link href="mailto:cmrandall86@gmail.com" className={styles.Contact}>
              <Mail_icon />
              Cmrandall86@gmail.com
            </Link>
          </div>
        </div>
        <div className={styles.RS}>
          <div className={styles.ImageWrap}>
            <ResponsiveImage priority src={ProfilePic} alt="profile picture" photoAspectRatio="square" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
