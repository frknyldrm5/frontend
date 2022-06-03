//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

// const diziIsaretliTopla = (dizi) => {
//   let sumP = 0,
//     sumN = 0;
//   for (let i = 0; i < dizi.length; i++) {
//     if (dizi[i] > 0) {
//       sumP += dizi[i];
//     } else {
//       sumN += dizi[i];
//     }
//   }
//   return "Negatiflerin Toplami=" + sumN + " Pozitiflerin Toplami=" + sumP;
// };

// const koordinatlar = [120, 100, -100, 220, 330, -40];
// console.log(diziIsaretliTopla(koordinatlar));

//*FOR IN
const diziIsaretliTopla = (dizi) => {
    let sumP = 0,
      sumN = 0;
    for (let i in dizi) {
      if (dizi[i] > 0) {
        sumP += dizi[i];
      } else {
        sumN += dizi[i];
      }
    }
    return "Negatiflerin Toplami=" + sumN + " Pozitiflerin Toplami=" + sumP;
  };
  
  const koordinatlar = [120, 100, -100, 220, 330, -40];
  console.log(diziIsaretliTopla(koordinatlar));
  
  
  
  
  //* ======================================================
  //*                   FOR IN LOOP
  //* ======================================================
  
  //*-------------------------------------------------------
  //* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
  //* bir dizide saklandığı varsayalım.Bu hayvanları türüne
  //* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
  //*  ana programa döndürecek fonksiyonu yazınız. Eğer o
  //* türden bir hayvan yok ise bulunamadığını yazdırsın.
  //*--------------------------------------------------------
  
  // const findAnimal=(animals,userAnimal)=>{
  // let counter=0;
  // for(let i in animals)
  // {if(animals[i]==userAnimal)
  // {counter++;}
  // }
  // if(counter==0)
  // return `sorry we have not, ${userAnimal}`
  // else
  // return `We have  ${counter} ${userAnimal}`
  
  
  // }
  
  // const animals=["elephant","camel","bird","camel","bird","camel","mouse"];
  
  // const userAnimal=prompt("Please enter your animals").toLowerCase();
    
  // alert( findAnimal(animals, userAnimal));
  
  //* ======================================================
  //*                   FOR OF LOOP
  //* ======================================================
  
  //* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
  
  //*dizinin elemanlarını yanyana yazdır
  
  
  let araclar=["BMW", "Volvo", "Mini"];
  let yazdir="";
  
  for(let arac of araclar)
  yazdir=yazdir+arac+ " ";
  
  console.log(yazdir);
  
  //*iv=dizinin her bir elemanı
  
  //* ======================================================
  //*                   FOREACH METHOD
  //! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined)
  
  //*======================================================
  
  //*-------------- ÖRNEK -------------------
  const prices = [100, 250, 50, 89];
  
  let toplam=0;
  
  // let forEach= prices.forEach((p)=> (console.log(p)))
  let forEach= prices.forEach((p)=> (toplam+=p))
  
  console.log(toplam);
  console.log(prices);
  console.log(forEach);

  
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> prices dizisidir.
let sum=0;
prices.forEach((p,i,prices)=>
{sum += p;
  console.log(`${i}. toplam ${sum}`);
 
  prices[i]=p+10;
}


)
console.log(prices);


//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp ve bunu döndürebilir
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names = ["Ahmet", "mehmet", "ismet", "SAFFET", "Can", "Canan", "Cavidan"];
let bigName=  names.map((isim)=> isim.toUpperCase())
console.log(bigName, names);

//*2yol  tek tek yazdıralım
names.map((x)=>x.toLowerCase()).forEach((X)=>console.log(X))

//*örnek
//* prices dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
//* %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar aşağıdaki formatta saklanmak isteniyor.
//* 1. ürünün zamlı fiyati 110 TL gibi
prices.map((p, i, price) => {
  if (p < 250) {
    price[i] = p * 1.1;
  }
  price[i] = p * 1.2;
  return prices;
});
console.log(prices);