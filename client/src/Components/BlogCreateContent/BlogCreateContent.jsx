import { useState } from "react";
import styles from "./BlogCreateContent.module.css";

function BlogCreateContent() {
    const [title, setTitle] = useState();
    const [tag, setTag] = useState();
    const [blog_text, setBlogText] = useState();
    const [pinned, setPinned] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setPinned(false);
            const response = await fetch("http://localhost:3000/blog", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    tag,
                    blog_text,
                    pinned,
                }),
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.container}>
            <form action="">
                <label htmlFor="">Create Blog</label>
                <p>Pinned?</p>
                <div className={styles.buttons}>
                    <label htmlFor="">No</label>
                    <input type="radio" className={styles.firstButton} />
                    <label htmlFor="">Yes</label>
                    <input type="radio" />
                </div>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    onChange={(e) => setTag(e.target.value)}
                    placeholder="Tag"
                    required
                />
                <textarea
                    type="text"
                    placeholder="Input Text"
                    onChange={(e) => setBlogText(e.target.value)}
                ></textarea>
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}
export default BlogCreateContent;
