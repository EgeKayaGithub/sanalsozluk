let questions = [
  {
    question: "<span>''İvedi''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: [
      "Çabuk",
      "Aceleci",
      "Hızlı hareket edemeyen.",
      "Gereği yokken hızlı hareket etmek.",
    ],
    correct: "Çabuk",
  },
  {
    question:
      "<span>''Mahşer midillisi''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: [
      "Ortalığı karıştıran kimse.",
      "Yaramaz, hayırsız kimseler için kullanılan bir söz.",
      "Hareketli, yerinde duramayan.",
      "Boş işlerle uğraşan kimse.",
    ],
    correct: "Ortalığı karıştıran kimse.",
  },
  {
    question: "<span>''Gaye''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Amaç", "Gerekçe", "Şart", "Zorunluluk"],
    correct: "Amaç",
  },
  {
    question: "<span>''Feryat''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Çığlık", "İsyan", "Ortalığın karışması.", "Protesto"],
    correct: "Çığlık",
  },
  {
    question: "<span>''Cevahir''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: [
      "Elmas, yakut vb. Değerli taşlar.",
      "Mücevher",
      "Değerli, kıymetli.",
      "Göz alıcı derecede güzel olan kişiler veya için kullanılan bir söz.",
    ],
    correct: "Elmas, yakut vb. Değerli taşlar.",
  },
  {
    question: "<span>''Mukaddes''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Kutsal", "Dini değeri yüksek.", "Kıymetli", "Önemli"],
    correct: "Kutsal",
  },
  {
    question: "<span>''Harp''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Savaş", "Çatışma", "Husumet", "Kavga"],
    correct: "Savaş",
  },
  {
    question: "<span>''Nefis''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Öz varlık, kişilik.", "İnsanlık", "Nesil", "Yaşam, hayat."],
    correct: "Öz varlık, kişilik.",
  },
  {
    question: "<span>''Zoraki''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: [
      "İstemeyerek yapılan; gıcırı bükme.",
      "Sahte",
      "Yapmacık",
      "Zorla yapılan iş.",
    ],
    correct: "İstemeyerek yapılan; gıcırı bükme.",
  },
  {
    question: "<span>''Müdafaa''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Savunma", "Mahkeme", "Tebliğ", "Resmi evrak"],
    correct: "Savunma",
  },
  {
    question: "<span>''Cürüm''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Suç", "Kabahat", "Yanlışlıkla", "Yalan"],
    correct: "Suç",
  },
  {
    question: "<span>''Ukubet''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Ceza", "Esaret", "Ölüm", "Hak"],
    correct: "Ceza",
  },
  {
    question: "<span>''Musibet''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: [
      "Ansızın gelen felaket, sıkıntı veren şey.",
      "Kötü olay",
      "Olmaması gereken.",
      "Zamansız",
    ],
    correct: "Ansızın gelen felaket, sıkıntı veren şey.",
  },
  {
    question:
      "<span>''Donkişotluk''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: [
      "Gereği yokken kahramanlık göstermeye kalkışma durumu.",
      "Gereksiz hareketler yapmaya çalışmak.",
      "Aklı yerinde olmayan kimseler için kullanılan bir söz.",
      "Hayırsız olma durumu.",
    ],
    correct: "Gereği yokken kahramanlık göstermeye kalkışma durumu.",
  },
  {
    question:
      "<span>''Vizyon sahibi''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: [
      "Geniş görüşlü, ileri görüşlü, ufku geniş.",
      "Entelektüel",
      "Aydın",
      "Zeki",
    ],
    correct: "Geniş görüşlü, ileri görüşlü, ufku geniş.",
  },
  {
    question: "<span>''Aş''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Yemek", "Hayat", "Ekmek", "Su"],
    correct: "Yemek",
  },
  {
    question: "<span>''Sual''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Soru", "Sorgu", "Yargı", "Cevap"],
    correct: "Soru",
  },
  {
    question: "<span>''Nitekim''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: [
      "Gerçekten, hakikaten.",
      "Buna rağmen.",
      "Fakat",
      "Tahmin edildiği gibi.",
    ],
    correct: "Gerçekten, hakikaten.",
  },
  {
    question: "<span>''Safha''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Evre", "Evrim", "Kötüleşen durum.", "Değişim"],
    correct: "Evre",
  },
  {
    question: "<span>''Meşru''</span> <br> <br> Kelimesinin anlamı nedir?",
    options: ["Yasal", "Uygun", "Elverişli", "Çoğunluğa hitap eden."],
    correct: "Yasal",
  },
];
let oyunBittiMi = false;
let currentQuestionIndex = 0;
let userScore = { correct: 0, incorrect: 0 };
let questionFinishTime = 0;
let countdownTime = 60;
let atlananSorular = [];
let yanlisSorular = [];
let dogruSorular = [];
let sureAsimiSorular = [];

