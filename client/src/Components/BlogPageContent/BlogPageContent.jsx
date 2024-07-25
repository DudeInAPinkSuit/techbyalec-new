import BlogPinned from "../BlogPinned/BlogPinned.jsx";

import styles from "./BlogPageContent.module.css";
import { useContext, useEffect } from "react";
import { BlogContext } from "../../Context/BlogPageContext.jsx";
import { APIBlogGET } from "../../apis/BlogAPI.js";

function BlogPageContent() {
    const { blogArticles, setBlogArticles } = useContext(BlogContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await APIBlogGET();
                const data = await response.json();
                console.log(data);
                setBlogArticles(data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
        console.log(blogArticles);
    }, []);

    return (
        <div className={styles.container}>
            <h2>Blog</h2>
            <div className={styles.row}>
                <div className={styles.col1}>
                    {blogArticles &&
                        blogArticles.map((article) => {
                            return (
                                <a
                                    key={article.id}
                                    href={`/blog/${article.id}`}
                                >
                                    <div className={styles.wrapper}>
                                        <div className={styles.textColumn}>
                                            <h4>{article.title}</h4>
                                            <p>{article.blog_text}</p>
                                        </div>
                                        <div className={styles.image}></div>
                                    </div>
                                </a>
                            );
                        })}
                </div>
                <div className={styles.col2}>
                    <h3>Pinned Reads</h3>
                    <BlogPinned />
                </div>
            </div>
        </div>
    );
}

export default BlogPageContent;
