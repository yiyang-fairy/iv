$(document).ready(function () {
  // 数量点击事件
  const add = $(".wrapper .add-num")
  const warn = $(".el-message-box__wrapper")//弹出提示框
  const bg = $(".v-modal")//弹出提示框
  const shopitem = $(".shop-cart-wrap")//商品
  let list = []
  for (let i = 0; i < shopitem.length; i++) {
    const thisnum = Number($(shopitem[i]).find(".prod-num").attr("value"))
    const thisprice = Number($(shopitem[i]).find(".total-price").text())
    const thisflag =
      $(shopitem[i]).find(".checkbox").css('"backgroundPositionY"') == "-28px"
        ? 1
        : 0
        
    list.push([i, thisflag, thisnum, thisprice])
  }
  console.log("add", add)
  //   数量增加
  add.click(function () {
    const curr = $(this).index('.wrapper .add-num')
    const input = $(this).siblings(".prod-num")
    const subtotal = $(this).parents(".prod-line").find(".total-price") //小计
    const originalPrice = Number(
      $(this).parents(".prod-line").find(".price-col").text()
    ) 
    list[curr][0] = curr
    //价格
    let num = Number($(input).attr("value"))
    num = num + 1
    if (num >= 5) {
      $(input).attr("value", 5)
      $(subtotal).text((5 * originalPrice).toFixed(2) + "")
      num = 5
      list[curr][2] = 5;
      list[curr][3] = (5 * originalPrice).toFixed(2)
      $(warn).removeClass("none")
      $(bg).removeClass("none")
    } else {
      $(input).attr("value", num)
      $(subtotal).text((num * originalPrice).toFixed(2) + "")
      list[curr][2] = num;
      list[curr][3] = (num * originalPrice).toFixed(2)
    }
    finalNum()
    console.log(list[curr])
    console.log(finalNum())
  })
  //   数量减少
  const reduce = $(".wrapper .reduce-num")
  $(reduce).click(function () {
    const curr = $(this).index('.wrapper .reduce-num')
    const input = $(this).siblings(".prod-num")
    const subtotal = $(this).parents(".prod-line").find(".total-price")
    const originalPrice = Number(
      $(this).parents(".prod-line").find(".price-col").text()
    )
    list[curr][0] = curr
    let num = Number($(input).attr("value"))
    num = num - 1
    if (num <= 1) {
      $(input).attr("value", 1)
      $(subtotal).text(originalPrice.toFixed(2) + "")
      list[curr][2] = 1;
      list[curr][3] = originalPrice.toFixed(2)
    } else {
      $(input).attr("value", num)
      $(subtotal).text((num * originalPrice).toFixed(2) + "")
      list[curr][2] = num;
      list[curr][3] = (num * originalPrice).toFixed(2)
    }
    finalNum()
  })
  //   关闭提示框
  const shut = $(".el-message-box-shut")
  $(shut).click(function () {
    $(warn).addClass("none")
    $(bg).addClass("none")
  })
  const confirm = $(".el-message-box__btns .el-button--primary")
  $(confirm).click(function () {
    $(warn).addClass("none")
    $(bg).addClass("none")
  })
  // 勾选/全选/全不选
  const check = $(".shop-cart-wrap .checkbox") //商品勾选框
  check.click(function () {
    const curr = $(this).index('.shop-cart-wrap .checkbox')
    const subtotal = $(this).parents(".prod-line").find(".total-price").text() //小计
    const num = $(this).parents(".prod-line").find(".prod-num").attr("value") //单个商品数量
    if ($(this).css("backgroundPositionY") == "-28px") {
      $(this).css("backgroundPositionY", "0")
      list[curr][1] = 0
      finalNum()
      if (!isAll()) {
        $(".cart-head .checkbox").css("backgroundPositionY", "0px")
        $(".cart-toolbar-wrap .checkbox").css("backgroundPositionY", "0px")
      }
    } else {
      $(this).css("backgroundPositionY", "-28px")
      list[curr][1] = 1
      finalNum()
      if (isAll()) {
        $(".cart-head .checkbox").css("backgroundPositionY", "-28px")
        $(".cart-toolbar-wrap .checkbox").css("backgroundPositionY", "-28px")
      }
    }
    finalNum()
  })
  const checkbox = $(".checkbox") //商品及全选框
  // 头部全选框
  $(".cart-head .checkbox").click(function () {
    if (isAll()) {
      for (let i = 0; i < checkbox.length; i++) {
        $(checkbox[i]).css("backgroundPositionY", "0px")
      }
      list.forEach(e => e[1] = 0)
      finalNum()
    } 
    else {
      for (let i = 0; i < checkbox.length; i++) {
        $(checkbox[i]).css("backgroundPositionY", "-28px")
      }
      list.forEach(e => e[1] = 1)
      finalNum()
    }
    
  })
  //结算全选框
  $(".cart-toolbar-wrap .checkbox").click(function () {
    if (isAll()) {
      for (let i = 0; i < checkbox.length; i++) {
        $(checkbox[i]).css("backgroundPositionY", "0px")
      }
      list.forEach(e => e[1] = 0)
      finalNum()
    } 
    else {
      for (let i = 0; i < checkbox.length; i++) {
        $(checkbox[i]).css("backgroundPositionY", "-28px")
      }
      list.forEach(e => e[1] = 1)
      finalNum()
    }
  })
//删除选中的商品
console.log($('.deletecheck'))
console.log(list)
$('.deletecheck').click(function() {
  for(let i = 0; i < list.length; i++) {
    if(list[i][1] == 1) {
      $(shopitem[i]).addClass('none')
      list[i] = []
    }
  }
  const temp  = list.filter(e => e.length > 0)
  list = temp
  finalNum()
})
//删除当前商品
$('.deleteCurr').click(function() {
  const curr = $(this).attr('pid')
  $(shopitem[curr]).addClass('none')
  list[curr][1] = 0
  if(!isAll()) {
    for (let i = 0; i < checkbox.length; i++) {
      $(checkbox[i]).css("backgroundPositionY", "0px")
    }
    console.log(222)
    // list.forEach(e => e[1] = 1)
    // finalNum()
  }
  if(isAll()){
    for (let i = 0; i < checkbox.length; i++) {
      console.log(111)
      $(checkbox[i]).css("backgroundPositionY", "-28px")
    }
  }
  list[curr] = []
  const temp  = list.filter(e => e.length > 0)
  list = temp
  console.log(list)
  finalNum()
})
//判断checkbox是否全选函数
  const isAll = function () {
    let count = 0
    for (let i = 0; i < check.length; i++) {
      if ($(check[i]).css("backgroundPositionY") == "-28px") {
        count++
      }
    }
    if (count == check.length) {
      return true
    } else {
      return false
    }
  }
//计算最终价格/最终数量函数
  const finalNum = function () {
    let num = 0;
    let price = 0;
    for(let i = 0;  i < list.length; i++) {
      if(list[i][1] == 1) {
        num += list[i][2]
        price += Number(list[i][3])
      }
    }
    $(".sum-area-infoI .price span").text(price + '')
    $(".sum-area-infoI em b").text(num + '')
  }
})