function updateCountdown() {
  const countdownElement = document.getElementById("sure");

  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  countdownElement.innerText = formattedTime;

  if (countdownTime === 0) {
    timeIsUp();
  } else {
    countdownTime--;
  }
}

function startCountdown() {
  try {
    stopCountdown();
  } catch {}
  countdownInterval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function timeIsUp() {
  stopCountdown();
  questionsSkipped -= 1;
  questionFinishTime += 1;
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
    showResult();
    return;
  }

  const question = questions[currentQuestionIndex];
  shuffleOptions(question.options);

  document.querySelector(".soru").innerHTML = question.question;

  for (let i = 0; i < question.options.length; i++) {
    const optionElement = document.querySelectorAll(".secenekler")[i];
    optionElement.innerHTML = question.options[i];
    optionElement.classList.remove("correct", "incorrect");
  }
  countdownTime = 60;
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
  if (answerSelected || option.classList.contains("disabled")) return;

  answerSelected = true;

  const question = questions[currentQuestionIndex];

  if (option.innerHTML === question.correct) {
    dogruSorular.push(question.question);
    localStorage.setItem("dogruSorularLocal", dogruSorular);
    dogrusorularcikti = localStorage.getItem("dogruSorularLocal");
    option.classList.add("correct");
    userScore.correct++;
    earnCoins(25);

    const allOptions = document.querySelectorAll(".secenekler");
    allOptions.forEach((opt) => {
      if (opt !== option) {
        opt.classList.add("disabled");
      }
    });
  } else {
    option.classList.add("incorrect");
    userScore.incorrect++;
    yanlisSorular.push(question.question);
    localStorage.setItem("yanlisSorularLocal", yanlisSorular);
    yanlissorularcikti = localStorage.getItem("yanlisSorularLocal");
    if (coinCount >= 25) {
      earnCoins(-25);
    }

    let soru23 = question.question;
    for (let i = 0; i < question.options.length; i++) {
      if (question.options[i] === question.correct) {
        document.querySelectorAll(".secenekler")[i].classList.add("correct");
      }
    }
  }

  const progressBar = document.querySelector(".progress-bar");
  const progressValue = Math.round(
    (currentQuestionIndex / questions.length) * 100
  );

  if (currentQuestionIndex < questions.length - 1) {
    progressBar.style.width = `${progressValue}%`;
    progressBar.setAttribute("aria-valuenow", progressValue);

    setTimeout(() => {
      answerSelected = false;

      const allOptions = document.querySelectorAll(".secenekler");
      allOptions.forEach((opt) => {
        opt.classList.remove("disabled");
      });

      currentQuestionIndex++;
      askQuestion();

      if (option.classList.contains("correct")) {
        for (let i = 0; i < question.options.length; i++) {
          if (question.options[i] === question.correct) {
            document
              .querySelectorAll(".secenekler")
              [i].classList.remove("correct");
          }
        }
      }
    }, 3000);
  } else {
    progressBar.style.width = "100%";
    progressBar.setAttribute("aria-valuenow", 100);

    document.querySelector(
      ".sorucontainer"
    ).innerHTML = `<h3 class="yanlisGosterge">Yanlış Cevaplar: ${userScore.incorrect} <br> Doğru Cevaplar: ${userScore.correct} <br> Atlanan Sorular: ${questionsSkipped} <br> Zaman Dolan Sorular: ${questionFinishTime} </h3> <br> <button id="yapamadiginSorularaBak" class="bn632-hover bn24" onclick="yapilamayanaGonderme()">Yapamadığın Sorulara Bak</button>`;
    countdownTime = 60;
    oyunBittiMi = true;
  }
}

