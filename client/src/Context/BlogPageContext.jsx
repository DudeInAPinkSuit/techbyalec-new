import { useState, createContext } from "react";

export const BlogContext = createContext();

export function BlogContextProvider(props) {
    const [blogArticles, setBlogArticles] = useState([]);

    return (
        <BlogContext.Provider value={{ blogArticles, setBlogArticles }}>
            {props.children}
        </BlogContext.Provider>
    );
}
