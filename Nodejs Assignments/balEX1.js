var info=require("./json1");
function listInStock(res){
    var inStock=info.filter(function(item){
        return item.avail=="In stock";
    });
    res.end(JSON.stringify(inStock));

}
module.exports.listInStock=listInStock;