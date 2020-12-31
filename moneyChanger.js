/*
Buatlah sebuah fungsi bernama `getMoneyChange` yang bertujuan untuk mendapatkan total kembalian dari suatu pembayaran.

Fungsi akan menerima satu input berupa uang yang dibayarkan dan akan menampilkan pesan dengan format `<uang> <jumlah lembaran> lembar`.

Rules
Untuk stok uang kembalian sudah disediakan dalam bentuk `object literal`.
Urutan nilai uang yang ditampilkan adalah dari yang terbesar ke yang terkecil.
Apabila stock uang kembalian tidak mencukupi atau tidak tersedia maka tampilkan `Maaf uang kembalian tidak cukup` dan value dari variabel moneyStocks tidak berkurang.

Notes
Pastikan kode yang kamu buat dinamis sehingga program kamu dapat mengatasi stok uang dan jenis uang kembalian yang dapat diubah nilainya.
*/

function getMoneyChange(money) {
  let moneyStocksTotal = 0;
  let changeUnitTemp = [];
  let countTemp = [];
  let changeUnit = [];
  let count = [];
  let result = ``;

  for (key in moneyStocks){
    changeUnitTemp.push(key);
    countTemp.push(moneyStocks[key]);
  }
  //because it is known that object order is always ascending, we have to swap it to be descending
  for (let i = changeUnitTemp.length - 1; i >= 0; i--){
    changeUnit.push(Number(changeUnitTemp[i]));
    count.push(countTemp[i]);
    moneyStocksTotal += changeUnitTemp[i] * countTemp[i];
  }

  // console.log(moneyStocksTotal);
  
  if (money > moneyStocksTotal){
    console.log(`Maaf uang kembalian tidak cukup`);
  } else {
    // console.log(changeUnit,`changeUnit`);
    // console.log(count,`count`);

    for (let i = 0; i < changeUnit.length; i++){
      // console.log(`${money} money dan ${changeUnit[i]} pecahan ${count[i]} jumlah`)
      if (money >= changeUnit[i] && moneyStocks[changeUnit[i]] > 0){
        let countGiven = Math.floor(money / changeUnit[i]);
        if (countGiven > moneyStocks[changeUnit[i]]){
          countGiven = moneyStocks[changeUnit[i]];
        } 
        money -= countGiven * changeUnit[i];
        result += `${changeUnit[i]} ${countGiven} lembar`;
        if (money !== 0){
          result += `\n`;
        }
        moneyStocks[changeUnit[i]] -= countGiven;
      }
    }
    if (money > 0){
      console.log(`Maaf uang kembalian tidak cukup`);
    } else {
      console.log(result);
    }
  }
  // console.log(`//////////////////////////`);
}
  
  const moneyStocks = {
    100000: 1,
    50000: 2,
    20000: 4,
    10000: 5,
    5000: 5,
    1000: 10,
    500: 5
  }
  
  getMoneyChange(75000)
  /*
    50000 1 lembar
    20000 1 lembar
    5000 1 lembar
  */
  
  getMoneyChange(190000)
  /*
    100000 1 lembar
    50000 1 lembar
    20000 2 lembar
  */
  
  getMoneyChange(190000)
  /*
    Maaf uang kembalian tidak cukup
  */
  
  getMoneyChange(100000)
  /*
    20000 1 lembar
    10000 5 lembar
    5000 4 lembar
    1000 10 lembar
  */
  
  getMoneyChange(400)
  /*
    Maaf uang kembalian tidak cukup
  */
  
  console.log(moneyStocks)
  /*
  { '500': 5,
    '1000': 0,
    '5000': 0,
    '10000': 0,
    '20000': 0,
    '50000': 0,
    '100000': 0 }
  */
  