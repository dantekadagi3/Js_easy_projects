function calcTip(bill){
    var tip;
    if(bill>=50&&bill<=300){
        tip=0.15*bill;
        console.log(`Your tip is ${tip}`);
    }else{
        tip=0.2*bill;
        console.log(`Your tip is ${tip}`)
    }
}
 calcTip(100);
 const bills=[124,555,44];
 const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
 console.log(tips);