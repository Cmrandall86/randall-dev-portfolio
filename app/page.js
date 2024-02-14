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
      <div className={styles.BackgroundGradient} />
      <section className="w-100 Hero">
        <div className={styles.Content}>
          <div className={styles.LS}>
            <div>
              <div className={styles.PreTitle}>HELLO, MY NAME IS</div>
              <div className={styles.Divider} />

              <h2 className={styles.Title}>Chris Randall</h2>
              <div className={styles.SubTitle}>Web Developer</div>
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
      </section>
      <section>
        <div className={styles.Content}>
          <div className={styles.AboutMe}>
            <div className={styles.PreTitle}>ABOUT ME</div>
            <div className={styles.Divider} />
            <div className={styles.Summary}>
              I am an experienced full stack web developer with a specialization in front-end development using React
              and JavaScript.
            </div>
            <div className={styles.Columns}>
              <div className={styles.SummaryTitle}>I build web apps & software solutions.</div>
              <div className={styles.Column}>
                As a software engineer, I specialize in front-end web development using JavaScript and React. My passion
                for learning and improving my skills drives me to continuously seek new challenges and opportunities to
                grow. I am committed to bringing value to my team and contributing to the success of any project I work
                on.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
