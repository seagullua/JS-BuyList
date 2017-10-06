var list = $('.list > .listitems');
var listnobought = $('.info > div.listitems:first');
var listbought = $('.info > div.listitems:last');
var name = '';
var counts = 1;

$(function () {
    var Itemrow = $('.list > .listitems').html();
    var Itemrowbought = $('.info > div.listitems:first').html();
    var Itemrownobought = $('.info > div.listitems:last').html();
    $('html').hide();
    $('html').fadeIn(750);
    $('.inputitem').fadeIn(750);
    $('.item').remove();
    $('.noboughtitems').remove();
    $('.boughtitems').remove();
    addItem('Помідори', Itemrow, Itemrowbought, Itemrownobought, counts);
    addItem('Печево', Itemrow, Itemrowbought, Itemrownobought, counts);
    addItem('Сир', Itemrow, Itemrowbought, Itemrownobought, counts);
    $('.listitems').fadeIn(750);
    $('.sumbit').click(function () {
        name = $('input.product').val();
        if(name !== '') {
            addItem(name, Itemrow, Itemrowbought, Itemrownobought, counts);
        }
        $('input.product').val('');
        $('input.product').focus();
    });
    $('.product').keyup(function (e) {
        if (e.keyCode === 13) {
            name = $('input.product').val();
            if(name !== '') {
                addItem(name, Itemrow, Itemrowbought, Itemrownobought, counts);
            }
            $('input.product').val('');
        }
    });
});

function addItem(title, Itemrow, Itemrowbought, Itemrownobought, c) {
    var row = $(Itemrow);
    var row2 = $(Itemrowbought);
    var row3 = $(Itemrownobought);
    var forChange = true;
    //write names
    row.find('.name').text(title);
    row.find('.num').text(String(c));
    row2.find('.title').text(title);
    row2.find('.oval').text(String(c));
    row3.find('.title').text(title);
    row3.find('.oval').text(String(c));


    //remove elements
    row.find('.butdelete').click(function () {
        row.remove();
        row2.remove();
        row3.remove();
    });

    //function button bought
    row.find('.butbought').click(function () {
       $(row2).fadeOut(500);
       $(row3).delay(500).fadeIn(500);
       row.find('.name').css('text-decoration', 'line-through');
       $(row.find('.ovalmin')).fadeOut(500);
       $(row.find('.ovalpl')).fadeOut(500);
       $(row.find('.num')).fadeOut(500);
       $(row.find('.butbought')).fadeOut(500);
       $(row.find('.butdelete')).fadeOut(500);
       $(row.find('.num')).fadeIn(500);
       $(row.find('.butboughtno')).delay(500).fadeIn(500);
       forChange = false;
    });

    //function button not bought
    row.find('.butboughtno').click(function () {
        $(row3).fadeOut(500);
        $(row2).delay(500).fadeIn(500);
        row.find('.name').css('text-decoration', 'none');
        $(row.find('.num')).fadeOut(500);
        $(row.find('.butboughtno')).fadeOut(500);
        $(row.find('.ovalmin')).delay(500).fadeIn(500);
        $(row.find('.ovalpl')).delay(500).fadeIn(500);
        $(row.find('.num')).fadeIn(500);
        $(row.find('.butbought')).delay(500).fadeIn(500);
        $(row.find('.butdelete')).delay(500).fadeIn(500);
        forChange = true;
    });

    //function button oval plus
    row.find('.ovalpl').click(function () {
        c++;
        row.find('.num').fadeOut(250, function () {
            row.find('.num').text(String(c));
            row.find('.num').fadeIn(250);
        });
        row2.find('.oval').text(String(c));
        row3.find('.oval').text(String(c));
        if (c > 1) {
            row.find('.ovalmin').css('background-color', 'rgb(196, 10, 10)');
            row.find('.ovalmin').css('box-shadow', '0 1px 0 0 rgb(140, 0, 0)');
            row.find('.ovalmin').mouseenter(function () {
                $(this).css('background-color', 'rgb(173, 9, 9)');
            });
            row.find('.ovalmin').mouseleave(function () {
                $(this).css('background-color', 'rgb(196, 10, 10)');
            });
            row.find('.ovalmin').mousedown(function () {
                $(this).css('background-color', 'rgb(140, 0, 0)');
            });
            row.find('.ovalmin').mouseup(function () {
                $(this).css('background-color', 'rgb(173, 9, 9)');
            });
        }
        if (c > 9) {
            row2.find('.oval').css('padding-left', '3px');
        }
        else {
            row2.find('.oval').css('padding-left', '6px');
        }
    });

    //function button oval minus
    row.find('.ovalmin').click(function () {
        if (c > 1) {
            c--;
            row.find('.num').fadeOut(250, function () {
                row.find('.num').text(String(c));
                row.find('.num').fadeIn(250);
            });
            row2.find('.oval').text(String(c));
            row3.find('.oval').text(String(c));
        }
        if (c == 1) {
            row.find('.ovalmin').css('background-color', 'rgb(239, 158, 158)');
            row.find('.ovalmin').css('box-shadow', 'none');
            row.find('.ovalmin').mouseenter(function () {
                $(this).css('background-color', 'rgb(239, 158, 158)');
            });
            row.find('.ovalmin').mouseleave(function () {
                $(this).css('background-color', 'rgb(239, 158, 158)');
            });
            row.find('.ovalmin').mousedown(function () {
                $(this).css('background-color', 'rgb(239, 158, 158)');
            });
        }
        if (c > 9) {
            row2.find('.oval').css('padding-left', '3px');
        }
        else {
            row2.find('.oval').css('padding-left', '6px');
        }
    });

    //function click name of item
    row.find('.name').click(function () {
        if (forChange) {
            $(this).css('display', 'none');
            row.find('.int').css('display', 'inline-block');
            row.find('input.additional').focus();
            row.find('input.additional').val(title);
            $(document).mousedown(function (e) {
                var cont = $('.int');
                if (cont.has(e.target).length === 0){
                    title = row.find('input.additional').val();
                    row.find('.int').css('display', 'none');
                    row.find('.name').text(title);
                    row2.find('.title').text(title);
                    row3.find('.title').text(title);
                    row.find('.name').css('display', 'inline-block');
                }
            });
        }
    });

    $(row3).hide();
    list.append(row);
    listnobought.append(row2);
    listbought.append(row3);
}