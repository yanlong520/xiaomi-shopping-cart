

$("a.se").on('mouseenter', function () {
    $(this).css("color", "white ")

}).on('mouseleave', function () {
    $(this).css("color", "rgb(190, 186, 186)")

})


//

var fixed = document.getElementById('fixed')
window.addEventListener('scroll',function(){
    // console.log(window.scrollY)
    if(window.scrollY > 100){
        fixed.style.top = '0px'
    } else {
        fixed.style.top = '-150px'
    }
})
//删除购物车里面的商品

var jiaqianshuxing = ''
var del1 = function () {
    jiaqianshuxing = $(this).attr('jiaqianshuxing')
    var qian1 = parseInt(jiaqianshuxing)
    if (m1 == 1) {
        widthth -= 60
        $('.gouwuliebiao2').css('height', widthth + 'px')
        no1 = false
        $('.shangpin1').css('display', 'none')
        console.log('移除商品1成功')
    } else {
        m1--
        console.log('删除商品1OK')
        $('.qianshu1').text(jiaqianshuxing + m1)
    }
    n--
    zongjia-=qian1
    $('.shang').text('共 ' + n + ' 件商品')
    $('.xia').text(zongjia)//总价
    $('.gouwuche').text('  购物车('+n+')')
}
var del2 = function () {
    jiaqianshuxing = $(this).attr('jiaqianshuxing')
    var qian2 = parseInt(jiaqianshuxing)
    if (m2 == 1) {
        widthth -= 60
        $('.gouwuliebiao2').css('height', widthth + 'px')
        no2 = false
        $('.shangpin2').css('display', 'none')
        console.log('移除商品2成功')
    } else {
        m2--
        console.log('删除商品2OK')
        $('.qianshu2').text(jiaqianshuxing + m2)
    }
    n--
    zongjia-=qian2
    $('.shang').text('共 ' + n + ' 件商品')
    $('.xia').text(zongjia)//总价
    $('.gouwuche').text('  购物车('+n+')')
}
var del3 = function () {
    jiaqianshuxing = $(this).attr('jiaqianshuxing')
    var qian3 = parseInt(jiaqianshuxing)
    if (m3 == 1) {
        widthth -= 60
        $('.gouwuliebiao2').css('height', widthth + 'px')
        no3 = false
        $('.shangpin3').css('display', 'none')
        console.log('移除商品3成功')
    } else {
        m3--
        console.log('删除商品3OK')
        $('.qianshu3').text(jiaqianshuxing + m3)
    }
    n--
    zongjia-=qian3
    $('.shang').text('共 ' + n + ' 件商品')
    $('.xia').text(zongjia)//总价
    $('.gouwuche').text('  购物车('+n+')')
}
var del4 = function () {
    jiaqianshuxing = $(this).attr('jiaqianshuxing')
    var qian4 = parseInt(jiaqianshuxing)
    if (m4 == 1) {
        widthth -= 60
        $('.gouwuliebiao2').css('height', widthth + 'px')
        no4 = false
        $('.shangpin4').css('display', 'none')
        console.log('移除商品4成功')
    } else {
        m4--
        console.log('删除商品4OK')
        $('.qianshu4').text(jiaqianshuxing + m4)
    }
    n--
    zongjia-=qian4
    $('.shang').text('共 ' + n + ' 件商品')
    $('.xia').text(zongjia)//总价
    $('.gouwuche').text('  购物车('+n+')')
}
$('.jian1').on('click', del1)
$('.jian2').on('click', del2)
$('.jian3').on('click', del3)
$('.jian4').on('click', del4)
//轮播图
//a标签   rgb(190, 186, 186)    灰色    rgb(212, 60, 60)   红色

var index = 0
var items = $('.tp-item')
var go = function () {
    items.removeClass('active')
    items.eq(index).addClass('active')
}
var gonext = function () {
    if (index == items.length - 1) {
        index = 0;
    } else {
        index++
    }
    go()
}
var goprev = function () {
    if (index == 0) {
        index = 2;
    } else {
        index--
    }
    go()
}
$('.button').on('mouseenter', function () {
    $(this).css("background-color", "rgb(218, 214, 214)")
}).on('mouseleave', function () {
    $(this).css("background-color", "write")
})
$('.pre').on('click', function () {
    goprev()
})
$('.next').on('click', function () {
    gonext()
})
$('.point').on('click', function () {
    index = parseInt($(this).attr('num'))
    // console.log($(this).attr('num'))
    go()
})
var ismove = true
setInterval(function () {
    if (ismove) {
        gonext()
    } else {
    }
}, 2500)
$('.lunbotu').on('mouseenter', function () {
    ismove = false
}).on('mouseleave', function () {
    ismove = true
})

