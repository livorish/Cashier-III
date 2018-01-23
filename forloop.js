//help the cashier return the right of change


//Programme input: 
    
//Amount due
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

var note_coin;

note_coin = [
    [50, 20, 10, 5, 2, 1],
    [0.50, 0.20, 0.10, 0.05, 0.02, 0.01]
];

for(var i = 0; i < note_coin.length; i++){
    for(var j = 0; j < note_coin[i].length; j++){
        var item = note_coin[i][j];
        var remainder = Math.floor(change/item);
        change = (change%item).toFixed(2);
        if (remainder > 0 && item >= 1 ){
            console.log('£' + item + ' notes: ' + remainder);
        } else if (remainder > 0 && item < 1) {
            console.log((item * 100) + 'p coins: ' + remainder);
        } else {
            false;
        }
    }

} 
