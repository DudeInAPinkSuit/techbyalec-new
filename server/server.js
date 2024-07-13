"use strict";

import express from "express";
import dotenv from "dotenv";
import db from "./db/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/blog", (req, res, next) => {
    console.log(req.body);
    console.log(req.headers);
    next();
});

app.get("/blog", async (req, res) => {
    try {
        console.log(req.body);
        const results = await db.query("SELECT * FROM blog_entries");
        console.log(results);
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
    console.log(req.headers);
    try {
        const results = await db.query(
            `INSERT INTO blog_entries (title, blog_text, pinned, tag) VALUES ($1, $2, $3, $4) returning *`,
            [req.body.title, req.body.blog_text, req.body.pinned, req.body.tag]
        );
        console.log(results.rows);
        res.status(201).json({
            status: "success",
            data: "Test for POST",
        });
    } catch (err) {
        console.log(err);
    }
});

app.put("/blog/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            title: "test2",
        },
    });
});

app.delete("/blog/:id", (req, res) => {
    res.status(204).json({ status: "success" });
});

app.listen(port, () => console.log(`Server ready on port ${port}.`));
