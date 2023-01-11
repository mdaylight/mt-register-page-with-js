// 其他功能
// 获取短信验证码（此功能需要第三方服务，预留）
function GetSmscode() {
    alert("该功能暂未实现");
}

// 依赖Blur事件的功能
// 检查输入框并给出提示
// 检查电话号码
function CheckTel(str) {
    let telstr = str.value;
    let wartel = document.querySelector("#u-waring-tel");
    let wartellen = document.querySelector("#u-waring-tel-num");
    if (str.value == "") {
        wartel.style.display = "inline-block";
        wartellen.style.display = "none";
    } else if (telstr.length < 11 || telstr.length > 11 || telstr.value != [0-9]) {
        wartel.style.display = "none";
        wartellen.style.display = "inline-block";
    } else {
        wartel.style.display = "none";
        wartellen.style.display = "none";
    }
}

// 检查短信验证码
function CheckSmscode(str) {
    let smsstr = str.value;
    let warsmscode = document.querySelector("#u-waring-smscode");
    let warsmscodelen = document.querySelector("#u-waring-smscode-num");
    if (str.value == "") {
        warsmscode.style.display = "inline-block";
        warsmscodelen.style.display = "none";
    } else if (smsstr.length < 4 || smsstr.length > 4) {
        warsmscode.style.display = "none";
        warsmscodelen.style.display = "inline-block";
    } else {
        warsmscode.style.display = "none";
        warsmscodelen.style.display = "none";
    }
}

// 检查密码
function CheckPassword(str) {
    let passstr = str.value;
    let warpass = document.querySelector("#u-waring-passwd");
    let warpasslen = document.querySelector("#u-waring-passwd-length");
    if (str.value == "") {
        warpass.style.display = "inline-block";
        warpasslen.style.display = "none";
    } else if (passstr.length < 8) {
        warpass.style.display = "none";
        warpasslen.style.display = "inline-block";
    } else {
        warpass.style.display = "none";
        warpasslen.style.display = "none";
    }
}

// 检查确认密码
function CheckCPassword(str) {
    let warcpass = document.querySelector("#u-waring-confirm-passwd");
    if (str.value == "") {
        warcpass.style.display = "inline-block";
    } else {
        warcpass.style.display = "none";
    }
}

// 依赖Input事件的功能
// 密码输入框相等性检查
// passwd1n => 设置密码框 passwd2n => 重复密码框
function ComparePassword(str) {
    let passwd1 = document.querySelector("#password");
    let passwd1n = passwd1.value;
    let passwd2n = str.value;
    let warcapass = document.querySelector("#u-waring-confirm-passwd-val");
    if (passwd1n != passwd2n && passwd2n.length != 0) {
        warcapass.style.display = "inline-block";
    } else {
        warcapass.style.display = "none";
    }
}

//检查密码长度并给出强度反馈
function CheckPassLength(pstr) {
    let ppstr = pstr.value;
    let pweak = document.querySelector("#p-weak");
    let pnormal = document.querySelector("#p-normal");
    let pstrong = document.querySelector("#p-strong");
    if (ppstr.length == 0) {
        pweak.style.background = "";
        pnormal.style.background = "";
        pstrong.style.background = "";
    } else if (ppstr.length <= 8) {
        pweak.style.background = "#FF2D00";
        pweak.style.color = "#FFFFFF";
        pnormal.style.background = "";
        pstrong.style.background = "";
    } else if (ppstr.length <= 12) {
        pweak.style.background = "#FFB900";
        pweak.style.color = "#FFFFFF";
        pnormal.style.background = "#FFB900";
        pnormal.style.color = "#FFFFFF";
        pstrong.style.background = "";
    } else {
        pweak.style.background = "#42BB2D";
        pweak.style.color = "#FFFFFF";
        pnormal.style.background = "#42BB2D";
        pnormal.style.color = "#FFFFFF";
        pstrong.style.background = "#42BB2D";
        pstrong.style.color = "#FFFFFF";
    }
}