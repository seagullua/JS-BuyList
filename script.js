var INPUT_FORM = $('.main-input');
var INPUT_BUTTON = $('.add-button');
var LIST = $('.list-of-items');
var LIST_NOT_BAUGHT = $('.not-baught');
var LIST_BAUGHT = $('.baught');
var ITEM_TEMPLATE = $('#item_temp').html();
var ITEM_LABEL_TEMPLATE = $('#item_label_temp').html();
var TIME_SHORT = 250;
var TIME_LONG = 700;

INPUT_BUTTON.click(function () {
    if(INPUT_FORM.val()){
        addItem(INPUT_FORM.val());
        INPUT_FORM.val("");
    }
    INPUT_FORM.focus();
});

INPUT_FORM.keypress(function (e) {
    if(e.which == 13){
        if(INPUT_FORM.val()){
            addItem(INPUT_FORM.val());
            INPUT_FORM.val("");
        }
    }
    INPUT_FORM.focus();
})

function addItem(title) {
    var node = $(ITEM_TEMPLATE);
    var first = node.find(".first");
    var item_name = first.find("span");
    var edit = first.find(".edit");
    var del = node.find(".delete");
    var buy = node.find(".buy");
    var plus = node.find(".plus");
    var minus = node.find(".minus");
    var unbuy = node.find(".unbuy");
    var number_label = node.find(".number-label");
    var number = 1;
    node.height(0);
    item_name.text(title);

    item_name.click(function () {
        if(edit.focus());
        item_name.css("display","none");
        edit.css("display","inline-block");
        edit.attr("value",item_name.text());
        edit.focus();
        edit.focusout(function () {
            edit.css("display","none");
            if(edit.val()) {
                title = edit.val();
                item_name.text(title);
                updateLabels();
            }
                item_name.css("display", "inline-block");
        })
    });
    minus.click(function(){
        if(number_label.css("opacity") == 1) {
            number_label.fadeOut(TIME_SHORT, function () {
                number--;
                number_label.text(number);
                number_label.fadeIn(TIME_SHORT);
                checkNumber();
                updateLabels();
            });
        }
    });

    plus.click(function(){
        if(number_label.css("opacity") == 1) {
            number_label.fadeOut(TIME_SHORT, function () {
                number++;
                number_label.text(number);
                number_label.fadeIn(TIME_SHORT);
                checkNumber();
                updateLabels();
            });
        }
    });

    buy.click(function(){
        node.fadeOut(TIME_SHORT, function(){
            first.css("text-decoration","line-through");
            del.css("display","none");
            buy.css("display","none");
            plus.attr("disabled","true");
            minus.attr("disabled","true");
            unbuy.css("display","inline-block");
            node.fadeIn(TIME_SHORT);
            updateLabels();
        });
    });

    unbuy.click(function(){
        node.fadeOut(TIME_SHORT, function(){
            first.css("text-decoration","none");
            del.css("display","inline-block");
            buy.css("display","inline-block");
            plus.removeAttr("disabled");
            minus.removeAttr("disabled");
            unbuy.css("display","none");
            node.fadeIn(TIME_SHORT);
            updateLabels();
        })
    });

    del.click(function(){
        node.find("button").removeClass("tooltip");
        node.stop().animate({height:0},TIME_SHORT,function () {
            node.remove();
            updateLabels();
        });
    });

    LIST.append(node);
    node.stop().animate({height:50},TIME_LONG,function () {
        node.removeAttr("style");
    });
    
    function checkNumber() {
        if(number<2){
            minus.attr("disabled","true");
        }else{
            minus.removeAttr("disabled")
        }
    }

    function updateLabels(){
        LIST_NOT_BAUGHT.html("");
        LIST_BAUGHT.html("");
        LIST.children(".item").each(function (index) {
            var label = $(ITEM_LABEL_TEMPLATE);
            var round_label = label.find(".round-label");
            var name_of_item = label.find(".name-of-item");
            round_label.text($(this).find(".number-label").text());
            name_of_item.html($(this).find("#item_name").text());
            var display = $(this).find(".unbuy").css("display");
            if(display == "none"){
                LIST_NOT_BAUGHT.append(label);
            }else{
                LIST_BAUGHT.append(label);
            }
        });
    }
    updateLabels();
    checkNumber();
}

addItem("Помідори");
addItem("Сир");
addItem("Печиво");