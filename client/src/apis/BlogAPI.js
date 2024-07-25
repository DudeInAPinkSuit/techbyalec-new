export const APIBlogGET = async () => {
    const response = await fetch("http://localhost:3000/blog");
    return response;
};

export const APIBlogPOST = async () => {
    const response = await fetch("http://localhost:3000/blog", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
    return response;
};
