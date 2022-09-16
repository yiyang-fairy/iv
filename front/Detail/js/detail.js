$(document).ready(function () {
  //左侧atlas图片
  const altasPrevious = $(".atlas .operation-previous")
  const altasNext = $(".atlas .operation-next")
  const smallImgUl = $(".img-list-small")
  const bigImgLis = $(".img-list-big .big-item")
  const smallImgLis = $(".img-list-small .small-item")
  //左右按钮
  altasNext.click(function () {
    $(smallImgUl).css("left", "-105px")
  })
  altasPrevious.click(function () {
    $(smallImgUl).css("left", "0px")
  })
  //触碰小图片改变大图片
  $(bigImgLis[0]).css("opacity", 1)
  $(bigImgLis[0]).css("z-index", 1)
  smallImgLis.mouseenter(function () {
    const curr = $(this).index()
    for (let i = 0; i < smallImgLis.length; i++) {
      $(bigImgLis[i]).css("opacity", 0)
      $(bigImgLis[i]).css("z-index", 0)
    }
    $(bigImgLis[curr]).css("opacity", 1)
    $(bigImgLis[curr]).css("z-index", 1)
  })
  // 选择版本
  const versionLis = $(".specs-content-list li")
  $(versionLis[1]).addClass("red")
  $(versionLis[1]).children("a").addClass("red")
  versionLis.click(function () {
    const curr = $(this).index()
    //选中当前按钮
    for (let i = 0; i < versionLis.length; i++) {
      if (i !== curr) {
        $(versionLis[i]).removeClass("red")
        $(versionLis[i]).children("a").removeClass("red")
      }
    }
    $(versionLis[curr]).addClass("red")
    $(versionLis[curr]).children("a").addClass("red")
    //改变标题
    $(".h-version").text($(versionLis[curr]).text())
    //改变底部名称
    $(".settle .f-version").text($(versionLis[curr]).text())
    //改变价格
    const priceArray = ["2299.00", " 1999.00", "2499.00"]
    $(".sale-price .sale-price").text(priceArray[curr])
    $(numInput).attr("value", 1)
    $(totalPrice).text(
      Number($(numInput).attr("value")) *
      parseFloat($(".sale-price .sale-price").text())
    )
    installm()
  })
  // 选择颜色
  const colorLis = $(".color-list li")
  $(colorLis[0]).addClass("red")
  $(colorLis[0]).children("a").addClass("red")

  //颜色改变标题及左侧展示图跟着改变
  const imgsrcArray = [
    [
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219617962_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219671652_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219617753_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219617876_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651824060460_750x750.png.webp",
    ],
    [
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219622811_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219623073_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219622318_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219622769_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651824065114_750x750.png.webp",
    ],
    [
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219628792_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219629948_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219628431_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219628653_750x750.png.webp",
      "https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651824068380_750x750.png.webp",
    ],
  ]
  colorLis.click(function () {
    const curr = $(this).index()
    //改变左侧图片地址
    for (let i = 0; i < smallImgLis.length; i++) {
      $(smallImgLis[i]).children("img").attr("src", imgsrcArray[curr][i])
      $(bigImgLis[i]).children("img").attr("src", imgsrcArray[curr][i])
    }
    //选中当前按钮
    for (let i = 0; i < colorLis.length; i++) {
      if (i !== curr) {
        $(colorLis[i]).removeClass("red")
        $(colorLis[i]).children("a").removeClass("red")
      }
    }
    $(colorLis[curr]).addClass("red")
    $(colorLis[curr]).children("a").addClass("red")
    //改变底部名称
    $(".settle .f-color").text($(colorLis[curr]).text())
    //改变标题
    $(".h-color").text($(colorLis[curr]).text())
    $(numInput).attr("value", 1)
    $(totalPrice).text(
      Number($(numInput).attr("value")) *
      parseFloat($(".sale-price .sale-price").text())
    )
    installm()
  })

  // 选择套餐
  const suitLis = $(".suit dd ul li")
  const suitDetailLis = $(".suit div.suit-detail")
  $(suitLis[0]).addClass("red")
  $(suitLis[0]).children("p").addClass("red")
  suitLis.click(function () {
    const curr = $(this).index()
    for (let i = 0; i < 5; i++) {
      if (i !== curr) {
        $(suitLis[i]).removeClass("red")
        $(suitLis[i]).children("p").removeClass("red")
        $(suitDetailLis[i - 1]).addClass("none")
      }
    }
    $(suitLis[curr]).addClass("red")
    $(suitLis[curr]).children("p").addClass("red")
    $(suitDetailLis[curr - 1]).removeClass("none")
    //改变底部套餐名称
    $(".settle .f-set").text($(suitLis[curr]).children(".name").text())
  })
  // 选择服务
  const services = $(".services .item-list")
  const accident = $(services[1]).children("li")
  const broken = $(services[0]).children("li")
  const agreeCheckbox = $(".agreement-checkbox")
  //意外保
  accident.click(function () {
    if ($(accident).is(".red")) {
      $(accident).removeClass("red")
      $(accident).find("span.item-checkbox").removeClass("redIcon")
      $(totalPrice).text(
        Number($(totalPrice).text()) - Number($(numInput).attr("value")) * 269
      )
      installm()
    } else {
      $(agreeCheckbox).css("color", "#000")
      $(accident).addClass("red")
      $(accident).find("span.item-checkbox").addClass("redIcon")
      $(totalPrice).text(
        269 * Number($(numInput).attr("value")) + Number($(totalPrice).text())
      )
      installm()
    }
  })
  // 碎屏保
  broken.click(function () {
    if ($(broken).is(".red")) {
      $(broken).removeClass("red")
      $(broken).find("span.item-checkbox").removeClass("redIcon")
      $(totalPrice).text(
        Number($(totalPrice).text()) - Number($(numInput).attr("value")) * 179
      )
      installm()
    } else {
      $(agreeCheckbox).css("color", "#000")
      $(broken).addClass("red")
      $(broken).find("span.item-checkbox").addClass("redIcon")

      $(totalPrice).text(
        179 * Number($(numInput).attr("value")) + Number($(totalPrice).text())
      )
      installm()
    }
  })
  //同意勾选框
  agreeCheckbox.click(function () {
    if ($(agreeCheckbox).css("color") == "rgb(0, 0, 0)") {
      $(agreeCheckbox).css("color", "#fff")
      if ($(accident).is(".red")) {
        $(accident).removeClass("red")
        $(accident).find("span.item-checkbox").removeClass("redIcon")
        $(totalPrice).text(
          Number($(totalPrice).text()) - Number($(numInput).attr("value")) * 269
        )
        installm()
      }
      if ($(broken).is(".red")) {
        $(broken).removeClass("red")
        $(broken).find("span.item-checkbox").removeClass("redIcon")
        $(totalPrice).text(
          Number($(totalPrice).text()) - Number($(numInput).attr("value")) * 179
        )
        installm()
      }
    }
  })
  //   个性化定制
  const laser = $(".laser-item")
  $(laser).click(function () {
    if ($(laser).is(".red")) {
      $(laser).removeClass("red")
      $(laser).find(".item-checkbox").removeClass("redIcon")
      $(".laser").find("p.laser-warn").addClass("none")
    } else {
      $(laser).addClass("red")
      $(laser).find(".item-checkbox").addClass("redIcon")
      $(".laser").find("p.laser-warn").removeClass("none")
    }
  })

  // 分期付款
  const installmentLis = $(".installment .item-list li")
  installmentLis.click(function () {
    const curr = $(this).index()

    if ($(installmentLis[curr]).is(".red")) {
      $(installmentLis[curr]).removeClass("red")
      $(installmentLis[curr]).children(".item-checkbox").removeClass("redIcon")
      $(".settle-operation .add").css("display", "inline-block")
      $(".settle-operation .buy").text("立即购买")
    } else {
      for (let i = 0; i < installmentLis.length; i++) {
        $(installmentLis[i]).removeClass("red")
        $(installmentLis[i]).children(".item-checkbox").removeClass("redIcon")
      }
      $(installmentLis[curr]).addClass("red")
      $(installmentLis[curr]).children(".item-checkbox").addClass("redIcon")
      $(".settle-operation .add").css("display", "none")
      $(".settle-operation .buy").text("分期购买")
    }
  })
  // 数量
  if (Number($(".number-item input").attr("value")) == 1) {
    $(".minus").css("cursor", "not-allowed")
    $(".minus").css("color", "#ccc")
  }
  let num = Number($(".number-item input").attr("value"))
  const numInput = $(".number-item input")
  $(".add").click(function () {
    num = Number($(".number-item input").attr("value"))
    num = num + 1
    if (num > 1) {
      $(numInput).attr("value", num)
      $(".minus").css("cursor", "pointer")
      $(".minus").css("color", "#777")
    }
    if (num >= 5) {
      $(".add").css("cursor", "not-allowed")
      $(numInput).attr("value", 5)
      $(".add").css("color", "#ccc")
      num = 5
    }
    //底部数量
    $(".settle .f-num").text(num)
    //是否有意外保
    let temp = 0
    if ($(accident).is(".red")) {
      temp = temp + 269
    }
    //是否有碎屏保
    if ($(broken).is(".red")) {
      temp = temp + 179
    }
    //总价钱
    if (num >= 5) {
      $(totalPrice).text($(totalPrice).text())
      //分期付款
      installm()
    } else {
      $(totalPrice).text(
        Number($(totalPrice).text()) +
        parseFloat($(".sale-price .sale-price").text()) +
        temp
      )
      //分期付款
      installm()
    }
  })
  //减
  $(".minus").click(function () {
    num = Number($(".number-item input").attr("value"))
    num = num - 1
    // $(numInput).attr("value", num)
    if (num <= 5 && num > 1) {
      $(".add").css("cursor", "pointer")
      $(numInput).attr("value", num)
      $(".add").css("color", "#777")

    }
    if (num <= 1) {
      $(".minus").css("cursor", "not-allowed")
      $(numInput).attr("value", 1)
      $(".minus").css("color", "#ccc")
      num = 1

    }
    //底部数量
    $(".settle .f-num").text(num)
    let temp = 0
    //是否有意外保
    if ($(accident).is(".red")) {
      temp = temp + 269
    }
    //是否有碎屏保
    if ($(broken).is(".red")) {
      temp = temp + 179
    }
    $(totalPrice).text(
      num * (parseFloat($(".sale-price .sale-price").text()) + temp)
    )
    installm()
  })
  // 总价
  const totalPrice = $(".settle .settle-total .price span")
  const installm = function () {
    const total = Number($(totalPrice).text())
    for (let i = 0; i < installmentLis.length; i++) {
      const cou = parseFloat($(installmentLis[i]).find(".count").text())
      $(installmentLis[i])
        .find(".payment")
        .text((total / cou).toFixed(2))
    }
  }
  // 配件推荐
  const recPrevious = $('.recommend .tab-content .operation-previous')
  const recNext = $('.recommend .tab-content .operation-next')
  const recBox = $('.recommend .tab-content .recommend-wrapper')
  $(recPrevious).css({
    "borderColor": "#ddd",
    "cursor": "not-allowed",
    "color": "#ddd"
  })
  recNext.click(function () {
    let left = $(recBox).css('left');
    left = Number(left.substring(0, left.length - 2))
    console.log(left)
    if (left > -1028) {
      $(recBox).css('left', (left - 257) + 'px')
    } else {
      $(recBox).css('left', '-1028px')
      $(recNext).css({
        "borderColor": "#ddd",
        "cursor": "not-allowed",
        "color": "#ddd"
      })
      $(recPrevious).css({
        "borderColor": "#b3b3b3",
        "cursor": "pointer",
        "color": "#b3b3b3"
      })
    }
  })
  recPrevious.click(function () {
    $(recBox).css('left', '0px')
    $(recPrevious).css({
      "borderColor": "#ddd",
      "cursor": "not-allowed",
      "color": "#ddd"
    })
    $(recNext).css({
      "borderColor": "#b3b3b3",
      "cursor": "pointer",
      "color": "#b3b3b3"
    })
  })
  //详细导航栏详情切换
  const tabsLis = $('.detail-info .tab-item')
  const detailLis = $('.detail-info .detail-content')
  $(tabsLis[0]).css('color', '#000')
  tabsLis.click(function () {
    const curr = $(this).index();
    for (let i = 0; i < detailLis.length; i++) {
      $(detailLis[i]).addClass('none')
      $(tabsLis[i]).css('color', '#999')
    }
    $(detailLis[curr]).removeClass('none')
    $(tabsLis[curr]).css('color', '#000')
  })

})