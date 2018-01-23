var n = parseInt(prompt('type n'));

var fact = 1;
for (i = 2; i <= n; i++) {
    if (n < 2){
    console.log( "factorial is n " + 1);
}
    fact=fact*i;
}
console.log( "factorial is n " + fact )