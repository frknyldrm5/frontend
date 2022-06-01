// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması

function yazdir(){
    console.log("osman");
}
yazdir();//call veya invoke
yazdir();

//* Örnek2:
//****************************************************************/


function adYazdir(ad,ikinci,soyad){
    console.log(ad,ikinci,soyad);
}
adYazdir("Ferhat","Nuri","Ozturk")


//* Örnek2:
//****************************************************************/
//declaration

function yasHesapla(ad,dogumTarihi){

    const yas=2022-dogumTarihi;
    console.log(`Benim adim ${ad} ve ben ${yas} yasindayim.`)
    return yas;



}
const mehmet=yasHesapla("Mehmet",1990);
const recep=yasHesapla("Recep",1980);
const nurbaki=yasHesapla("Nurbaki",1985);

console.log("3 arkadasin yaslari ortalamasi",((mehmet+recep+nurbaki)/3));

//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.

//teksayi, ciftsayi kontrol fonksiyonu

//teksayı, çift sayı kontrol fonksiyonu

const a=tekCiftSayi(5);
console.log(a);
console.log(tekCiftSayi(4)); 


function tekCiftSayi(x){

 return x%2==1 ?`${x} sayisi tektir` : ` ${x} sayisi cifttir`
}
    

