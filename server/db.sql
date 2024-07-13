CREATE TABLE blog_entries(
    id BIGSERIAL PRIMARY KEY,
    title TEXT ,
    blog_text TEXT ,
    pinned BOOLEAN ,
    tag VARCHAR(50)
);

INSERT INTO blog_entries (title, blog_text, pinned, tag)
VALUES ('Test Title', 'Lorem Ipsum', TRUE, 'Testing');

SELECT * FROM blog_entries;

DROP TABLE blog_entries;