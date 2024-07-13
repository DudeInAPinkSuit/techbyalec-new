import image from "./about.webp";
import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.aboutRow}>
                    <div className={styles.aboutCol1}>
                        <img src={image} alt="aboutmeimg" />
                    </div>
                    <div className={styles.aboutCol2}>
                        <h2>About Me</h2>
                        <p className={styles.description}>
                            I am a dedicated and passionate Computer Science
                            freshman with a strong background in technology and
                            web development. With my experience and a deep
                            interest in computer science, I am confident in my
                            ability to excel as a web developer. My goal is to
                            leverage my skills to deliver high-quality web
                            solutions that meet and exceed client expectations.
                            I am eager to collaborate with you to bring your
                            projects to life and ensure your digital presence
                            stands out. Let&apos;s work together to achieve your
                            vision and drive success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
