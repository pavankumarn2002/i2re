//Two Way Binding
$('[innerText]').each(function vc(index) {
    let x = $(this).attr('innerText')
    eval(x)
    $(this).html('' + eval(x) + '')
})
$('[cell-tw^="[-tw"]').each(function (index) {

    var twoAttr = $(this).attr('cell-tw').replace("-tw:", '-tw' + index + ':')
    $(this).attr('cell-tw', '' + twoAttr + '')

    var tw = $(this).attr('cell-tw').match(/[-][t][w](\d{1,})/i);
    var tbValue = '[-tb' + tw[1] + ':';
    $(this).on('input', function () {
        text = $(this).val();
        $('[cell-tw^="' + tbValue + '"]').html(text);
    });

})
$('[tway]').each(function (index) {

    $(this).on('input', function () {
        var attTx = $(this).attr('tway')
        var attTw = $(this).val();
        $('[innerHtml]').each(function (index) {
            var inner = eval($(this).attr('innerHtml'))
            var attIn = $(this).attr('innerHtml')
            if (attTx == attIn) {
                $(this).html(attTw);
            }
        })
    })

})
//Variable Binding With click event
$('[vc-click]').each(function vcClick(index) {
    let className;
    let text;
    $(this).click(function () {
        let x = $(this).attr('vc-click')
        let y = eval(x)
        $(this).empty().append('' + text + '')
        $('[vc]').each(function vc(index) {
            let className;
            let x = $(this).attr('vc')
            eval(x)
            $(this).removeClass()
            $(this).addClass('' + className + '')
        })
        $('[innerText]').each(function vc(index) {
            let x = $(this).attr('innerText')
            eval(x)
            $(this).html('' + eval(x) + '')
        })
    })
})
//Variable Binding With Attribute
$('[vc]').each(function vc(index) {
    let className;
    let x = $(this).attr('vc')
    eval(x)
    $(this).addClass('' + className + '')
})
//Variable Binding Inside Html
$('[cell-vr^="[-hb"]').each(function (index) {
    let x = $(this).text().match(/[$]\w(.*?)[$]/g);
    let y = $(this).text()
    let res;
    var arrVar = []
    for (let arr in x) {
        x[arr].slice(1, -1)
        arrVar.push(x[arr].slice(1, -1))
        let conVal = eval(x[arr].slice(1, -1));
        var replace = '[$]' + x[arr].slice(1, -1) + '[$]';

        var re = new RegExp(replace, "g");
        let res = y.replace(re, '' + conVal + '');
        y = res;
    }
    $(this).empty().append(y)
})
$('[filter]').each(function (index) {
    $(this).on('input', function () {
        var arr = eval($(this).attr('filter'))
        var val = $(this).attr('filType')
        let fil_arr = [];
        let fil = $(this).val();
        if (val == 'arr') {
            for (let key = 0; key < arr.length; key++) {
                fil_arr.push(arr[key].substr(0, fil.length))
            }
        } else {
            fil_arr = arr.map((element) =>
                eval($(this).attr('filType')).substr(0, fil.length)
            )
        }

        let count = 0
        x1 = []
        fil_arr.forEach((values, i) => {
            if (fil.length > 0) {
                if (values != fil) {
                    if (count < arr.length - 1) {
                        noData = ' ';
                        var attTx = $(this).attr('filter')
                        $('[filErr]').each(function () {
                            var attIn = $(this).attr('filErr')
                            if (attTx == attIn) {
                                $(this).html(noData);
                            }
                        })
                    }
                    else {
                        noData = 'No Data Found';
                        $('[filData]').empty();
                        var attTx = $(this).attr('filter')
                        $('[filErr]').each(function () {
                            var attIn = $(this).attr('filErr')
                            if (attTx == attIn) {
                                $(this).html(noData);
                            }
                        })
                    }
                    count++
                }
                else {
                    noData = ' ';
                    x1.push(arr[i]);
                    var attTx = $(this).attr('filter')
                    var attTw = '';
                    $('[filData]').each(function (index) {
                        var inner = eval($(this).attr('filData'))
                        var attIn = $(this).attr('filData')
                        if (attTx == attIn) {
                            $(this).html(attTw);
                            if (val == 'arr') {
                                for (i = 0; i < x1.length; i++) {
                                    $(this).append('<div id="data-' + i + ' class="data">' + x1[i] + '</div>')
                                }
                            } else {
                                x1.map((element) => {
                                    return $(this).append('<div id="data-' + i + ' class="data">' + eval(val) + '</div>')
                                })
                            }
                        }
                    })
                }
            }
            else {
                noData = 'Enter Valid Input';
                $('[filData]').empty()
                var attTx = $(this).attr('filter')
                $('[filErr]').each(function () {
                    var attIn = $(this).attr('filErr')
                    if (attTx == attIn) {
                        $(this).html(noData);
                    }
                })
            }
        })
    })
})
//if Condition
$('[cell-if^="[-ca"]').each(function (index) {

    var ifAttr = $(this).attr('cell-if').replace("-ca:", '-ca' + index + ':')
    $(this).attr('cell-if', '' + ifAttr + '')

    var dt = $(this).attr('cell-if').match(/[-][c][a](\d{1,})/i);
    var dtValue = '[-ca' + dt[1] + ':';

    $('[cell-if^="' + dtValue + '"]').find('[cond_0]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[cond_1]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[cond_2]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[cond_3]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[cond_4]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_0]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_1]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_2]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_3]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_4]').css('display', 'none')
})
$('[cell-if^="[-ce"]').each(function (index) {

    var ft = $(this).attr('cell-if').match(/[-][c][e](\d{1,})/i);
    var ftValue = '[-ce' + ft[1] + ':';

    $('[cell-if^="' + ftValue + '"]').on('click', function () {
        var dtValue = '[-ca' + ft[1] + ':';
        var condition = $('[cell-if^="' + dtValue + '"]').find('[cond_0]').attr('cond_0')
        var condition1 = $('[cell-if^="' + dtValue + '"]').find('[cond_1]').attr('cond_1')
        var condition2 = $('[cell-if^="' + dtValue + '"]').find('[cond_2]').attr('cond_2')
        var condition3 = $('[cell-if^="' + dtValue + '"]').find('[cond_3]').attr('cond_3')
        var condition4 = $('[cell-if^="' + dtValue + '"]').find('[cond_4]').attr('cond_4')
        if (eval(condition)) {
            $('[cell-if^="' + dtValue + '"]').find('[cond_0]').css('display', 'block')
            if (eval(condition1)) {
                $('[cell-if^="' + dtValue + '"]').find('[cond_1]').css('display', 'block')
                if (eval(condition2)) {
                    $('[cell-if^="' + dtValue + '"]').find('[cond_2]').css('display', 'block')
                    if (eval(condition3)) {
                        $('[cell-if^="' + dtValue + '"]').find('[cond_3]').css('display', 'block')
                        if (eval(condition4)) {
                            $('[cell-if^="' + dtValue + '"]').find('[cond_4]').css('display', 'block')
                        } else {
                            $('[cell-if^="' + dtValue + '"]').find('[else_4]').css('display', 'block')
                        }
                    } else {
                        $('[cell-if^="' + dtValue + '"]').find('[else_3]').css('display', 'block')
                    }
                } else {
                    $('[cell-if^="' + dtValue + '"]').find('[else_2]').css('display', 'block')
                }
            } else {
                $('[cell-if^="' + dtValue + '"]').find('[else_1]').css('display', 'block')
            }
        } else {
            $('[cell-if^="' + dtValue + '"]').find('[else_0]').css('display', 'block')
        }
    });
});
$('[cell-if^="[-if"]').each(function (index) {

    var ifAttr = $(this).attr('cell-if').replace("-if:", '-if' + index + ':')
    $(this).attr('cell-if', '' + ifAttr + '')

    var dt = $(this).attr('cell-if').match(/[-][i][f](\d{1,})/i);
    var dtValue = '[-if' + dt[1] + ':';

    var condition = $('[cell-if^="' + dtValue + '"]').find('[cond_0]').attr('cond_0')
    var condition1 = $('[cell-if^="' + dtValue + '"]').find('[cond_1]').attr('cond_1')
    var condition2 = $('[cell-if^="' + dtValue + '"]').find('[cond_2]').attr('cond_2')
    var condition3 = $('[cell-if^="' + dtValue + '"]').find('[cond_3]').attr('cond_3')
    var condition4 = $('[cell-if^="' + dtValue + '"]').find('[cond_4]').attr('cond_4')
    $('[cell-if^="' + dtValue + '"]').find('[cond_0]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[cond_1]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[cond_2]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[cond_3]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[cond_4]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_0]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_1]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_2]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_3]').css('display', 'none')
    $('[cell-if^="' + dtValue + '"]').find('[else_4]').css('display', 'none')
    if (eval(condition)) {
        $('[cell-if^="' + dtValue + '"]').find('[cond_0]').css('display', 'block')
        if (eval(condition1)) {
            $('[cell-if^="' + dtValue + '"]').find('[cond_1]').css('display', 'block')
            if (eval(condition2)) {
                $('[cell-if^="' + dtValue + '"]').find('[cond_2]').css('display', 'block')
                if (eval(condition3)) {
                    $('[cell-if^="' + dtValue + '"]').find('[cond_3]').css('display', 'block')
                    if (eval(condition4)) {
                        $('[cell-if^="' + dtValue + '"]').find('[cond_4]').css('display', 'block')
                    } else {
                        $('[cell-if^="' + dtValue + '"]').find('[else_4]').css('display', 'block')
                    }
                } else {
                    $('[cell-if^="' + dtValue + '"]').find('[else_3]').css('display', 'block')
                }
            } else {
                $('[cell-if^="' + dtValue + '"]').find('[else_2]').css('display', 'block')
            }
        } else {
            $('[cell-if^="' + dtValue + '"]').find('[else_1]').css('display', 'block')
        }
    } else {
        $('[cell-if^="' + dtValue + '"]').find('[else_0]').css('display', 'block')
    }
});
//Get Call
$('[cell-dt^="[-ge"]').each(function (index) {

    var dataAttr = $(this).attr('cell-dt').replace("-ge:", '-ge' + index + ':')
    $(this).attr('cell-dt', '' + dataAttr + '')

    var dt = $(this).attr('cell-dt').match(/[-][g][e](\d{1,})/i);
    var dtValue = '[-ge' + dt[1] + ':';

    var u = $(this).attr('cell-dt').match(/[-][u](\d{1,})/i);
    var mainNest = $(this).attr('cell-dt').match(/[-][l][p](\d{1,})/i);
    var objValue = [];
    var nestLoop = $(this).attr('cell-dt').match(/[-][n](\d{1,})/i);
    var nest = $(this).find('[cell-dt^="[-n0"]').attr('nest_0')
    var condition = $(this).find('[cell-dt^="[-n0"]').attr('cond')
    var nest1 = $(this).find('[cell-dt^="[-n1"]').attr('nest_1')
    var condition1 = $(this).find('[cell-dt^="[-n1"]').attr('cond')
    var nest2 = $(this).find('[cell-dt^="[-n2"]').attr('nest_2')
    var condition2 = $(this).find('[cell-dt^="[-n2"]').attr('cond')
    var nest3 = $(this).find('[cell-dt^="[-n3"]').attr('nest_3')
    var condition3 = $(this).find('[cell-dt^="[-n3"]').attr('cond')
    var nest4 = $(this).find('[cell-dt^="[-n4"]').attr('nest_4')
    var condition4 = $(this).find('[cell-dt^="[-n4"]').attr('cond')
    var objValue = [];
    let l = $('[cell-dt^="' + dtValue + '"] .data-block [cell-dt^="[-v"]').length
    for (let i = 0; i <= l; i++) {
        let d = $('[cell-dt^="' + dtValue + '"] .data-block [cell-dt^="[-v' + (i + 1) + '"]').text()
        objValue.push(d)
        $('[cell-dt^="' + dtValue + '"] .data-block [cell-dt^="[-v' + (i + 1) + '"]').empty()
    }
    let htm = $('[cell-dt^="' + dtValue + '"] [append]').html();
    $.get(getUrl[u[1]], function (key) {
        switch (Number(mainNest[1])) {
            case 0:
                try {
                    if (condition != undefined) {
                        if (eval(condition)) {
                            for (let i = 0; i <= eval(nest).length - 1; i++) {
                                nest_0 = eval(nest);
                                let ht = $('[cell-dt^="' + dtValue + '"] .data-block [cell-dt^="-v"]').prop("tagName")
                                $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                                for (let o = 0; o < objValue.length - 1; o++) {
                                    $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (i + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                                }
                            }
                            $('[cell-dt^="' + dtValue + '"] .data-block:last-child').remove()
                        }
                    } else {
                        for (let i = 0; i <= eval(nest).length - 1; i++) {
                            nest_0 = eval(nest);
                            let ht = $('[cell-dt^="' + dtValue + '"] .data-block .data-col').prop("tagName")
                            $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                            for (let o = 0; o < objValue.length - 1; o++) {
                                $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (i + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                            }
                        }
                        $('[cell-dt^="' + dtValue + '"] .data-block:last-child').remove()
                    }
                }
                catch (error) {
                    // handle your error
                }
                break;
            case 1:
                try {
                    for (let i = 0; i <= eval(nest).length - 1; i++) {
                        nest_0 = eval(nest);
                        if (condition1 != undefined) {
                            if (eval(condition1)) {
                                for (let j = 0; j <= eval(nest1).length; j++) {
                                    nest_1 = eval(nest1);
                                    let ht = $('[cell-dt^="' + dtValue + '"] .data-block .data-col').prop("tagName")
                                    $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                                    for (let o = 0; o < objValue.length - 1; o++) {
                                        $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (j + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                                    }
                                }
                            }
                        } else {
                            for (let j = 0; j <= eval(nest1).length; j++) {
                                nest_1 = eval(nest1);
                                let ht = $('[cell-dt^="' + dtValue + '"] .data-block .data-col').prop("tagName")
                                $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                                for (let o = 0; o < objValue.length - 1; o++) {
                                    $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (j + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                                }
                            }
                        }

                    }
                    $('[cell-dt^="' + dtValue + '"] .data-block:last-child').remove()
                }
                catch (error) {
                    // handle your error
                }
                break;
            case 2:
                try {
                    for (let i = 0; i < eval(nest).length; i++) {
                        nest_0 = eval(nest);
                        for (let j = 0; j < eval(nest1).length; j++) {
                            nest_1 = eval(nest1);
                            if (condition2 != undefined) {
                                if (eval(condition2)) {
                                    for (let k = 0; k < eval(nest2).length; k++) {
                                        nest_2 = eval(nest2);
                                        let ht = $('[cell-dt^="' + dtValue + '"] .data-block .data-col').prop("tagName")
                                        $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                                        for (let o = 0; o < objValue.length - 1; o++) {
                                            $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (k + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                                        }
                                    }
                                }
                            } else {
                                for (let k = 0; k < eval(nest2).length; k++) {
                                    nest_2 = eval(nest2);
                                    let ht = $('[cell-dt^="' + dtValue + '"] .data-block .data-col').prop("tagName")
                                    $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                                    for (let o = 0; o < objValue.length - 1; o++) {
                                        $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (k + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                                    }
                                }
                            }

                        }
                    }
                    $('[cell-dt^="' + dtValue + '"] .data-block:last-child').remove()
                }
                catch (error) {
                    // handle your error
                }
                break;
            case 3:
                try {
                    for (let i = 0; i < eval(nest).length; i++) {
                        nest_0 = eval(nest);
                        for (let j = 0; j < eval(nest1).length; j++) {
                            nest_1 = eval(nest1);
                            for (let k = 0; k < eval(nest2).length; k++) {
                                nest_2 = eval(nest2);
                                if (condition3 != undefined) {
                                    if (eval(condition3)) {
                                        for (let l = 0; l < eval(nest3).length; l++) {
                                            nest_3 = eval(nest3);
                                            let ht = $('[cell-dt^="' + dtValue + '"] .data-block .data-col').prop("tagName")
                                            $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                                            for (let o = 0; o < objValue.length - 1; o++) {
                                                console.log(objValue)
                                                $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (l + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                                            }
                                        }
                                    }
                                } else {
                                    for (let l = 0; l < eval(nest3).length; l++) {
                                        nest_3 = eval(nest3);
                                        let ht = $('[cell-dt^="' + dtValue + '"] .data-block .data-col').prop("tagName")
                                        $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                                        for (let o = 0; o < objValue.length - 1; o++) {
                                            $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (l + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                                        }
                                    }
                                }

                            }
                        }
                    }
                    $('[cell-dt^="' + dtValue + '"] .data-block:last-child').remove()
                }
                catch (error) {
                    // handle your error
                }
                break;
            case 4:
                try {
                    for (let i = 0; i <= eval(nest).length - 1; i++) {
                        nest_0 = eval(nest);
                        for (let j = 0; j <= eval(nest1).length; j++) {
                            nest_1 = eval(nest1);
                            for (let k = 0; k <= eval(nest2).length; i++) {
                                nest_2 = eval(nest2);
                                for (let l = 0; l <= eval(nest3).length; l++) {
                                    nest_3 = eval(nest3);
                                    if (condition4 != undefined) {
                                        if (eval(condition4)) {
                                            for (let m = 0; m <= eval(nest4).length; m++) {
                                                nest_4 = eval(nest4);
                                                let ht = $('[cell-dt^="' + dtValue + '"] .data-block .data-col').prop("tagName")
                                                $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                                                for (let o = 0; o < objValue.length - 1; o++) {
                                                    $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (m + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                                                }
                                            }
                                        }
                                    } else {
                                        for (let m = 0; m <= eval(nest4).length; m++) {
                                            nest_4 = eval(nest4);
                                            let ht = $('[cell-dt^="' + dtValue + '"] .data-block .data-col').prop("tagName")
                                            $('[cell-dt^="' + dtValue + '"] [append]').append(htm);
                                            for (let o = 0; o < objValue.length - 1; o++) {
                                                $('[cell-dt^="' + dtValue + '"] .data-block:nth-child(' + (m + 1) + ') [cell-dt="[-v' + (o + 1) + ']"]').append(eval(objValue[o]))
                                            }
                                        }
                                    }

                                }
                            }
                        }
                    }
                    $('[cell-dt^="' + dtValue + '"] .data-block:last-child').remove()
                }
                catch (error) {
                    // handle your error
                }
                break;
            default: "please enter valid input"
        }
    })
});
//Post Call
$('[cell-dt^="[-po"]').each(function (index) {
    var dataAttr = $(this).attr('cell-dt').replace("-po:", '-po' + index + ':')
    $(this).attr('cell-dt', '' + dataAttr + '')
})

$('[cell-dt^="[-po"]').find('.post').on("click", function () {
    var po = $(this).closest('[cell-dt^="[-po"]').attr('cell-dt').match(/[-][p][o](\d{1,})/i);
    var poValue = '[-po' + po[1] + ':';
    var u = $(this).closest('[cell-dt^="[-po"]').attr('cell-dt').match(/[-][u](\d{1,})/i);
    var postObj = [];
    var valObj = []
    $('[cell-dt^="' + poValue + '"]').find('input').each(function () {
        var ids = $(this).attr('id')
        valObj.push(ids)
    })
    $('[cell-dt^="' + poValue + '"]').find('input').each(function (i) {
        l = $('[cell-dt^="' + poValue + '"]').find('#' + valObj[i] + '').val();
        postObj.push(l)
    })
    var associated = valObj.reduce(function (previous, valObj, index) {
        previous[valObj] = postObj[index];
        return previous
    }, {})
    $.ajax({
        type: "POST",
        url: getUrl[u[1]],
        data: associated,
        dataType: "json",
        success: function (result) {
            $("#result").empty().append(result);
        }
    });
})
//Delete Call
$('[cell-dt^="[-de"]').each(function (index) {
    var dataAttr = $(this).attr('cell-dt').replace("-de:", '-de' + index + ':')
    $(this).attr('cell-dt', '' + dataAttr + '')
});
$('[cell-dt^="[-de"]').click(function () {
    var idVal = $(this).attr('cell-dt').match(/[-][i][d](\d{1,})/i);
    var u = $(this).attr('cell-dt').match(/[-][u](\d{1,})/i);
    id = idVal[1]
    deleteUrl = getUrl[u[1]]
    $.ajax({
        url: '' + deleteUrl + '/' + id + '',
        type: 'DELETE',
        dataType: "application/json",
        success: function (result) {

        }
    });
})
//Put Call
$('[cell-dt^="[-pu"]').each(function (index) {
    var dataAttr = $(this).attr('cell-dt').replace("-pu:", '-pu' + index + ':')
    $(this).attr('cell-dt', '' + dataAttr + '')
})
$('[cell-dt^="[-pu"]').find('.put').click(function () {

    var pu = $(this).closest('[cell-dt^="[-pu"]').attr('cell-dt').match(/[-][p][u](\d{1,})/i);
    var puValue = '[-pu' + pu[1] + ':';
    var idVal = $(this).closest('[cell-dt^="[-pu"]').attr('cell-dt').match(/[-][i][d](\d{1,})/i);
    var u = $(this).closest('[cell-dt^="[-pu"]').attr('cell-dt').match(/[-][u](\d{1,})/i);

    var putObj = [];
    var valObj = [];
    id = idVal[1];
    putUrl = getUrl[u[1]]
    $('[cell-dt^="' + puValue + '"]').find('input').each(function () {
        var ids = $(this).attr('id')
        valObj.push(ids)
    })
    $('[cell-dt^="' + puValue + '"]').find('input').each(function (i) {
        l = $('[cell-dt^="' + puValue + '"]').find('#' + valObj[i] + '').val();
        putObj.push(l)
    })
    var associated = valObj.reduce(function (previous, valObj, index) {
        previous[valObj] = putObj[index];
        return previous
    }, {})
    $.ajax({
        type: "PUT",
        url: '' + putUrl + '/' + id + '',
        data: associated,
        dataType: "application/json",
        success: function (result) {
            $("#result").empty().append(result);
        }
    });
})
//Patch Call
$('[cell-dt^="[-pa"]').each(function (index) {
    var dataAttr = $(this).attr('cell-dt').replace("-pa:", '-pa' + index + ':')
    $(this).attr('cell-dt', '' + dataAttr + '')
});
$('[cell-dt^="[-pa"]').find('.patch').click(function () {

    var pa = $(this).closest('[cell-dt^="[-pa"]').attr('cell-dt').match(/[-][p][a](\d{1,})/i);
    var paValue = '[-pa' + pa[1] + ':';
    var idVal = $(this).closest('[cell-dt^="[-pa"]').attr('cell-dt').match(/[-][i][d](\d{1,})/i);
    var u = $(this).closest('[cell-dt^="[-pa"]').attr('cell-dt').match(/[-][u](\d{1,})/i);

    var putObj = [];
    var valObj = [];
    var id = idVal[1];
    patchUrl = getUrl[u[1]]
    $('[cell-dt^="' + paValue + '"]').find('input').each(function () {
        var ids = $(this).attr('id')
        valObj.push(ids)
    })
    $('[cell-dt^="' + paValue + '"]').find('input').each(function (i) {
        l = $('[cell-dt^="' + paValue + '"]').find('#' + valObj[i] + '').val();
        putObj.push(l)
    })
    var associated = valObj.reduce(function (previous, valObj, index) {
        previous[valObj] = putObj[index];
        return previous
    }, {})

    $.ajax({
        url: '' + patchUrl + '/' + id + '',
        type: 'PATCH',
        dataType: "application/json",
        data: associated,
        success: function (result) {

        },
    });
})

