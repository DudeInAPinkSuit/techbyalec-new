import styles from "./BlogItem.module.css";

function BlogItem() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textColumn}>
                <h4>Blog Article Header</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam consectetur labore natus, magni repudiandae saepe?
                    Fugiat tempora reiciendis veritatis corporis eligendi.
                    Magnam ab rem laboriosam id natus dolorem debitis pariatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    nostrum repudiandae magni nisi vel tenetur corporis quod
                    necessitatibus accusantium deleniti, error est illum
                    nesciunt nulla nihil quaerat quasi exercitationem porro.
                </p>
            </div>
            <div className={styles.image}></div>
        </div>
    );
}

export default BlogItem;
