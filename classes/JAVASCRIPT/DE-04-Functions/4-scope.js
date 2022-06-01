// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//!global scope

let birinci=5;
let ikinci=123;
let ucuncu=2534;
console.log(birinci,ikinci,ucuncu);

const fonksiyon=function(){
    birinci=10;
    let ikinci=256;
    let dorduncu=0;

    console.log(birinci,ikinci,ucuncu,dorduncu)

}

fonksiyon();

console.log(birinci,ikinci,ucuncu);//10 123 2534
