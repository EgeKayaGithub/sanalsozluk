let questions = [
    {
        question: "<span>'' Mühür kimde ise Süleyman odur. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Yetkili olanın namı iyidir.", "Bir işte yetki kimde ise kuvvet ondadır.", "Yetkili olmak kişiyi yoldan çıkarır.", "Bir yerdeki en yetkili kişi kendini önemli zanneder."], 
        correct: "Bir işte yetki kimde ise kuvvet ondadır."
    },
    {
        question: "<span>'' Ava giden avlanır . ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Bir işe girişen,o işin güçlüklerini veya masraflarını göze almalıdır.", "Her yapılan işin sorumlulukları vardır.", "Çıkarını başkalarına zarar vermekte arayan kimse, o zarara kendisi uğrar.", "insan sevdiği kimse veya sevdiği iş yüzünden gelecek sıkıntılara katlanır."], 
        correct: "Çıkarını başkalarına zarar vermekte arayan kimse, o zarara kendisi uğrar."
    },
    {
        question: "<span>'' İki cambaz bir ipte oynamaz. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Aynı zamanda birden çok işle ilgilenmek başarı için sakıncalıdır.", "Bir yerde birbirini sevmeyen iki kişi olması uygun değildir.", "İnsan ait olmadığı yerlerde bulunmamalıdır  ", "Kurnazlıkta eşit olan iki kimse birbirlerini aldatamaz "], 
        correct: "Kurnazlıkta eşit olan iki kimse birbirlerini aldatamaz."
    },
    {
        question: "<span>'' Etle tırnak arasına girilmez. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Aile anlaşmazlıklarında bir yanı tutmak doğru değildi.", "Kişi her işe burnunu sokmamalıdır.", "İnsan her ortama girmeye çalışmamalıdır.", "İnsanların arasını açmak doğru değildir."], 
        correct: "Aile anlaşmazlıklarında bir yanı tutmak doğru değildi."
    },
    {
        question: "<span>'' At ölür meydan kalır,yiğit ölür şan kalır. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Yaşarken iyi işler yapmalı, iyi bir ad bırakılmaya çalışılmalıdır.", "Herkes arkasında yaşarken vesile olduğu şeyleri bırakır.", "Ardımızda güzel şeyler bırakmak için yaşarken iyi işler yapmalıyız.", "Onurlu yaşamak öldükten sonra bile kişiye yarar sağlar."], 
        correct: "Yaşarken iyi işler yapmalı, iyi bir ad bırakılmaya çalışılmalıdır."
    },
    {
        question: "<span>'' Kaçan balık büyük olur. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Kişi değer verdiği bir şeyi kaybederse çok üzülür.", "Elinde küçük bir şey olsa bile kişi buna zarar gelirse çok durumu abartır.", "Elden kaçırılan fırsat gözde büyütülür.", "İnsanlar abartmayı severler."], 
        correct: "Elden kaçırılan fırsat gözde büyütülür."
    },
    {
        question: "<span>'' İğneyi kendine, çuvaldızı başkasına batır. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Kişi kendini diğer insanlardan üstün tutar. ", "Fazla düşünceli olmak kişiye zarar verir.", "Başkasına zarar verebilecek davranışlar yapılmamalıdır.", "Başkasına zararı dokunacak bir davranışı yapmadan önce iyi düşün, kendi kendini eleştir."], 
        correct: "Başkasına zararı dokunacak bir davranışı yapmadan önce iyi düşün, kendi kendini eleştir."
    },
    {
        question: "<span>'' Tavşan dağa küsmüş de dağın haberi olmamış. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Sevmediği biri o kişiye küserse kişinin umrunda olmaz.", "Önemsiz kişi, önemli kişiye küsse önemli kişinin umurunda bile olmaz.", "Kimse kimsenin umurunda değildir,herkes kendini düşünür.", "İnsanlar günlük hayattaki sorunlardan dolayı dünyadan bihaber olarak yaşar."], 
        correct: "Önemsiz kişi, önemli kişiye küsse önemli kişinin umurunda bile olmaz."
    },
    {
        question: "<span>'' Acemi katır kapı önünde yük indirir. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Beceriksiz ve anlayışsız kişi, kendisine yaptırılan işi en önemli yerinde bırakır.", "Tecrübesiz insanlar tecrübeliler kadar iyi olamazlar.", "Acemilik bir işi öğrenmenin ilk adımıdır.", "Beceriksiz insanlar ne yaparlarsa yapsın başarılı olamazlar."], 
        correct: "Beceriksiz ve anlayışsız kişi, kendisine yaptırılan işi en önemli yerinde bırakır."
    },
    {
        question: "<span>'' Ucuz etin yahnisi yavan olur. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Özensiz yapılan işin sonucu iyi olmaz.", "Bir şeyi özensiz yaparsak olumsuz eleştirilere maruz kalırız.", "Ucuza mal olan şeyler niteliksizdir.", "Nitelikli ve özenli iş yapmamak kişinin statüsünü zedeler."], 
        correct: "Ucuza mal olan şeyler niteliksizdir."
    },
    {
        question: "<span>'' Su testisi su yolunda kırılır. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Bir işin üzerinde fazla durulursa mutlaka bir sıkıntı çıkar.", "Bir iş yapmadan önce gerkeli tedbirleri almazsak zor duruma düşeriz.", "Bir işe kafayı çok takarsak asla başarılı olamayız.", "Bir kişi amaç edindiği işte kazaya uğrar."], 
        correct: "Bir kişi amaç edindiği işte kazaya uğrar."
    },
    {
        question: "<span>'' Minareyi çalan kılıfını hazırlar. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Kişi riskli bir işe kalkışmadan tedbirleri alır.", "Kolay kolay gizlenemeyecek bir kötülüğü yapan sorumluluktan kurtulma yollarını önceden düşünür.", "Kişi yapmaması gereken bir eylemde bulununca kaçmak için yer arar.", "yapılmaması gereken şey kolay gizlenemeyecek olduğunda kişinin bu durumdan kaçması zor olacaktır."], 
        correct: "Kişi yapmaması gereken bir eylemde bulununca kaçmak için yer arar."
    },
    {
        question: "<span>'' El elin eşeğini türkü çağırarak arar. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["İnsanın kendi sıkıntı ve sorunlarına başkaları gereken önemi vermez, gerektiği kadar ilgilenmez.", "Seçenek 2", "Seçenek 3", "Seçenek 4"], 
        correct: "İnsanın kendi sıkıntı ve sorunlarına başkaları gereken önemi vermez, gerektiği kadar ilgilenmez."
    },
    {
        question: "<span>'' Yuvayı yapan dişi kuştur. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Güçlü olan kişi aynı zamanda ortamı idare eden kişidir.", "Bir ortamın lideri mutlaka en kuvvetli olandır.", "Evin kadını anlayışlı, idareci ve tutumlu olursa ancak o zaman evde dirlik düzenlik sağlanır.", "Dişiler ev halkını idare edenlerdir."], 
        correct: "Evin kadını anlayışlı, idareci ve tutumlu olursa ancak o zaman evde dirlik düzenlik sağlanır."
    },
    {
        question: "<span>'' Leyleğin ömrü laklakla geçer. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Boş, anlamsız konuşanların durumunu anlatmak için söylenen bir söz.", "İnsanların çoğu amaçsızdır.", "Boş oturmak kişiyi boş bir insan haline getirir.", "Tembel insanlar için kullanılan bir söz."], 
        correct: "Boş, anlamsız konuşanların durumunu anlatmak için söylenen bir söz."
    },
    {
        question: "<span>'' Doğru söyleyeni dokuz köyden kovarlar. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Yalancı insanlarla dolu bir yerde dürüst insanların yeri yoktur.", "Her zaman doğruları söylemek iyi olmayabilir.", "Dürüst olmak iyidir, fakat her doğruyu her yerde söylememeliyiz.", "Doğru olmakla birlikte başkalarının işine gelmeyen sözleri söyleyenlerin sevilmediğini anlatan bir söz."], 
        correct: "Doğru olmakla birlikte başkalarının işine gelmeyen sözleri söyleyenlerin sevilmediğini anlatan bir söz."
    },
    {
        question: "<span>'' Dost ağlatır, düşman güldürür. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Dost zannettiğimiz herkes aslında gerçekten dostumuz olmayabilir.", "Dost olan kimsenin söylediği söz, acı da olsa insanın iyiliği içindir.", "Kişi fazla düşman edinmemelidir, bir gün düşmanları ona yardımcı olabilir.", "Dostlarımız bizi gerçekten düşünür, bizden bir şey gizlemezler."], 
        correct: "Dost olan kimsenin söylediği söz, acı da olsa insanın iyiliği içindir."
    },
    {
        question: "<span>'' Bir koltuğa iki karpuz sığmaz. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["Kişi sevilmediği ortamda bulunmamalıdır.", "Aynı ortamda birbirinden hoşlanmayan iki kişinin bulunması sakıncalıdır.", "Aynı zamanda birden çok işle ilgilenmek başarı için sakıncalıdır.", "Bir yeri kalabalıklaştırmak iyi değildir."], 
        correct: "Aynı zamanda birden çok işle ilgilenmek başarı için sakıncalıdır."
    },
    {
        question: "<span>'' Terzi kendi söküğünü dikemez. ''</span> <br> <br> Atasözünün anlamı nedir?",
        options: ["İnsanlar başkalarına yaptıkları hizmetleri kendilerine yapamazlar.", "Yardımsever insanların kendine yararı dokunmaz.", "Beceriksiz insanlar kendi işlerini halledemezler.", "Tembel insanlar kendi işlerini başkalarına yaptırmayı sever."], 
        correct: "İnsanlar başkalarına yaptıkları hizmetleri kendilerine yapamazlar."
    },
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