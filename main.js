let total, shizuKasu, buShizu, buKasu;
let shizuKasuPercent, buShizuPercent, buKasuPercent;
let rate1 = Math.random();
let rate2 = rate1 + ((1 - rate1) * Math.random());

window.onload = function() {
    reset();
    document.getElementById("share_result").innerHTML = "<a href='https://linked34ce.github.io/bushizukasu/&amp;text=%23部しずかすボタン%20【結果】" + makeResult(total, shizuKasu, buShizu, buKasu) + "でした．%20&amp;count=none&amp;lang=ja' target='_blank' rel='noopener'>結果をシェア</a>";
};

function buttonPressed() {
    document.getElementById("display").innerHTML = ship();
    document.getElementById("shizu_kasu").innerHTML = shizuKasu + "回";
    document.getElementById("bu_shizu").innerHTML = buShizu + "回";
    document.getElementById("bu_kasu").innerHTML = buKasu + "回";
    document.getElementById("shizu_kasu_percent").innerHTML = "(" + shizuKasuPercent + "%)";
    document.getElementById("bu_shizu_percent").innerHTML = "(" + buShizuPercent + "%)";
    document.getElementById("bu_kasu_percent").innerHTML = "(" + buKasuPercent + "%)";
    document.getElementById("total").innerHTML = total + "回";
    document.getElementById("share_result").innerHTML = "<a href='https://twitter.com/share?&url=https://linked34ce.github.io/bushizukasu/&amp;text=%23部しずかすボタン%20【結果】" + makeResult(total, shizuKasu, buShizu, buKasu) + "でした．%20&amp;count=none&amp;lang=ja' target='_blank' rel='noopener'>結果をシェア</a>";
}

function ship() {
    let shipping;
    total += 1;
    if (Math.random() < rate1) {
        shizuKasu += 1;
        shipping = "しずかす"
    } else if (Math.random() < rate2) {　　
        buShizu += 1;
        shipping = "部しず"
    } else if (Math.random() < 1) {
        buKasu += 1;
        shipping = "部かす"
    }
    shizuKasuPercent = (Math.round(shizuKasu / total * 10000) / 100).toFixed(2);
    buShizuPercent = (Math.round(buShizu / total * 10000) / 100).toFixed(2);
    buKasuPercent = (Math.round(buKasu / total * 10000) / 100).toFixed(2);
    return shipping;
}

function makeResult(total, shizuKasu, buShizu, buKasu) {
    return "計" + total + "回中，しずかす%3A%20" + shizuKasu + "回%20%28" + shizuKasuPercent + "%25%29，部しず%3A%20" + buShizu + "回%20%28" + buShizuPercent + "%25%29，部かす%3A%20" + buKasu + "回%20%28" + buKasuPercent + "%25%29";
}

function reset() {
    shizuKasu = 0;
    buShizu = 0;
    buKasu = 0;
    total = 0;
    shizuKasuPercent = (0).toFixed(2);
    buShizuPercent = (0).toFixed(2);
    buKasuPercent = (0).toFixed(2);
    rate1 = Math.random();
    rate2 = rate1 + ((1 - rate1) * Math.random());
    document.getElementById("display").innerHTML = "部しずかす<br>ボタン";
    document.getElementById("shizu_kasu").innerHTML = shizuKasu + "回";
    document.getElementById("bu_shizu").innerHTML = buShizu + "回";
    document.getElementById("bu_kasu").innerHTML = buKasu + "回";
    document.getElementById("total").innerHTML = total + "回";
    document.getElementById("shizu_kasu_percent").innerHTML = "(" + shizuKasuPercent + "%)";
    document.getElementById("bu_shizu_percent").innerHTML = "(" + buShizuPercent + "%)";
    document.getElementById("bu_kasu_percent").innerHTML = "(" + buKasuPercent + "%)";
    document.getElementById("share_result").innerHTML = "<a href='https://twitter.com/share?&url=file:///Users/oki_kurihara/Library/Mobile%20Documents/com~apple~CloudDocs/free_programming/bushizukasu/index.html&amp;text=%23部しずかすボタン%20【結果】" + makeResult(total, shizuKasu, buShizu, buKasu) + "でした．%20&amp;count=none&amp;lang=ja' target='_blank' rel='noopener'>結果をシェア</a>";
}
