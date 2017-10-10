window.onload=function(){

var a = document.getElementById('butadd');
var c = document.getElementById('field'); 
	
var LIST = $('.leftcolumn');
var ITEM_TEMPLATE = $('.itemrow').html();
    console.log(ITEM_TEMPLATE);
var ELEM = $('.segment');
var ELEMTWO = $('.segmenttwo');
var NOTBOUGHT = $('.notbought').html();
    console.log(NOTBOUGHT);
	
function addItem(title)	{ 
	var isbought = false;
	var i = 1;
	var name;
    var node	= $(ITEM_TEMPLATE);	//Create	new	HTML	node
    node.find(".bought").text(title);	//Set	product	title

    var nodesmall = $(NOTBOUGHT);
    nodesmall.find(".titleitem").text(title);
    
    node.find(".deletebutton").click(function(){ node.remove(); nodesmall.remove();}); //Delete	Action
	
	node.find(".bought").click(
	function(){
		if(isbought == true){
		node.find(".bought").attr("contenteditable","false");
		}
		if(isbought == false){
	node.find(".bought").attr("contenteditable","true");
	node.find(".bought").keyup(
	function(){
		name = node.find(".bought").text();
		nodesmall.find(".titleitem").text(name);
	});
		}
	});
	
	node.find(".plus-button").click(
	function(){
		i++;
	node.find("#count").text(i);
	nodesmall.find(".num").text(i);
	});
	
	node.find(".minus-button").click(
	function(){
		if(i>1){
			i--;
		}
	node.find("#count").text(i);
	nodesmall.find(".num").text(i);
	
	});
	node.find(".buybutton").click(
	function(){
		if(isbought == false){
	node.find(".minus-button").css("display",	"none");
    node.find(".plus-button").css("display",	"none");
	node.find(".deletebutton").css("display",	"none");
	node.find(".bought").css("text-decoration","line-through");
	node.find(".buybutton").text("Не куплено");
	nodesmall.find(".titleitem").css("text-decoration","line-through");
    nodesmall.find(".num").css("text-decoration","line-through");
	ELEMTWO.append(nodesmall);
	ELEM.not(nodesmall);
			isbought = true;
		}else{
	node.find(".minus-button").css("display",	"inline");
    node.find(".plus-button").css("display",	"inline");
	node.find(".deletebutton").css("display",	"inline");
	node.find(".bought").css("text-decoration","none");
	node.find(".buybutton").text("Куплено");
	nodesmall.find(".titleitem").css("text-decoration","none");
    nodesmall.find(".num").css("text-decoration","none");
	ELEM.append(nodesmall);
	ELEMTWO.not(nodesmall);
			isbought = false;
		}
	}
	);
	LIST.append(node);	//Add	to	the	end	of	the	list
    ELEM.append(nodesmall);
}

    a.onclick = function() {
    addItem(c.value);
    $('#field').val('').focus();
    }
	
	addItem("Помідори");
	addItem("Печиво");
	addItem("Сир");
	$('.itemrow').css("display", "none");
	$('.notbought').css("display", "none");
}