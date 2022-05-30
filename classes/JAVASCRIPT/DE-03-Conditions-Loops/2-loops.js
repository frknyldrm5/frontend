// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

for(let i=1; i<=10; i++){

    console.log("MERHABA" , i );
   }
   
   //* 1 den N e kadar olan tamsayıların toplamını bulan kodu yazınız
   
   const n =   +prompt("N için kullanılacak sayıyı giriniz");
   let sayi=0;
   for (let i=1; i <= n ; i++) {
   
    sayi=sayi+i;
    //console.log(sayi);
   }
   console.log(sayi);