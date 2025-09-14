const myArguments = (...myArgs) => {
    let numArgs = myArgs.length;
    if (myArgs.length === 0) {
        console.log('No argument');
    }
    else if (myArgs.length === 1) {
        console.log('Argument found');
    }
    else {
        console.log('Arguments found');
    }
};
myArguments();
myArguments(1);
myArguments(1,2,3);