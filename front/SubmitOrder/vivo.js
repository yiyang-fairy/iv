var background = document.querySelector('.background')


// 添加地址信息
function showAddress() {
    var showInfoBox = document.querySelector('.showInfoBox');
    var infoBox = document.querySelector('.infoBox')
    // 添加信息的关闭按钮
    var infoClose = document.querySelector('#infoClose')
    var addressSure = document.querySelector('.addressSure')
    showInfoBox.onclick = function () {
        var scrollTop = document.documentElement.scrollTop;
        infoBox.style.display = 'block'
        background.style.display = 'block'
        document.body.style.overflowY = 'hidden';
        infoBox.style.top = scrollTop + 200 + 'px';
    }
    infoClose.onclick = function () {
        infoBox.style.display = 'none'
        background.style.display = 'none'
        document.body.style.overflowY = '';
    }
    addressSure.onclick = function () {
        infoBox.style.display = 'none'
        background.style.display = 'none'
        document.body.style.overflowY = '';
    }
}
showAddress()

// 判断是否有收货人
function personPass() {
    var personInp = document.querySelector('.personInp').value
    var personP = document.querySelector('.personP')
    if (personInp == '') {
        personP.innerText = "请填写收件人姓名！"
    } else {
        personP.innerText = ""

    }
}
// 判断是否有电话
function phonePass() {
    var phoneInp = document.querySelector('.phoneInp').value;
    var phoneP = document.querySelector('.phoneP')
    if (phoneInp == '') {
        phoneP.innerText = '请输入手机号!'
    } else {
        phoneP.innerText = ''
    }
}
//p判断是否有地址
function addressPass() {
    var addressInp = document.querySelector('.addressInp').value;
    var addressP = document.querySelector('.addressP');
    if (addressInp == '') {
        addressP.innerText = '请填写详细地址！';
    } else {
        addressP.innerText = '';
    }
}
// 判断省份
function sheng() {
    var sheng = document.querySelector('.sheng').value
    var shi = document.querySelector('.shi')
    if (sheng == '请输入') {
        shi.innerHTML = `
            <option>请输入</option>
        `
    } else if (sheng == '四川') {
        shi.innerHTML = `
            <option>成都</option>
            <option>泸州</option>
            <option>遂宁</option>
        `
    } else if (sheng == '贵阳') {
        shi.innerHTML = `
            <option>贵州</option>
            <option>毕节</option>
            <option>六盘水</option>
        `
    } else if (sheng == '广东') {
        shi.innerHTML = `
            <option>惠州</option>
            <option>东莞</option>
        `
    }
}
// 判断市区
function shi() {
    var shi = document.querySelector('.shi').value
    var qu = document.querySelector('.qu')
    if (shi == '成都') {
        qu.innerHTML = `
            <option>东区</option>
            <option>西区</option>
        `
    } else if (shi == '泸州') {
        qu.innerHTML = `
            <option>南区</option>
            <option>北区</option>
        `
    } else if (shi == '遂宁') {
        qu.innerHTML = `
            <option>船山区</option>
            <option>安居区</option>
        `
    } else if (shi == '') { }
}

function showInvoice() {
    // 电子发票
    var invoice = document.querySelectorAll('.invoiceBox>span');
    var riseBox = document.querySelectorAll('.riseBox')
    riseBox[1].style.display = 'none';
    // 点击个人发票时
    invoice[0].onclick = function () {
        riseBox[1].style.display = 'none';
        riseBox[0].style.display = 'block';
        invoice[0].style.border = "1px solid black"
        invoice[1].style.border = "1px solid #ccc"
        // 点击个人发票时，隐藏企业发票中的更多信息盒子
        moreInfo.style.display = 'block'
        moreInfoBox.style.display = 'none'
    }
    // 点击企业发票时
    invoice[1].onclick = function () {
        riseBox[0].style.display = 'none';
        riseBox[1].style.display = 'block';
        invoice[1].style.border = "1px solid black"
        invoice[0].style.border = "1px solid #ccc"
    }
    // 点击填写更多信息时，展示相对应输入框
    var moreInfo = document.querySelector('.moreInfo')
    var moreInfoBox = document.querySelector('.moreInfoBox');
    moreInfo.onclick = function () {
        moreInfo.style.display = 'none'
        moreInfoBox.style.display = 'block'
    }
}
showInvoice()

// 贺卡盒子
//添加贺卡
function showGreet() {
    var addGreet = document.querySelector('#addGreet');
    var addCard = document.querySelector('.addCard')
    var greetCard = document.querySelector('.greetCard');
    var close2 = document.querySelector('.greetCard>p')
    var greetInp = document.querySelector('.greetCard>div>input');
    var clear = document.querySelector('#clear');
    addGreet.onclick = function () {
        var scrollTop = document.documentElement.scrollTop;
        greetCard.style.display = 'block';
        background.style.display = 'block'
        document.body.style.overflowY = 'hidden';
        greetCard.style.top = scrollTop + 100 + 'px';
    }
    close2.onclick = function () {
        greetCard.style.display = 'none';
        background.style.display = 'none'
        document.body.style.overflowY = '';
    }
    addCard.onclick = function () {
        var congratulate = document.querySelector('#congratulate');
        greetCard.style.display = 'none';
        background.style.display = 'none'
        document.body.style.overflowY = '';
        congratulate.innerText = greetInp.value;
    }
    clear.onclick = function () {
        greetInp.value = '';
    }
}
showGreet()
// 添加站外券
function showCoupons() {
    var coupons = document.querySelector('#coupons');
    var couponsBox = document.querySelector('.couponsBox')
    var close = document.querySelector('.close');
    coupons.onclick = function () {
        var scrollTop = document.documentElement.scrollTop;

        document.body.style.overflowY = 'hidden';
        couponsBox.style.display = 'block';
        background.style.display = 'block';
        couponsBox.style.top = scrollTop + 200 + 'px';
        // 关闭站外券时的操作
        close.onclick = function () {
            document.body.style.overflowY = '';
            background.style.display = 'none';
            couponsBox.style.display = 'none';
        }
    }

}
showCoupons()
// 优惠券输入款失去焦点
function check() {
    var inputValue = document.querySelector('.couponsBox>input').value
    var divBox = document.querySelector('.couponsBox>div')
    if (inputValue != '') {
        divBox.style.background = 'red'
    }
}
// 优惠券确定操作
function checkOver() {
    var inputValue = document.querySelector('.couponsBox>input')
    var background = document.querySelector('.background')
    var couponsBox = document.querySelector('.couponsBox')
    background.style.display = 'none';
    couponsBox.style.display = 'none';
    document.body.style.overflowY = '';
    inputValue.innerText = "";
}
