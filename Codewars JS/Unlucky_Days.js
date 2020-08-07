function unluckyDays(year){
    var unlucky = 0;
    for (var i = 0; i <12; i++){
        if (new Date(year, i, 13).getDay()===5){
            unlucky++;
        }
    }
    return unlucky;
  }