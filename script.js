var LIST = $('.list-of-items');
var ITEM_TEMPLATE = $('#item_temp').html();

function addItem(title) {
    var node = $(ITEM_TEMPLATE); //Create new HTML node
    node.find(".first").text(title); //Set product title
//Delete Action
    node.find(".delete").click(function(){
        node.fadeOut(250, function(){
            baught(node);
            node.fadeIn(250);
        });
    });
    LIST.append(node); //Add to the end of the list
}

function baught(node){
    node.find(".first").css("text-decoration","line-through");
    node.find(".delete").css("display","none");
    node.find(".buy").css("display","none");
    node.find(".plus").attr("disabled","true");
    node.find(".minus").attr("disabled","true");
    node.find(".unbuy").css("display","inline-block");
}
addItem();