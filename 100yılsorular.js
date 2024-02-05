let questions = [
    {
        question: "<span>''Ey yükselen yeni <u>nesil!</u> İstikbal sizsiniz. Cumhuriyeti biz kurduk, onu ila ve idame edecek sizsiniz.''</span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Aynı kuşaktan olan kimse.", "Kuşak", "Üstün nitelikli, değerli olan.", "Doğru, düzgün."], // ! Nesil
        correct: "Kuşak"
    },
    {
        question: "<span>''Ey yükselen yeni nesil! <u>İstikbal</u> sizsiniz. Cumhuriyeti biz kurduk, onu ila ve idame edecek sizsiniz.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Bugünden sonra gelecek ilk gün.", "Olgun", "Gelecek", "Çalışkan"], // ! İstikbal
        correct: "Gelecek"
    },
    {
        question: "<span>''Ey yükselen yeni nesil! İstikbal sizsiniz. Cumhuriyeti biz kurduk, onu ila ve <u>idame</u> edecek sizsiniz.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Yönetimsel", "İdare yönünden, idare tarafından.", "Büyütme, geliştirme.", "Sürdürme, devam ettirme."], // ! İdame
        correct: "Sürdürme, devam ettirme."
    },
    {
        question: "<span>''Cumhuriyetimiz öyle zannolunduğu gibi zayıf değildir. Cumhuriyet bedava da kazanılmış değildir. Bunu elde etmek için kan döktük. Her tarafta kırmızı kanımızı akıttık. <u>İcabında</u> müesseselerimizi müdafaa için lâzım olanı yapmaya hazırız.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Buluş", "Gerekme durumu.", "Neden olunan şey.", "Belirli bir iş için materyal."], // ! İcabında
        correct: "Gerekme durumu."
    },
    {
        question: "<span>''Cumhuriyetimiz öyle zannolunduğu gibi zayıf değildir. Cumhuriyet bedava da kazanılmış değildir. Bunu elde etmek için kan döktük. Her tarafta kırmızı kanımızı akıttık. İcabında <u>müesseselerimizi</u> müdafaa için lâzım olanı yapmaya hazırız.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Konut,daire.", "Kurum", "Eğitim görülen alan.", "Ortak amacı gerçekleştirmek için kurulan topluluk."], // ! Müessese
        correct: "Kurum"
    },
    {
        question: "<span>''Cumhuriyetimiz öyle zannolunduğu gibi zayıf değildir. Cumhuriyet bedava da kazanılmış değildir. Bunu elde etmek için kan döktük. Her tarafta kırmızı kanımızı akıttık. İcabında müesseselerimizi <u>müdafaa</u> için lâzım olanı yapmaya hazırız.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Savunma", "Devam ettirme, süreklilik.", "Egemenlik.", "Şeref, saygı."], // ! Müdaafa
        correct: "Savunma"
    },
    {
        question: "<span>''Benim <u>naçiz</u> vücudum nasıl olsa bir gün toprak olacaktır. Fakat Türkiye Cumhuriyeti ebediyen yaşayacaktır.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Nadir, seyrek", "Önemli, değerli", "Layık olmayan.", "Değersiz, önemsiz olan."],
        correct: "Değersiz, önemsiz olan."
    },
    {
        question: "<span>''Benim naçiz vücudum nasıl olsa bir gün toprak olacaktır. Fakat Türkiye Cumhuriyeti <u>ebediyen</u> yaşayacaktır.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Uzun süre.", "Belirli bir sürece, sınırlı.", "Belirli bir zaman sonra.", "Sonsuz olarak, sonsuzluğa kadar."],
        correct: "Sonsuz olarak, sonsuzluğa kadar."
    },
    {
        question: "<span>''Türkiye Cumhuriyeti <u>mesut</u>, muvaffak ve muzaffer olacaktır.   '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Doğru, düzgün", "Kazanmış, galip.", "Mutlu", "Sıkıntısız, dertsiz."],
        correct: "Mutlu"
    },

    {
        question: "<span>''Türkiye Cumhuriyeti mesut, <u>muvaffak</u> ve muzaffer olacaktır.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Başarmış, başarılı.", "Yeterli", "Galip", "Ders almış, hatalarından ders çıkarmış."],
        correct: "Başarmış, başarılı."
    },
    {
        question: "<span>''Türkiye Cumhuriyeti mesut, muvaffak ve <u>muzaffer</u> olacaktır.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Yenilmez", "Bir mücadelede üstünlük kazanmış, üstün.", "Güçlü", "Başarılı"],
        correct: "Bir mücadelede üstünlük kazanmış, üstün."
    },
    {
        question: "<span>''Cumhuriyet <u>rejimi</u> demek, demokrasi sistemi ile devlet şekli demektir. Biz Cumhuriyeti kurduk, o on yaşını doldururken demokrasinin bütün icaplarını sırası geldikçe uygulamaya koymalıdır.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Kurallı sistem.", "Denetim", "Bir devletin yönetim biçimi.", "Sosyal düzen."],
        correct: "Bir devletin yönetim biçimi."
    },
    {
        question: "<span>''Cumhuriyet rejimi demek, <u>demokrasi</u> sistemi ile devlet şekli demektir. Biz Cumhuriyeti kurduk, o on yaşını doldururken demokrasinin bütün icaplarını sırası geldikçe uygulamaya koymalıdır.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Halk iradesi.", "Pluralizm", "Katılımcı düzen.", "Halkın egemenliği temeline dayanan yönetim biçimi."],
        correct: "Halkın egemenliği temeline dayanan yönetim biçimi."
    },
    {
        question: "<span>''<u>Cumhuriyet</u> rejimi demek, demokrasi sistemi ile devlet şekli demektir. Biz Cumhuriyeti kurduk, o on yaşını doldururken demokrasinin bütün icaplarını sırası geldikçe uygulamaya koymalıdır.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Kamu yönetimi.", "Sistematik biçim.", "Milletin, egemenliği kendi elinde tuttuğu yönetim biçimi.", "Yurttaşlık."],
        correct: "Milletin, egemenliği kendi elinde tuttuğu yönetim biçimi."
    },
    {
        question: "<span>''Cumhuriyeti, ve onun gereklerini yüksek sesle anlatınız. Bunu yüreklere yerleştirmek için <u>elverişli</u> olan hiçbir durumu kaçırmayınız.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Uygun olan veya işe yarayan, ergonomik.", "Çalışkan", "Ekonomik", "Mantıklı, kâfi."],
        correct: "Uygun olan veya işe yarayan, ergonomik."
    },
    {
        question: "<span>''<u>Egemenlik</u> kayıtsız, şartsız milletindir.'' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Sözünü geçiren kişi.", "Kontrollü kişilerin, kişiler üzerinde etkisi.", "Bağımlı olmayan, özgür.", "Bir milletin ve onun tüzel kişiliği olan devletin yetkilerinin hepsi."],
        correct: "Bağımlı olmayan, özgür."
    },
    {
        question: "<span>''Yeni nesil, en büyük cumhuriyetçilik dersini bugünkü öğretmenler topluluğundan ve onların <u>yetiştirecekleri</u> öğretmenlerden alacaktır.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Gelişim", "Büyütmek", "Sahiplenmek, bakmak.", "Eğitim, öğrenim sağlamak."],
        correct: "Eğitim, öğrenim sağlamak."
    },


    {
        question: "<span>''Cumhuriyet, düşüncesi <u>hür,</u> anlayışı hür, vicdanı hür nesiller ister.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Kendi başına.", "Özgür", "Başarmış, başarılı.", "Açık, temiz."],
        correct: "Özgür"
    },


    {
        question: "<span>''Milletin <u>saltanat</u> ve hakimiyet makamı yalnız ve ancak Türkiye Büyük Millet Meclisi’dir.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Veraset sistemi.", "Sultanlık", "Birinin bir yerde bulunan kimseler üzerindeki egemenliği.", "Bolluk, zenginlik durumu."],
        correct: "Birinin bir yerde bulunan kimseler üzerindeki egemenliği." 
    },
    {
        question: "<span>''Bizce: Türkiye Cumhuriyet anlamınca kadın, bütün Türk tarihinde olduğu gibi bugün de en <u>muhterem</u> mevkide, her şeyin üstünde yüksek ve şerefli bir mevcudiyettir.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Saygıdeğer", "Gösterişli, havalı.", "Değersiz", "Kıymetsiz"],
        correct: "Saygıdeğer"
    },
    {
        question: "<span>''Bizce: Türkiye Cumhuriyet anlamınca kadın, bütün Türk tarihinde olduğu gibi bugün de en muhterem <u>mevkide,</u> her şeyin üstünde yüksek ve şerefli bir mevcudiyettir.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Statü", "Şeref", "Pozisyon, yer.", "Makam"],
        correct: "Makam"
    },
    {
        question: "<span>''Bizce: Türkiye Cumhuriyet anlamınca kadın, bütün Türk tarihinde olduğu gibi bugün de en muhterem mevkide, her şeyin üstünde yüksek ve <u>şerefli</u> bir mevcudiyettir.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Haysiyetli", "Basit olmayan.", "Şerefi olan, onurlu.", "Mütevazi"],
        correct: "Şerefi olan, onurlu."
    },
    {
        question: "<span>''Bizce: Türkiye Cumhuriyet anlamınca kadın, bütün Türk tarihinde olduğu gibi bugün de en muhterem mevkide, her şeyin üstünde yüksek ve şerefli bir <u>mevcudiyettir.</u>  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Varlık veya varoluş.", "Azınlık", "Üstün kimlikli.", "Çoğunluk"],
        correct: "Varlık veya varoluş."
    },
    {
        question: "<span>''Cumhuriyet düşüncede, bilgide, sağlıkta güçlü ve yüksek karakterli <u>koruyucular</u> ister. Hükümetlerin icraatı menfi olup da millet itiraz etmez ve iktidarı düşürmezse bütün kusur ve kabahatlere katılmış demektir.  '' </span> <br> <br> Bu cümlede altı çizili kelimenin anlamı nedir? ",
        options: ["Kalkan", "Vefalı", "Birini veya bir şeyi koruyan.", "İhtiyatlı"],
        correct: "Birini veya bir şeyi koruyan."
    }

];

