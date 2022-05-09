$('.addarticle').click(() => {
    article = `<div class="attribute" style="height:50px;">
    <div class="container">
        <div class="item checkbox">
            <input class="form-check-input" type="checkbox" value="" id="check" onclick="getcheckcnt();">
        </div>
        <div class="item name">
            <input style="border:none; width:95%;">
        </div>
        <div class="item del" onclick="javascript:delarticle(this);">
            <span class="glyphicon glyphicon-trash"></span>
        </div>
    </div>
</div>`
    $('.list').append(article);
    getcheckcnt();
})

let today = new Date();
const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
let year = today.getFullYear();
let month = today.getMonth() + 1
let date = today.getDate();
$('.date').text(year + "년 " + month + "월 " + date + "일");
$('.weekday').text(WEEKDAY[today.getDay()] + "요일");

function getcheckcnt() {
    $('.left-work').text("할 일 " + ($('.checkbox').length - $('#check:checked').length) + "개 남음");
}

function delarticle(elm) {
    $(elm).parent().parent().remove();
    getcheckcnt();
}