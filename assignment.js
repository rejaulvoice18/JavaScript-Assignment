
//1st problem

function kilometerToMeter(k){
    var meter = k * 1000;
    return meter;
}
var meter = kilometerToMeter(4);
console.log(meter);

// 2n problem
function budgetCalculator(w,m,l){
    var watch = w * 50;
    var mobile = m * 100;
    var laptop = l * 500;

    var total = watch + mobile + laptop;

    return total;
}

var budget = budgetCalculator(3,4,4);
console.log(budget);


//3rd Problem
function hotelCost(stay){
    var cost = 0;
    if(stay<=10){
        cost = stay * 100;
    }
    else if(stay<=20){
        var firstPart = 10 * 100;
        var remaining = stay - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = stay - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}

var hCost = hotelCost(25);
console.log(hCost);


//4th problem
function megaFriend(arstring){
    var max_str = arstring[0].length;
    var big_str = arstring[0];
    for(var i = 0; i<arstring.length; i++){
        var str = arstring[i].length;
        if(str > max_str){
            big_str = arstring[i];
            max_str = str;
        }
    }
    return big_str;
}


var speech = ['sumon', 'asad', 'Rejaul', 'Rubel', 'asaduzzaman'];
var bigestString = megaFriend(speech);
console.log(bigestString);