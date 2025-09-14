const myArgument = (...myArgs) => {
    if (myArgs[0] === undefined){
        console.log('No argument');
    }
    else {
        console.log(myArgs[0]);
    }
    
}

myArgument();
myArgument('School');