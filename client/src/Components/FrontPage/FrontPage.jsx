import {
    IconMapPin,
    IconFileCertificate,
    IconBrandLinkedin,
    IconBrandGithub,
} from "@tabler/icons-react";
import images from "../FrontPage/images.js";
import styles from "./FrontPage.module.css";
import "../fonts.css";

function FrontPage() {
    const iconSize = 48;
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.headerRow}>
                    <div className={styles.headerCol1}>
                        <h1>
                            Hi! I&apos;m{" "}
                            <span className={styles.firstName}>Alec</span>
                        </h1>
                        <p>Freelance Web Developer</p>
                        <p>
                            <IconMapPin className={styles.location} />
                            Manila, Philippines
                        </p>
                        <div className={styles.socials}>
                            <a href="https://github.com/DudeInAPinkSuit">
                                <IconBrandGithub size={iconSize} />
                            </a>
                            <a href="https://www.linkedin.com/in/alec-nono-34592b29a/">
                                <IconBrandLinkedin size={iconSize} />
                            </a>
                            <a href="Resume 5_16_2024.pdf" target="_blank">
                                <IconFileCertificate size={iconSize} />
                            </a>
                        </div>
                        <div className={styles.techStack}>
                            <img src={images.html} alt="html" />
                            <img src={images.css} alt="css" />
                            <img src={images.js} alt="js" />
                            <img src={images.react} alt="react" />
                        </div>
                    </div>
                    <div className={styles.headerCol2}>
                        <img src={images.profile} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
