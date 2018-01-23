
var total = prompt('Total due:');
    
//Amount paid by the customer
var moneyPaid = prompt('Amount paid:');

//convert collected values to float numbers. Make sure the decimal part has two digits only.
total = parseFloat(total).toFixed(2);
moneyPaid = parseFloat(moneyPaid).toFixed(2);

//Programme output:
    
//calculate the change amount.Make sure the decimal part has two digits only.
var change = (moneyPaid - total).toFixed(2);

//Print the amount due/ amount paid/ change
console.log('Due: £' + total + '/ Paid: £' + moneyPaid + '/ Change: £' + change);
    
//Print change breakdown: notes and coins

var notes;

notes = [
    {value: 50, name: '£50 notes: '},
    {value: 20, name: '£20 notes: '},
    {value: 10, name: '£10 notes: '},
    {value: 5, name: '£5 notes: '},
    {value: 2, name: '£2 notes: '},
    {value: 1, name: '£1 notes: '},
    {value: 0.50, name: '50p coins:: '},
    {value: 0.20, name: '20p coins: '},
    {value: 0.10, name: '10p coins: '},
    {value: 0.05, name: '5p coins: '},
    {value: 0.02, name: '2p coins: '},
    {value: 0.01, name: '1p coins: '}
];


var i = 0;

while(change > 0){
    notes[i].remainder = Math.floor(change/notes[i].value);
    change = (change%notes[i].value).toFixed(2);
    notes[i].remainder > 0 ? console.log(notes[i].name + notes[i].remainder): false;
    i++;
}
