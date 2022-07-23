"use strict";
// Jumlah pertanyaan
let numberOfQuestion = 7;

// Penunjuk pertanyaan
let questionCounter = 0;

// List pertanyaan
let greetings = 'Tolong masukkan ';
let questionArray = [
    ` ${greetings} kata kerja `, 
    ` ${greetings} kata kerja `, 
    ` ${greetings} nama bunga `, 
    ` ${greetings} kata kerja `, 
    ` ${greetings} nama hewan `, 
    ` ${greetings} teman / orang tua / pacar `, 
    ` ${greetings} kata kerja `,
    ` ${greetings} nama tumbuhan `
];

// Array digunakan untuk menyimpan input dari pengguna
let userInputs = [];
// Looping dimana tiap loopingnya, pengguna diminta memasuukan kata-kata
for (let i = numberOfQuestion; i >= 0; i--) {
    console.log(
      questionArray[questionCounter] + `... tersisa (${numberOfQuestion} pertanyaan)`
    );
    
    // Di bawah ini, user mendapat perintah
    input = prompt(
        questionArray[questionCounter] + `... tersisa (${numberOfQuestion} pertanyaan)`
      )
    
    // Input user akan dicek, jika null, maka akan dimasukkan kalimat bahwa user tidak memasukkan kata
    if(input != null)
        userInputs.push(input);
    else
         userInputs.push("User tidak memasukkan apapun);
    console.log(userInputs);
    questionCounter++;
    numberOfQuestion--;
  }
        
let originalStory = `<h3>Seorang laki-laki melihat ${userInputs[0]} besar yang terjepit batu. Ular itu tidak bisa melepaskan badannya. 
    Laki-laki itu lalu ${userInputs[1]} batunya agar ular bisa melepaskan diri. Setelah batu diangkat, ular Iangsung melilit tubuh 
    laki-laki itu hendak memangsanya. </h3>
    <h3>“Tunggu! Mengapa kau lakukan itu? Bukankah aku telah menolongmu?” kata si Laki-laki.
    “Aku lapar dan tidak ada salahnya aku memangsamu,” kata ular yang tak tahu membalas budi.“Kau jangan makan aku sekarang. 
    Kita tanyakan dulu ${userInputs[2]} kita pada binatang yang bijaksana,” kata si laki-laki kepada ular.</h3>
    <h3>Lalu, mereka berjalan dan bertemu ${userInputs[3]}.“Apakah pantas ular ingin memangsaku? Padahal, aku sudah melepaskannya dari impitan batu,” tanya si laki-laki 
    kepada hyena. Hyena berpikir, jika memihak ular, ia bisa ikut menikmati daging laki-laki itu. Hyena pun menjawab, “Tidak ada salahnya.”
    Mendengar jawaban hyena, ular hendak ${userInputs[4]} si laki-laki. Tiba-tiba, laki-laki itu berkata, “Tunggu dulu, kita tanya pada 
    binatang yang lain.”</h3>
    <h3>Mereka lalu bertemu ${userInputs[5]}. “Apakah pantas Ular ingin memangsaku? Padahal, aku sudah meIepaskannya dari impitan 
    batu,” tanya si laki-laki kepada serigala.Serigala menjawab, “Aku tidak percaya seekor ular bisa terimpit batu. Coba kau tunjukkan 
    aku bagaimana kejadiannya.” Mereka bertiga pergi ke tempat semula.</h3>
    <h3>Serigala berkata, “Coba kau kembali ke tempatmu.” Ular kembali ke 
    tempatnya. Lalu, si laki-laki ${userInputs[6]} ular dengan batu. Ternyata benar, ular terlihat tidak bisa melepaskan dirinya. Si laki-laki 
    hendak melepaskan ular kembali. “Jangan ${userInputs[7]}!” kata serigala. “Ular itu akan memangsamu. Biarkan dia di situ,” ucap serigala kembali.</h3>`
console.log(originalStory);

alert(
    "Pertanyaan habis! Ini adalah cerita yang telah Anda `akurasikan`"
  );

  // Output
  console.log(originalStory);
  document.write(originalStory);

/*
Seorang laki-laki melihat seekor ular besar yang terjepit batu. Ular itu tidak bisa melepaskan badannya. 
Laki-laki itu lalu mengangkat batunya agar ular bisa melepaskan diri. Setelah batu diangkat, ular Iangsung melilit tubuh 
laki-laki itu hendak memangsanya. “Tunggu! Mengapa kau lakukan itu? Bukankah aku telah menolongmu?” kata si Laki-laki.
“Aku lapar dan tidak ada salahnya aku memangsamu,” kata ular yang tak tahu membalas budi.“Kau jangan makan aku sekarang. 
    Kita tanyakan dulu masalah kita pada binatang yang bijaksana,” kata si laki-laki kepada ular. Lalu, mereka berjalan dan 
    bertemu hyena.“Apakah pantas ular ingin memangsaku? Padahal, aku sudah melepaskannya dari impitan batu,” tanya si laki-laki 
    kepada hyena. Hyena berpikir, jika memihak ular, ia bisa ikut menikmati daging laki-laki itu. Hyena pun menjawab, “Tidak ada salahnya.”
    Mendengar jawaban hyena, ular hendak mencaplok si laki-laki. Tiba-tiba, laki-laki itu berkata, “Tunggu dulu, kita tanya pada 
    binatang yang lain.” Mereka lalu bertemu serigala. “Apakah pantas Ular ingin memangsaku? Padahal, aku sudah meIepaskannya dari impitan 
    batu,” tanya si laki-laki kepada serigala.Serigala menjawab, “Aku tidak percaya seekor ular bisa terimpit batu. Coba kau tunjukkan 
    aku bagaimana kejadiannya.” Mereka bertiga pergi ke tempat semula. Serigala berkata, “Coba kau kembali ke tempatmu.” Ular kembali ke 
    tempatnya. Lalu, si laki-laki mengimpit ular dengan batu. Ternyata benar, ular terlihat tidak bisa melepaskan dirinya. Si laki-laki 
    hendak melepaskan ular kembali. “Jangan dilepas!” kata serigala. “Ular itu akan memangsamu. Biarkan dia di situ,” ucap serigala kembali.
*/