let oyunBittiMi = false
let currentQuestionIndex = 0;
let userScore = { correct: 0, incorrect: 0 };
let questionFinishTime = 0;
let countdownTime = 60;
debugger;
// Zamanlayıcıyı güncelleyen fonksiyodn
function updateCountdown() {
    const countdownElement = document.getElementById('sure');

    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    countdownElement.innerText = formattedTime;

    if (countdownTime === 0) {
        timeIsUp();
    } else {
        countdownTime--;
    }
}

function startCountdown() {
    try{ stopCountdown(); } catch {}
    countdownInterval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
    clearInterval(countdownInterval);
}
// Zamanlayıcı her saniye güncellensin

// Zaman dolduğunda çalışacak fonksiyon
function timeIsUp() {
    stopCountdown();
    questionsSkipped -= 1
    questionFinishTime += 1
    skipQuestion();
}


if (currentQuestionIndex === 0) {
    questions = shuffleArray(questions);
}


function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

function askQuestion() {
    if (currentQuestionIndex >= questions.length) {
        // Oyun bitti, sonucu göster
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];
    shuffleOptions(question.options); // Shuffle the options

    document.querySelector(".soru").innerHTML = question.question;

    for (let i = 0; i < question.options.length; i++) {
        const optionElement = document.querySelectorAll(".secenekler")[i];
        optionElement.innerHTML = question.options[i];
        optionElement.classList.remove("correct", "incorrect");
    }
    countdownTime = 60; // İsterseniz soru başına farklı süreler ayarlayabilirsiniz
    updateCountdown();
    startCountdown();
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let answerSelected = false;

function checkAnswer(option) {
    if (answerSelected || option.classList.contains('disabled')) return;

    answerSelected = true;

    const question = questions[currentQuestionIndex];

    if (option.innerHTML === question.correct) {
        option.classList.add("correct");
        userScore.correct++;
        earnCoins(25); // Örneğin, her doğru cevapta 10 coin kazanılacak.
        // Diğer kodlar...

        // Doğru şıkkı içeren elementin yanındaki diğer şıkları devre dışı bırak
        const allOptions = document.querySelectorAll(".secenekler");
        allOptions.forEach((opt) => {
            if (opt !== option) {
                opt.classList.add("disabled");
            }
        });
    } else {
        option.classList.add("incorrect");
        userScore.incorrect++;
        if (coinCount >=25){
            earnCoins(-25)
        }
        

        for (let i = 0; i < question.options.length; i++) {
            if (question.options[i] === question.correct) {
                document.querySelectorAll(".secenekler")[i].classList.add("correct");
            }
        }
    }

    const progressBar = document.querySelector('.progress-bar');
    const progressValue = Math.round((currentQuestionIndex / questions.length) * 100);

    if (currentQuestionIndex < questions.length - 1) {
        progressBar.style.width = `${progressValue}%`;
        progressBar.setAttribute('aria-valuenow', progressValue);

        setTimeout(() => {
            answerSelected = false;

            // Zamanlayıcı süresi boyunca diğer şıkları devre dışı bırak
            const allOptions = document.querySelectorAll(".secenekler");
            allOptions.forEach((opt) => {
                opt.classList.remove("disabled");
            });

            currentQuestionIndex++;
            askQuestion();

            if (option.classList.contains("correct")) {
                for (let i = 0; i < question.options.length; i++) {
                    if (question.options[i] === question.correct) {
                        document.querySelectorAll(".secenekler")[i].classList.remove("correct");
                    }
                }
            }
        }, 3000);
    } else {
        progressBar.style.width = '100%';
        progressBar.setAttribute('aria-valuenow', 100);

        document.querySelector(".sorucontainer").innerHTML = `<h3 class="yanlisGosterge">Yanlış Cevaplar: ${userScore.incorrect} <br> Doğru Cevaplar: ${userScore.correct} <br> Atlanan Sorular: ${questionsSkipped} <br> Zaman Dolan Sorular: ${questionFinishTime} </h3> <br> <button id="yapamadiginSorularaBak" class="bn632-hover bn24" onclick="yapilamayanaGonderme()">Yapamadığın Sorulara Bak</button>`;
        countdownTime =  60;
        oyunBittiMi = true
    }
}

function yapilamayanaGonderme(){
    window.location = "yapilamayansorular.html"
}

// Ekran tıklamalarını kontrol etmek için
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('secenekler') && !event.target.classList.contains('disabled')) {
        event.preventDefault();
    }
});

