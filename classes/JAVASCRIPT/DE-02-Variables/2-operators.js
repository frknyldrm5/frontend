// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;


// Bir arttır
toplamFiyat++
console.log(toplamFiyat);

// 10 arttır
toplamFiyat+=
console.log(toplamFiyat);

//? + operatörü String Concatination işlemi de yapar.
const ad = "ahmet";
const soyAd = "Can";
console.log(ad + " " + soyAd);

//* String Concatination// ----bir number ve string toplami yapilirsa   concatination yapar
const s1 = 5,
  s2 = "3";
  console.log(s1+s2);


  //* cikarma yapar (string ve number da cikarma islei uygulanir )

  console.log(s1-s2)
  console.log(s2-s1)

  const s3="iki"

  const sonuc=s2- s3;
  console.log(sonuc) //NaN not a number

  const dogumTarihi=1998;
  const isim="Furkan";

  console.log(isim + " " + (2022-dogumTarihi) + " " + "yasindadir.")

  //! Template literals

  console.log(`${isim} ${2022-dogumTarihi} yasindadir.`);

  //*ARTTIRMA--AZALMA 

  let a=5;

  console.log(a++);
  console.log(a);
  console.log(++a);
  console.log(a);

  console.log('**************')

  let b=5;
  console.log(b--); //5 b=4
  console.log(b);   //4
  console.log(--b); //3 b=3
  console.log(b); //3

  console.log('***************');
  let d=--b; // d=2 b=2
  console.log(d); //2
  console.log(b); //2

  d=b--;          //b=1
  console.log(d); //d=2
  console.log(b); //b=1

  d+=5;
  console.log(d);

  //e nin 10 katini al

  let e=5;
  e*=10;
  console.log(e);

  // * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi1=4;
 
console.log(sayi1==4); //true
console.log(sayi1=="4"); //true
console.log(sayi1==="4"); 

console.log(sayi1!=5); //true
console.log(sayi1!="5"); //true
console.log(sayi1>5); //false
console.log(sayi1<=5); //true



 //* ÇAPRMA VE ÜS ALMA
//*--------------------------------------
const pi = 3.14;
const r = 3;
const alan = pi * r ** 2; //?Us alma (**)
const cevre = 2 * pi * r;
console.log(`ÇEVRE: ${cevre} ALAN:${alan}`);
  


//*------------ MOD ALMA-------------------*/ 

const number=456;

const birler=number%10;
const onlar=Math.floor(number/10)%10;
const yuzler=Math.ceil(number/100);

console.log(birler,onlar,yuzler);

//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

// * =======================================================
// *                 MANTIKSAL OPERATÖRLER
// * =======================================================

//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false


const v1= false || 0 || 12.6 ||true || false || null;
console.log(v1); //12.6-- bulduğu ilk true değeri döndürür

const v2= false || 0 || null || undefined || NaN;
console.log(v2); // NaN-- cevap false olacaksa son falsy değeri döndürür

const v3= 5 && true && true && 0 && "";
console.log(v3) //0-- ilk buldugu falsy degeri dondurur

const v4=6 && true && 15.5 && 7;
console.log(v4);

//!DEGIL !

const v5=true;
const v6=7;
console.log(!v5,!v6)

// * ===================================
// * TIP DONUSUMLERI
// * ==================================

const para=Number("1000")+Number("900");
console.log(para);

// number yerine alternatif parseInt te kullanilabilir
// console.log(parseInt(para));

console.log(Number("")); //0
console.log(Number(null)); //0