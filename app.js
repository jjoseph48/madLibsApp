"use strict";

let numberOfQuestion = 8;

let questionCounter = 0;

let questionArray = ["Masukkan kata kerja :", "Masukkan kata benda :", "Masukkan nama tempat :", 
    "Masukkan kata benda :", "Masukkan kata kerja :", "Masukkan nama hewan :", "Masukkan nama orang :";
    "Masukkan kata jabatan :"];
    
let userInputs = [];
for (let i = numberOfQuestion; i >= 0; i--){
    console.log(
        questionArray[questionCounter] + ' ... You have (${questiotnTotal} questions left)
        );
        userInputs.push(
            prompt(
                questionArray[questionCounter] + ' ... You have (${questiotnTotal} questions left)
            )
        );
        console.log(userInputs);
        questionCounter++;
        numberOfQuestion--;
}
        

let originalStory = `Seorang laki-laki melihat ${userInputs[x]} besar yang terjepit batu. Ular itu tidak bisa melepaskan badannya. 
    Laki-laki itu lalu ${userInputs[x]} batunya agar ular bisa melepaskan diri. Setelah batu diangkat, ular Iangsung melilit tubuh 
    laki-laki itu hendak memangsanya. “Tunggu! Mengapa kau lakukan itu? Bukankah aku telah menolongmu?” kata si Laki-laki.
    “Aku lapar dan tidak ada salahnya aku memangsamu,” kata ular yang tak tahu membalas budi.“Kau jangan makan aku sekarang. 
    Kita tanyakan dulu ${userInputs[x]} kita pada binatang yang bijaksana,” kata si laki-laki kepada ular. Lalu, mereka berjalan dan 
    bertemu ${userInputs[x]}.“Apakah pantas ular ingin memangsaku? Padahal, aku sudah melepaskannya dari impitan batu,” tanya si laki-laki 
    kepada hyena. Hyena berpikir, jika memihak ular, ia bisa ikut menikmati daging laki-laki itu. Hyena pun menjawab, “Tidak ada salahnya.”
    Mendengar jawaban hyena, ular hendak ${userInputs[x]} si laki-laki. Tiba-tiba, laki-laki itu berkata, “Tunggu dulu, kita tanya pada 
    binatang yang lain.” Mereka lalu bertemu ${userInputs[x]}. “Apakah pantas Ular ingin memangsaku? Padahal, aku sudah meIepaskannya dari impitan 
    batu,” tanya si laki-laki kepada serigala.Serigala menjawab, “Aku tidak percaya seekor ular bisa terimpit batu. Coba kau tunjukkan 
    aku bagaimana kejadiannya.” Mereka bertiga pergi ke tempat semula. Serigala berkata, “Coba kau kembali ke tempatmu.” Ular kembali ke 
    tempatnya. Lalu, si laki-laki ${userInputs[x]} ular dengan batu. Ternyata benar, ular terlihat tidak bisa melepaskan dirinya. Si laki-laki 
    hendak melepaskan ular kembali. “Jangan ${userInputs[x]}!” kata serigala. “Ular itu akan memangsamu. Biarkan dia di situ,” ucap serigala kembali.`
console.log(originalStory);


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
