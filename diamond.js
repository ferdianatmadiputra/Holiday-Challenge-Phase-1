/*
Buatlah sebuah function bernama `diamond` yang menerima satu parameter berupa number.
function `diamond` akan membuat sebuah belah ketupat dengan simbol `$` dimana tinggi dari belah ketupat ditentukan berdasarkan parameter number yang diterima.

NOTE: Perhatikan pola untuk menentukan tinggi belah ketupat!!

Contoh untuk input 3:
```javascript
  $
 $ $
$   $  i = 2 j = 4
 $ $   i = 3 j = 3
  $    i = 4 j = 2
```

Contoh untuk input 4:
```javascript
   $   
  $ $
 $   $  
$     $ i = 3  j = 6  i + j = 9
 $   $  i = 4  j = 5  
  $ $   i = 5  j = 4
   $   
```

Contoh untuk input 6:
```javascript
     $     
    $ $    
   $   $   
  $     $  
 $       $
$         $
 $       $    i = 6 j = 9   i + j = 15
  $     $     i = 7 j = 8
   $   $   
    $ $    
     $     
```

contoh untuk input 10:
```javascript
         $       
        $ $      
       $   $     
      $     $    
     $       $   
    $         $  
   $           $
  $             $
 $               $
$                 $
 $               $
  $             $
   $           $      i = 12   j = 15 i + j = 27
    $         $  
     $       $   
      $     $    
       $   $     
        $ $      
         $        
*/
function diamond(num){
  let result = ``;
  
  for (let i = 0; i < (num * 2) - 1; i++){
    for (let j = 0; j < (num * 2) - 1; j++){
      if ( i + j === num - 1 || i - j === num - 1 || i + j === (num - 1) * 3|| j - i === num - 1 ){
      result += `$`;
      } else {
        result += ` `;
      }
    }
    console.log(result);
    result = ``;
  }
}
diamond(3);
diamond(4);
diamond(5);
diamond(6);
diamond(10);

/// i = 5 j = 4

/*
num = 3
  $
 $ $
$   $  i = 2 j = 4
 $ $   i = 3 j = 3
  $    i = 4 j = 2

num = 5
    $    
   $ $   
  $   $ 
 $     $ 
$       $
 $     $    i = 5 j = 7
  $   $     i = 6 j = 6
   $ $      i = 7 j = 5
    $       i = 8 j = 4


*/