//购物车
var kuang11 = $('.kuang11')
var kuang12 = $('.kuang12')
var kuang21 = $('.kuang21')
var kuang22 = $('.kuang22')
var youwenzi6 = $('.youwenzi6')
var youwenzi7 = $('.youwenzi7')
var youwenzi8 = $('.youwenzi8')
//清除类名
var qinchuleiming = function () {
    kuang11.removeClass('bianhongshi')
    kuang12.removeClass('bianhongshi')
    kuang21.removeClass('bianhongshi')
    kuang22.removeClass('bianhongxu')
}

//获取属性值
var huo = ""
var jiage = ""
var num = ""
var qian = 0

$('.kuang11').on('click', function () {
    index = parseInt($(this).attr('num'))
    go()
    qinchuleiming();
    kuang11.addClass('bianhongshi')
    youwenzi6.text($(this).attr('huo'))
    youwenzi7.text($(this).attr('jiage'))
    youwenzi8.text('总计 ：' + $(this).attr('jiage'))

    huo = $(this).attr('huo')
    jiage = $(this).attr('jiage')
    no = $(this).attr('no')
    qian = parseInt(jiage)
    console.log(huo, jiage, no)


})
$('.kuang12').on('click', function () {
    index = parseInt($(this).attr('num'))
    go()
    qinchuleiming()
    kuang12.addClass('bianhongshi')
    youwenzi6.text($(this).attr('huo'))
    youwenzi7.text($(this).attr('jiage'))
    youwenzi8.text('总计 ：' + $(this).attr('jiage'))

    huo = $(this).attr('huo')
    jiage = $(this).attr('jiage')
    no = $(this).attr('no')
    qian = parseInt(jiage)
    console.log(huo, jiage, no)
})
$('.kuang21').on('click', function () {
    index = parseInt($(this).attr('num'))
    go()
    qinchuleiming()
    kuang21.addClass('bianhongshi')
    youwenzi6.text($(this).attr('huo'))
    youwenzi7.text($(this).attr('jiage'))
    youwenzi8.text('总计 ：' + $(this).attr('jiage'))

    huo = $(this).attr('huo')
    jiage = $(this).attr('jiage')
    no = $(this).attr('no')
    qian = parseInt(jiage)
    console.log(huo, jiage, no)

})
$('.kuang22').on('click', function () {
    index = parseInt($(this).attr('num'))
    go()
    qinchuleiming()
    kuang22.addClass('bianhongxu')
    youwenzi6.text($(this).attr('huo'))
    youwenzi7.text($(this).attr('jiage'))
    youwenzi8.text('总计 ：' + $(this).attr('jiage'))

    huo = $(this).attr('huo')
    jiage = $(this).attr('jiage')
    no = $(this).attr('no')
    qian = parseInt(jiage)
    console.log(huo, jiage, no)

})
//加入购物车
var gouwuche = $('.gouwuche')
var quyu = $('.quyu')//搜索框的区域
var gouwuliebiao1 = $('.gouwuliebiao1')
var gouwuliebiao2 = $('.gouwuliebiao2')
var jiarugouwuche = $('.youwenzi9')
var n = 0;//加入购物车的件数
var m1 = 1;//相同个数
var m2 = 1;
var m3 = 1;
var m4 = 1;
var widthth = 130;
var zongjia = 0





