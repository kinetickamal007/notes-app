/* USING VARIABLES FROM OTHER JS FILES */
const notes = require('./notes.js');
// const mssg = notes.getNotes();
// console.log(mssg);
/* USING FUNCT. FROM OTHER JS FILES */
// const add = require('./utils.js');
// const sum = add(3,4);
// console.log(sum);
const yargs = require('yargs');
const chalk = require('chalk');
const validator = require('validator');
/* CHECKING NPM PACKAGES */
// console.log(validator.isEmail('kamal@gmail.com'));
// console.log(validator.isURL('www.google.com'));
// console.log(chalk.blue.underline.bold('hello world'));
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

/* PROCESS ARGV */
// console.log(process.argv[2]);
// const command = process.argv[3];
// const command1 = process.argv[2];
// console.log(process.argv);
// if(command1 === 'add'){
//     console.log('Adding Notes!');
// }
// if(command === 'remove'){
//     console.log('Removing Notes!');
// }
// if(command === 'title'){
//     console.log('my title');
// }

// Customize yargs version
yargs.version('1.1.0');

//Create Add command
yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder: {
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        },
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
      notes.addNotes(argv.title,argv.body); 
    }
})
/* CREATE REMOVE COMMAND */
yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
       notes.removeNotes(argv.title);
    }
})
//Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler(argv){
        notes.readNotes(argv.title);
    }
})
//Create listing command
yargs.command({
    command:'list',
    describe:'list out all the note',
    handler(){
     notes.listNotes();   
    }
})
yargs.parse();
