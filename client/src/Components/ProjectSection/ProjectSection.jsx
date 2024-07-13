import Project from "./Project";
import styles from "./ProjectSection.module.css";
import images from "./images.js";

function ProjectSection() {
    return (
        <div className={styles.container}>
            <div className={styles.headerText}>
                <h2>Portfolio</h2>
                <p>Projects below were commissioned to me by my clients!</p>
            </div>
            <div className={styles.grid}>
                <Project
                    image={images.dandan}
                    title="Captured by Dan"
                    desc="A photographer's website for showcasing his photos
                            which are stored in albums within the website.
                            Images can be viewed through the previews when
                            clicking on them."
                    codeLink="https://github.com/DudeInAPinkSuit/dandanwebsite"
                    webLink="https://capturedbydan.vercel.app/"
                />
                <Project
                    image={images.greenbay}
                    title="Greenbay Shipping"
                    desc="A shipping business' website evoking a sense of
                            professionalism. Displays the company's clients to
                            impose trustworthiness as well as services offered."
                    codeLink="https://github.com/DudeInAPinkSuit/greenbaywebsite"
                    webLink="https://greenbayshipping.vercel.app/"
                />
                <Project
                    image={images.shortys}
                    title="Shorty's Box"
                    desc="Another photographer's website showcasing his
                            profile. Giving him a digital presence in the online
                            space. Website features sections such as About,
                            Services, Portfolio and Contact. "
                    codeLink="https://github.com/DudeInAPinkSuit/shortysboxwebsite"
                    webLink="https://capturedbydan.vercel.app/"
                />
                <Project
                    image={images.personal}
                    title="Personal Portfolio Website"
                    desc=" This very website promoting a passionate and competent 
                    freelance developer. It explores the said developer's skills 
                    through a sleek and modern portfolio. Also includes contacts and his blog"
                    codeLink="#"
                    webLink="#"
                />
            </div>
        </div>
    );
}

export default ProjectSection;
