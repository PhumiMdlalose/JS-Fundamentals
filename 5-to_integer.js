const intArg = process.argv[2];
const numBer = Number(intArg);

if (!isNaN(numBer)){
    console.log('My number: ' + numBer);
}
else{
    console.log('Not a number');
}