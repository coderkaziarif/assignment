

// https://github.com/coderkaziarif/assignment


// Task-1 : Convert Kilometer to Meter.
function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}
   
   var result = kilometerToMeter(3);


// Task-2 : Budget Calculator.
function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalCost = watchPrice + phonePrice + laptopPrice;
    return totalCost;

}
    var totalBudget = budgetCalculator(2, 2, 1);


// Task-3 : Hotel Cost per Day.
function hotelCost(day){
    var cost = 0;
    if ( day <= 10){
        cost = day * 100;    
    }else if( day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}

var totalCost = hotelCost(25);