document.querySelectorAll(".secenekler").forEach((option, index) => {
    option.addEventListener("click", () => checkAnswer(option));
});

askQuestion();

document.getElementById('soruyuAtlaBtn').addEventListener('click', () => skipQuestion());

let questionsSkipped = 0; // Yeni değişken

function skipQuestion() {
    if (coinCount >=25){
        earnCoins(-25)
    }
    if (!answerSelected) {
        const question = questions[currentQuestionIndex];

        // Doğru şıkkı bul
        const correctOptionIndex = question.options.findIndex(opt => opt === question.correct);

        // Yeşil olarak işaretle
        const correctOption = document.querySelectorAll(".secenekler")[correctOptionIndex];
        correctOption.classList.add("correct");

        // Diğer seçenekleri devre dışı bırak
        const allOptions = document.querySelectorAll(".secenekler");
        allOptions.forEach(opt => {
            if (opt !== correctOption) {
                opt.classList.add("disabled");
            }
        });

        // "Soruyu Atla" butonunu devre dışı bırak
        const skipButton = document.getElementById('soruyuAtlaBtn');
        skipButton.disabled = true;

        // Soruyu atladığımızı kaydet
        questionsSkipped++;

        setTimeout(() => {
            // Bekleme süresi sona erdikten sonra diğer işlemleri gerçekleştir
            currentQuestionIndex++;
            askQuestion();
            answerSelected = false;

            // Progress bar'ı güncelle
            updateProgressBar();

            // Yeşil işaret, devre dışı bırakılan seçenekleri ve butonu temizle
            correctOption.classList.remove("correct");
            allOptions.forEach(opt => opt.classList.remove("disabled"));
            skipButton.disabled = false;

            // Oyun bittiğinde sonucu göster
            if (currentQuestionIndex === questions.length) {
                showResult();
            }
        }, 3000); // 3 saniye beklet
    }
}
function showResult() {
    // Display the final result, you can customize this part based on your requirements
    document.querySelector(".sorucontainer").innerHTML = `<h3>Yanlış Cevaplar: ${userScore.incorrect} <br> Doğru Cevaplar: ${userScore.correct} <br> Atlanan Sorular: ${questionsSkipped} <br> Zaman Dolan Sorular: ${questionFinishTime} </h3>`;

}
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressValue = Math.round((currentQuestionIndex / questions.length) * 100);
    progressBar.style.width = `${progressValue}%`;
    progressBar.setAttribute('aria-valuenow', progressValue);
}


function toggleSound() {
    var audioElement = document.getElementById('arkaFonMuzik');
    
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
    const soundButton = document.querySelector(".sesacmakapama"); // Ses açma kapama butonunu seç
    
    if (soundButton.classList.contains("sesacik")) {
            // Eğer ses açıksa, ses kapalı ikonunu göster
        soundButton.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
        soundButton.classList.remove("sesacik");
    } else {
            // Eğer ses kapalıysa, ses açık ikonunu göster
        soundButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        soundButton.classList.add("sesacik");
    }
}

function cikisYapma(){

    if (oyunBittiMi == false){    
        cikisonay = confirm("Çıkış yapılacak ve veri kaybolacak emin misiniz?")
        if (cikisonay == true){
            window.location = "games.html"
        }
    }
    else if (oyunBittiMi == true){
        window.location = "games.html"
    }
}