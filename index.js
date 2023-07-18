function tinhluong () {
    var tienluong;
    tienluong = document.getElementById("ngay-cong").value * 100000;
    console.log(tienluong);
}
function trungbinh () {
    var trungbinh;
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;
    var so4 = document.getElementById("so4").value * 1;
    var so5 = document.getElementById("so5").value * 1;
    trungbinh = ( so1 + so2 + so3 + so4 + so5 ) / 5;
    console.log(trungbinh);
}
function quydoi () {
    var vnd;
    vnd = document.getElementById("usd").value * 23500;
    console.log(vnd);
}
function cvdt () {
    var canh1 = document.getElementById("canh1").value * 1;
    var canh2 = document.getElementById("canh2").value * 1;
    var cv = canh1 * 2 + canh2 * 2;
    var dt = canh1 * canh2;
    console.log(cv);
    console.log(dt);
}
function tongkyso () {
    var socantinh = document.getElementById("socantinh").value * 1;
    var tongkyso
    if (socantinh >= 10 && socantinh <= 100) {
        tongkyso = socantinh%10 + Math.round(socantinh/10)
        console.log(tongkyso);}
        else  {
        console.log("sai rồi bại êi")
        }
                
}