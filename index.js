function tinhluong () {
    var tienluong;
    tienluong = document.getElementById("ngay-cong").value * 100000;
    document.getElementById("tienluong").innerHTML = `<h3 class="text-success"> Tiền lương được nhận: <mark>${new Intl.NumberFormat('vn-VN').format(tienluong)} VNĐ </mark> </h3>`
}
function trungbinh () {
    var trungbinh;
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;
    var so4 = document.getElementById("so4").value * 1;
    var so5 = document.getElementById("so5").value * 1;
    trungbinh = ( so1 + so2 + so3 + so4 + so5 ) / 5;
    document.getElementById("trungbinh").innerHTML = `<h3 class="text-success"> Giá trị trung bình là: <mark>${trungbinh}</mark> </h3>`
}
function quydoi () {
    var vnd;
    vnd = document.getElementById("usd").value * 23500;
    document.getElementById("quydoi").innerHTML = `<h3 class="text-success"> Số tiền quy đổi: <mark>${new Intl.NumberFormat('vn-VN').format(vnd)} VNĐ </mark> </h3>`
}
function cvdt () {
    var canh1 = document.getElementById("canh1").value * 1;
    var canh2 = document.getElementById("canh2").value * 1;
    var chuvi = canh1 * 2 + canh2 * 2;
    var dientich = canh1 * canh2;
    document.getElementById("cvdt").innerHTML = `<h3 class="text-success"> Chu vi: <mark>${chuvi}</mark> - Diện tích: <mark>${dientich}</mark></h3>`
}
function tongkyso () {
    var socantinh = document.getElementById("socantinh").value * 1;
    var tongkyso
    if (socantinh >= 10 && socantinh <= 99) {
        tongkyso = socantinh%10 + Math.floor(socantinh/10);
        document.getElementById("tongkyso").innerHTML = `<h3 class="text-success"> Tổng các ký số: <mark>${tongkyso}</mark> </h3>`;
        }
        else  {
        document.getElementById("tongkyso").innerHTML = `<h3 class="text-danger"> Số nhập chưa đúng </h3>`;
        }
}