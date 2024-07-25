CREATE TABLE blog_entries(
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    blog_text TEXT NOT NULL,
    pinned BOOLEAN NOT NULL,
    tag VARCHAR(50) NOT NULL
);

INSERT INTO blog_entries (title, blog_text, pinned, tag)
VALUES ('Lorem Ipsum', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at dolorem enim quae. Iure animi modi, numquam, aliquid perferendis nostrum, et itaque voluptatum quis culpa fugit. Dolor libero magnam a.', FALSE, 'Testing');

UPDATE blog_entries
SET title='Test Title 2', blog_text= 'Ipsum Lorem', pinned=FALSE, tag='Testing'
WHERE id=2;

SELECT * FROM blog_entries;

DROP TABLE blog_entries;