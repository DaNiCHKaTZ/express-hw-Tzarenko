const express = require("express");
const router = express.Router();
const { getNotes, getNote, postNote, putNote, patchNote, deleteNoteById } = require('../controllers/notesControllers.js');

router.get("/notes", (req, res) => {
    const notes = getNotes();
    res.status(200).json(notes);
});

router.get("/notes/:id", (req, res) => {
    const id = req.params.id;
    const result = getNote(id);
    res.status(result.status).json(result.note || { error: result.error });
});

router.post("/notes", (req, res) => {
    const result = postNote(req.body);
    res.status(result.status).json(result.note || { error: result.error });
});

router.put("/notes/:id", (req, res) => {
    const id = req.params.id;
    const result = putNote(id, req.body);
    res.status(result.status).json(result.note || { error: result.error });
});

router.patch("/notes/:id", (req, res) => {
    const id = req.params.id;
    const result = patchNote(id, req.body);
    res.status(result.status).json(result.note || { error: result.error });
});

router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    const result = deleteNoteById(id);
    if (result.status === 204) {
        res.status(204).send();
    } else {
        res.status(result.status).json({ error: result.error });
    }
});

module.exports = router;
