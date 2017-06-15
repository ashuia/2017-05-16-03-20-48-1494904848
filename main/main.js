const loadAllItems = require('./loadAllItems.js');

module.exports = function main(var0) {
    var relog="***<没钱赚商店>购物清单***\n";
    var num=1;
    var var1=new Array();
    var1=var0;
    var var2=new Array();
    var2=loadAllItems();
    var var3=new Array();
    for(var i in var1)
    {
        for(var j=0;j<6;j++)
        {
            if(var1[i]==var2[j].barcode)
            {
                var are='名称：'+var2[j].name+'，数量：'+num+var2[j].unit+'，单价：'+var2[j].price+'(元)，小计：'+num*var2[j].price+'(元)\n';
                var3.push(are);
            }
        }
    }
    for(var a in var3)
    {
        relog=relog+var3[a];
    }
    return relog;
};
