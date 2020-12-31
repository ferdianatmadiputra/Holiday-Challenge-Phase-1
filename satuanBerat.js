/*
Satuan berat adalah ukuran yang dipakai untuk mengukur berat, jenus satuan berat tsb adalah sbb :

keterangan :
1 ton = 10 kw = 1000 kg
1 kw = 100 kg
1 kg = 1000 mg
1 kg = 10 ons    
1 ons  = 1 hg

Buatlah sebuah function bernama 'convertWeight' (NAMA FUNCTION HARUS SAMA) yang akan menerima 2 parameter. Parameter tsb adalah :
soal pertambahan satuan berat berupa string, contoh : '1 ton +10 ons+2 kwintal'
tujuan akhir konversi yang diinginkan, contoh : 'kg'

DILARANG hardcode ! misalnya : 
di-hardcode satu per satu konversinya, ton ke kwintal dikali 10, ton ke kg dikali 1000, ton ke gr dikali 10000, dll. pikirkan cara agar bisa dinamis tanpa di hardcode. 

*/


function convertWeight(summation, unitWeight){
  let tempUnit = ``;
  let tempNumber = ``;
  let unitType = [`ton`, 'kwintal', 'reserved','kg','ons', 'dag','g','dg','cg','mg'];
  let indexUnitWeight = 0;
  let indexForSum = 0;
  let resultNumber = 0;

  for (let i = 0; i < unitType.length; i++){
      if (unitWeight === unitType[i]){
          indexUnitWeight = i;
      }
  }
  for (let i = 0; i < summation.length; i++){
    let alphabets = /[A-z]/;
    let numbers = /[0-9]/;

    if (alphabets.test(summation[i])){
      tempUnit += summation[i];
    } else if (numbers.test(summation[i])){
      tempNumber += summation[i];
    }

    if (summation[i] === `+` || i === summation.length - 1){
      for (let i = 0; i < unitType.length; i++){
        if (tempUnit === unitType[i]){
          indexForSum = i;
        break;
        }
      }
      // console.log(indexUnitWeight,`indexunitweight`);
      // console.log(indexForSum,`indexforsum`);
      resultNumber += tempNumber * (10 ** (indexUnitWeight - indexForSum));
      // console.log(resultNumber);
      tempNumber = 0;
      tempUnit = ``;
    }
  }

  return `${resultNumber} ${unitWeight}`;
}
  
  console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg
  
  console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g
  
  console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg
  