//加入购物车，改变属性
var no1 = false
var no2 = false
var no3 = false
var no4 = false
// var jianting1 = false
$('.youwenzi9').on('click', function () {

    n++
    if (no == 1) {

        if (no1 == false) {
            widthth += 60
            $('.gouwuliebiao2').css('height', widthth + 'px')
            no1 = true
            $('.shangpin1').css('display', 'block')

            $('.mingzi1').text(huo)
            $('.qianshu1').text(jiage + '×' + m1)
            $('.jian1').text('×')
            zongjia += qian
            $('.wenzi22').text(huo)//第二个页面的

            // console.log('加入商品1   成功')

        } else {
            // jianting1 = true
            m1++
            $('.mingzi1').text(huo)
            $('.qianshu1').text(jiage + '×' + m1)
            $('.jian1').text('×')
            zongjia += qian
            $('.wenzi22').text(huo)//第二个页面的
            
        }
    }

    if (no == 2) {
        if (no2 == false) {
            widthth += 60
            $('.gouwuliebiao2').css('height', widthth + 'px')
            no2 = true

            $('.shangpin2').css('display', 'block')

            $('.mingzi2').text(huo)
            $('.qianshu2').text(jiage + '×' + m2)
            $('.jian2').text('×')
            zongjia += qian
            $('.wenzi22').text(huo)//第二个页面的

            // console.log('加入商品2   成功')
        } else {
            m2++
            $('.mingzi2').text(huo)
            $('.qianshu2').text(jiage + '×' + m2)
            $('.jian2').text('×')
            zongjia += qian
            $('.wenzi22').text(huo)//第二个页面的
        }

    }
    if (no == 3) {
        if (no3 == false) {
            widthth += 60
            $('.gouwuliebiao2').css('height', widthth + 'px')
            no3 = true

            $('.shangpin3').css('display', 'block')

            $('.mingzi3').text(huo)
            $('.qianshu3').text(jiage + '×' + m3)
            $('.jian3').text('×')
            zongjia += qian
            $('.wenzi22').text(huo)//第二个页面的

            console.log('加入商品3   成功')
        } else {
            m3++
            $('.mingzi3').text(huo)
            $('.qianshu3').text(jiage + '×' + m3)
            $('.jian3').text('×')
            zongjia += qian
            $('.wenzi22').text(huo)//第二个页面的
        }

    }
    if (no == 4) {
        if (no4 == false) {
            widthth += 60
            $('.gouwuliebiao2').css('height', widthth + 'px')
            no4 = true

            $('.shangpin4').css('display', 'block')

            $('.mingzi4').text(huo)
            $('.qianshu4').text(jiage + '×' + m4)
            $('.jian4').text('×')
            zongjia += qian
            $('.wenzi22').text(huo)//第二个页面的

            console.log('加入商品4   成功')
        } else {
            m4++
            $('.mingzi4').text(huo)
            $('.qianshu4').text(jiage + '×' + m4)
            $('.jian4').text('×')
            zongjia += qian
            $('.wenzi22').text(huo)//第二个页面的
        }

    }


    $('.shang').text('共 ' + n + ' 件商品')
    $('.xia').text(zongjia)//总价
    $('.gouwuche').text('  购物车('+n+')')

    console.log(m1, m2, m3, m4, zongjia)

    console.log('加入OK')
    $('.wrap1').css('display','none')
    $('.wrap2').css('display','block')
    // window.location.href="file:///E:/0%20fore-end/%E7%BB%83%E4%B9%A0/0%E9%A1%B9%E7%9B%AE/index1.html";

})



gouwuche.on('mouseenter', function () {
    $(this).css("background-color", "white ")
    $(this).css("color", "rgb(212, 60, 60)")
    if (n == 0) {
        gouwuliebiao2.css('display', 'none')
        gouwuliebiao1.css('display', 'block')
    } else {
        gouwuliebiao2.css('display', 'block')
        gouwuliebiao1.css('display', 'none')
    }
    quyu.css('display', 'none')
}).on('mouseleave', function () {
    $(this).css("background-color", "rgb(61, 63, 63)")
    $(this).css("color", "rgb(179, 176, 176)")

    gouwuliebiao1.css('display', 'none')
    gouwuliebiao2.css('display', 'none')
    quyu.css('display', 'block')
    // console.log('d')
})


//购物车列表不消失
gouwuliebiao1.on('mouseenter', function () {
    quyu.css('display', 'none')
    gouwuliebiao1.css('display', 'block')
}).on('mouseleave', function () {
    quyu.css('display', 'block')
    gouwuliebiao1.css('display', 'none')
})
gouwuliebiao2.on('mouseenter', function () {
    quyu.css('display', 'none')
    gouwuliebiao2.css('display', 'block')
}).on('mouseleave', function () {
    quyu.css('display', 'block')
    gouwuliebiao2.css('display', 'none')
})







//第二个界面
$('.fanhui').on('click', function () {
    $('.wrap1').css('display','block')
    $('.wrap2').css('display','none')
    // window.location.href = "file:///E:/0%20fore-end/%E7%BB%83%E4%B9%A0/0%E9%A1%B9%E7%9B%AE/index.html";

})



