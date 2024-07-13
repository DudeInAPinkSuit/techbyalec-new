import { IconCode, IconLink } from "@tabler/icons-react";
import PropTypes from "prop-types";
import styles from "./Project.module.css";

Project.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    codeLink: PropTypes.string,
    webLink: PropTypes.string,
};
function Project(props) {
    const iconSize = 32;

    return (
        <>
            <div className={styles.portfolioCol}>
                <div className={styles.row1}>
                    <img src={props.image} alt="" />
                </div>
                <div className={styles.row2}>
                    <div className={styles.text}>
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>
                    </div>
                    <div className={styles.portfolioLinks}>
                        <a href={props.codeLink} target="_blank">
                            <h5>
                                <IconCode
                                    size={iconSize}
                                    className={styles.icon}
                                />{" "}
                                Code
                            </h5>
                        </a>

                        <a href={props.webLink} target="_blank">
                            <h5>
                                <IconLink
                                    size={iconSize}
                                    className={styles.icon}
                                />
                            </h5>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
