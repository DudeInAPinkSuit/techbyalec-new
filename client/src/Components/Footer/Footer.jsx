import {
    IconMail,
    IconFileCertificate,
    IconBrandLinkedin,
    IconBrandGithub,
    IconPhone,
    IconBrandFacebook,
    IconBrandInstagram,
    IconCopyright,
} from "@tabler/icons-react";
import styles from "./Footer.module.css";
import "../fonts.css";

function Footer() {
    const iconSize = 32;
    const socialSize = 42;
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.header}>Contacts</h2>
                <div className={styles.row}>
                    <div className={styles.col1}>
                        <p>
                            <IconMail size={iconSize} className={styles.icon} />
                            alecbnono@gmail.com
                        </p>
                        <p>
                            <IconPhone
                                size={iconSize}
                                className={styles.icon}
                            />
                            +639189463908
                        </p>
                        <a
                            href="Resume 5_16_2024.pdf"
                            target="_blank"
                            className={styles.resume}
                        >
                            <IconFileCertificate size="20" />
                            Resume
                        </a>
                        <div className={styles.links}>
                            <a href="https://www.facebook.com/alecbnono/">
                                <IconBrandFacebook
                                    size={socialSize}
                                    className={styles.icon}
                                />
                            </a>
                            <a href="https://www.instagram.com/alecbnono/">
                                <IconBrandInstagram
                                    size={socialSize}
                                    className={styles.icon}
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/alec-nono-34592b29a/">
                                <IconBrandLinkedin
                                    size={socialSize}
                                    className={styles.icon}
                                />
                            </a>
                            <a href="https://github.com/DudeInAPinkSuit">
                                <IconBrandGithub
                                    size={socialSize}
                                    className={styles.icon}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <form action="/" method="POST">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Your Message"
                                required
                            ></textarea>
                            <input
                                type="submit"
                                value="Submit"
                                id={styles.submit}
                            />
                        </form>
                        <h2 className={styles.success}></h2>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>
                    <IconCopyright size="16" className={styles.icon} /> 2024
                    Tech by Alec. All Rights Reserved.
                </p>
                <p>Designed and Developed by Alec Nono</p>
            </div>
        </>
    );
}

export default Footer;
