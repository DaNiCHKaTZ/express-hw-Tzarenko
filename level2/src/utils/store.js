const notes = [];

function getAllNotes() {
    return notes;
}

function getNoteById(id) {
    return notes.find(note => note.id === id);
}

function createNote(note) {
    notes.push(note);
    return note;
}

function updateNote(id, noteData) {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes[index] = { ...notes[index], ...noteData };
        return notes[index];
    }
    return null;
}

function deleteNote(id) {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};