function yapilamayanaGonderme() {
  window.location = "yapilamayansorularkelime.html";
}

document.body.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("secenekler") &&
    !event.target.classList.contains("disabled")
  ) {
    event.preventDefault();
  }
});

document.querySelectorAll(".secenekler").forEach((option, index) => {
  option.addEventListener("click", () => checkAnswer(option));
});

askQuestion();

document
  .getElementById("soruyuAtlaBtn")
  .addEventListener("click", () => skipQuestion());

let questionsSkipped = 0;

function skipQuestion() {
  if (coinCount >= 25) {
    earnCoins(-25);
  }
  if (!answerSelected) {
    const question = questions[currentQuestionIndex];

    const correctOptionIndex = question.options.findIndex(
      (opt) => opt === question.correct
    );

    const correctOption =
      document.querySelectorAll(".secenekler")[correctOptionIndex];
    correctOption.classList.add("correct");

    const allOptions = document.querySelectorAll(".secenekler");
    allOptions.forEach((opt) => {
      if (opt !== correctOption) {
        opt.classList.add("disabled");
      }
    });

    const skipButton = document.getElementById("soruyuAtlaBtn");
    skipButton.disabled = true;
    atlananSorular.push(question.question);
    localStorage.setItem("atlananSorularLocal", atlananSorular);
    atlanansorularcikti = localStorage.getItem("atlananSorularLocal");

    questionsSkipped++;

    setTimeout(() => {
      currentQuestionIndex++;
      askQuestion();
      answerSelected = false;

      updateProgressBar();

      correctOption.classList.remove("correct");
      allOptions.forEach((opt) => opt.classList.remove("disabled"));
      skipButton.disabled = false;

      if (currentQuestionIndex === questions.length) {
        showResult();
      }
    }, 3000);
  }
}
function showResult() {
  document.querySelector(
    ".sorucontainer"
  ).innerHTML = `<h3 class="yanlisGosterge">Yanlış Cevaplar: ${userScore.incorrect} <br> Doğru Cevaplar: ${userScore.correct} <br> Atlanan Sorular: ${questionsSkipped} <br> Zaman Dolan Sorular: ${questionFinishTime} </h3> <br> <button id="yapamadiginSorularaBak" class="bn632-hover bn24" onclick="yapilamayanaGonderme()">Yapamadığın Sorulara Bak</button>`;
}
function updateProgressBar() {
  const progressBar = document.querySelector(".progress-bar");
  const progressValue = Math.round(
    (currentQuestionIndex / questions.length) * 100
  );
  progressBar.style.width = `${progressValue}%`;
  progressBar.setAttribute("aria-valuenow", progressValue);
}

function toggleSound() {
  var audioElement = document.getElementById("arkaFonMuzik");

  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
  const soundButton = document.querySelector(".sesacmakapama");

  if (soundButton.classList.contains("sesacik")) {
    soundButton.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
    soundButton.classList.remove("sesacik");
  } else {
    soundButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    soundButton.classList.add("sesacik");
  }
}

function cikisYapma() {
  if (oyunBittiMi == false) {
    cikisonay = confirm("Çıkış yapılacak ve veri kaybolacak emin misiniz?");
    if (cikisonay == true) {
      window.location = "games.html";
    }
  } else if (oyunBittiMi == true) {
    window.location = "games.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showQuestions("correct"); // Varsayılan olarak doğru soruları göster
});
