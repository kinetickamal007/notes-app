const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'your notes...';

const addNotes = (title,body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    debugger

    if(!duplicateNote){
        notes.push({
            title:title, 
            body:body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen('new note added!'))
    }
    else{
        console.log(chalk.bgRed('note title already taken!'));
    }

}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON); 
    }
    catch(e){
        return [];
    }
}
const removeNotes = (title) => {
    const r_notes = loadNotes();
    const r_duplicateNotes = r_notes.filter(note => note.title !== title)
    if(r_duplicateNotes.length === r_notes.length){
        console.log(chalk.bgRed('title do not exist'));
    }
    else{
    saveNotes(r_duplicateNotes);
    console.log(chalk.bgGreen('note is removed'));
    }
    
}

const listNotes = () => {
    const l_notes = loadNotes();
    console.log(chalk.yellow('your notes'))
    return l_notes.forEach(note => console.log(note.title));
}

const readNotes = (title) => {
    const notes = loadNotes();
    const findedNote = notes.find(note => note.title === title);
    if(!findedNote){
        console.log(chalk.bgRed('no note found!'));
    }else{
    console.log(chalk.bold.yellow(findedNote.title));
    console.log(findedNote.body);
    }
}
module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes :removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}