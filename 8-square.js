const rowSqaure = Number(process.argv[2]);

if (rowSqaure >= 1) {

for (let i = 0; i < rowSqaure; i++) 
    console.log('X'.repeat(rowSqaure));
}
else {
    console.log('Missing size');
}