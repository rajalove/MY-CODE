const wish=require('./util/RegularProgram');
const failure=require('./util/AnotherFile');


/*
wish.greet();
wish.raja();
*/


let msg=wish.greet('rajasekhar koneti');
console.log(msg)

failure.lover('data.txt',msg)