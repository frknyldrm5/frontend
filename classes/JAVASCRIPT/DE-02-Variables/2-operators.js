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

  