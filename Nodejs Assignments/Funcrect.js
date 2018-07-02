function Area(l,b){
    var a=l*b;
    return a;
}

function Perimeter(l,b){
    var p=2*(l+b);
    return p;
}

module.exports.Area=Area;
module.exports.Perimeter=Perimeter;
