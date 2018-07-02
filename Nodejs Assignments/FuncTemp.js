function FtoC(f){
    var c=(5/9)*(f-32);
    return c;
}

function CtoF(ff){
    var cc=ff*(9/5)*32;
    return cc;
}
module.exports.FtoC=FtoC;

module.exports.CtoF=CtoF;