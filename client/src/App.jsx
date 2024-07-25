import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Routes/HomePage.jsx";
import BlogPage from "./Routes/BlogPage.jsx";
import BlogArticle from "./Routes/BlogArticle.jsx";
import BlogUpdate from "./Routes/BlogUpdate.jsx";
import BlogCreate from "./Routes/BlogCreate.jsx";
import { BlogContextProvider } from "./Context/BlogPageContext.jsx";
import Layout from "./Layout.jsx";
import "./index.css";

function App() {
    return (
        <BlogContextProvider>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                    </Route>
                    <Route element={<Layout />}>
                        <Route path="/blog" element={<BlogPage />} />
                    </Route>
                    <Route element={<Layout />}>
                        <Route path="/blog/:id" element={<BlogArticle />} />
                    </Route>
                    <Route element={<Layout />}>
                        <Route
                            path="/blog/:id/update"
                            element={<BlogUpdate />}
                        />
                    </Route>
                    <Route element={<Layout />}>
                        <Route path="/blog/create" element={<BlogCreate />} />
                    </Route>
                </Routes>
            </Router>
        </BlogContextProvider>
    );
}

export default App;
