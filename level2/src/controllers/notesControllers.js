const { getAllNotes, getNoteById, createNote, updateNote, deleteNote } = require('../utils/store.js');

function getNotes() {
    return getAllNotes();
}

function getNote(id) {
    const note = getNoteById(id);
    if (!note) {
        return { error: 'Note not found', status: 404 };
    }
    return { note: note, status: 200 };
}

function postNote(data) {
    if (!data.title) {
        return { error: 'title is required', status: 400 };
    }
    
    if (data.title.trim().length < 1) {
        return { error: 'title must be empty', status: 400 };
    }
    
    if (data.title.trim().length > 100) {
        return { error: 'title cant be morer then 100 char', status: 400 };
    }
    
    if (data.description && data.description.length > 500) {
        return { error: 'dexcription cant be morer then 500 char', status: 400 };
    }

    const newNote = {
        id: Date.now().toString(),
        title: data.title,
        description: data.description || null,
        createdAt: new Date().toISOString()
    };

    return { note: createNote(newNote), status: 201 };
}

function putNote(id, data) {
    const note = getNoteById(id);
    if (!note) {
        return { error: 'Note not found', status: 404 };
    }

    if (!data.title) {
        return { error: 'title is required', status: 400 };
    }
       
    if (data.title.trim().length < 1) {
        return { error: 'title must be empty', status: 400 };
    }
    
    if (data.title.trim().length > 100) {
        return { error: 'title cant be morer then 100 char', status: 400 };
    }
     
    if (data.description && data.description.length > 500) {
        return { error: 'dexcription cant be morer then 500 char', status: 400 };
    }

    const updatedNote = updateNote(id, {
        title: data.title,
        description: data.description !== undefined ? data.description : null
    });

    return { note: updatedNote, status: 200 };
}

function patchNote(id, data) {
    const note = getNoteById(id);
    if (!note) {
        return { error: 'Note not found', status: 404 };
    }

    if (data.title !== undefined) {

        if (data.title.trim().length < 1) {
            return { error: 'title must be empty', status: 400 };
        }
        
        if (data.title.trim().length > 100) {
            return { error: 'title cant be morer then 100 char', status: 400 };
        }    
    }
        
    if (data.description && data.description.length > 500) {
        return { error: 'dexcription cant be morer then 500 char', status: 400 };
    }

    const updateData = {};
    if (data.title !== undefined) updateData.title = data.title;
    if (data.description !== undefined) updateData.description = data.description;

    const updatedNote = updateNote(id, updateData);
    return { note: updatedNote, status: 200 };
}

function deleteNoteById(id) {
    const note = getNoteById(id);
    if (!note) {
        return { error: 'Note not found', status: 404 };
    }

    deleteNote(id);
    return { status: 204 };
}

module.exports = {
    getNotes,
    getNote,
    postNote,
    putNote,
    patchNote,
    deleteNoteById
};
