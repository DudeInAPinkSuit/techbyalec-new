"use strict";

import express from "express";
import dotenv from "dotenv";
import db from "./db/index.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/blog", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM blog_entries");
        console.log("/blog GET called");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: results.rows,
        });
    } catch (err) {
        console.log(err);
    }
});

app.get("/blog/:id", async (req, res) => {
    console.log(req.params.id);
    try {
        const results = await db.query(
            `SELECT * FROM blog_entries WHERE id=${req.params.id}`
        );
        console.log(results.rows[0]);
        res.status(200).json({
            status: "success",
            data: results.rows[0],
        });
    } catch (err) {
        console.log(err);
    }
});

app.post("/blog", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query(
            `INSERT INTO blog_entries (title, blog_text, pinned, tag) 
            VALUES ($1, $2, $3, $4) returning *`,
            [req.body.title, req.body.blog_text, req.body.pinned, req.body.tag]
        );

        console.log(results);
        res.status(201).json({
            title: "Test Title 2",
            blog_text: "Ipsum Lorem",
            pinned: false,
            tag: "Testing",
        });
        console.log(req.body);
    } catch (err) {
        console.log(err);
    }
});

app.put("/blog/:id", async (req, res) => {
    try {
        const results = await db.query(
            `UPDATE blog_entries 
            SET title = $1, blog_text = $2, pinned = $3, tag = $4 
            WHERE id = $5`,
            [
                req.body.title,
                req.body.blog_text,
                req.body.pinned,
                req.body.tag,
                req.params.id,
            ]
        );
        console.log(results);
        res.status(200).json({
            status: "success",
            data: {
                title: "test2",
            },
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete("/blog/:id", async (req, res) => {
    try {
        const results = await db.query(
            `DELETE FROM blog_entries WHERE id = $1`,
            [req.params.id]
        );
        res.status(204).json({ status: "success" });
        console.log(results);
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => console.log(`Server ready on port ${port}.`));
