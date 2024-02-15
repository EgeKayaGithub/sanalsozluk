const soruListesiDiv = document.querySelector(".soru-listesi");
const infoDiv = document.querySelector(".info");
const bilgiYazi = document.getElementById("bilgiYazi")
const performansYazi = document.getElementById("performansYazi")
const gizemlikutupng = document.getElementById("gizemlikutupngid")
const toplampuanh2 = document.getElementById("toplampuanh2")
bilgiYazi.style.color = "rgb(40, 233, 6)"
function showQuestions(type) {
    let puantoplam = 0;
    let dogrusorularcikti2 = localStorage.getItem('dogruSorularLocal')
    let yanlissorularcikti2 = localStorage.getItem('yanlisSorularLocal')
    let atlanansorularcikti2 = localStorage.getItem('atlananSorularLocal')
    infoDiv.classList.remove("renkler")
    soruListesiDiv.style.display = "block"
    bilgiYazi.style.color = "#FFFFFF"
    performansYazi.style.color = "rgb(40, 233, 6)"
    infoDiv.style.display = 'none';
    soruListesiDiv.innerHTML = ""; // Her tıklamada önceki içeriği temizle
    for (let i = 0; i < questions.length; i++) {
        const soruOrnegi = document.createElement("div");
        const soru = questions[i];
        let showQuestion = false;

        switch (type) {
            case 'sorularabak':
                showQuestion = !soru.answered ;
                break;
        }

        if (showQuestion) {
            const shuffledOptions = [...soru.options]; // Şıkları karıştırmak için kopyasını oluştur
            shuffleOptions(shuffledOptions); // Kopya şıkları karıştır

            const soruOrnegiDiv = document.createElement("div");
            soruOrnegiDiv.classList.add("soruornegidiv");
            soruOrnegi.classList.add("soruornegi");
            if(dogrusorularcikti2.includes(soru.question)){
                soruOrnegi.classList.add("correct")
                puantoplam += 1000
            }
            if(yanlissorularcikti2.includes(soru.question)){
                soruOrnegi.classList.add("incorrect")
                if (puantoplam => 10){
                    puantoplam -=10
                }
            }
            if(atlanansorularcikti2.includes(soru.question)){
                soruOrnegi.classList.add("skipped")
                if (puantoplam => 5){
                    puantoplam -=5
                }
            }

            soruOrnegi.innerHTML = `
                <h2 class="h2">${i + 1}. Soru</h2>
                <p class="animate__animated animate__animated animate__zoomIn">${soru.question}</p>
                <div class="seceneklercontainer ">
                    <div class="secenekcontainer1">${shuffledOptions.slice(0, 2).map((option, index) => `<button class="secenekler2 animate__animated animate__flipInX ${soru.correct === option ? 'correct' : (soru.selectedAnswer === option && !soru.correct ? 'correct' : '')}" onclick="return false;">${option}</button>`).join('')}</div>
                    <div class="secenekcontainer2">${shuffledOptions.slice(2).map((option, index) => `<button class="secenekler2 animate__animated animate__flipInX ${soru.correct === option ? 'correct' : (soru.selectedAnswer === option && !soru.correct ? 'correct' : '')}" onclick="return false;">${option}</button>`).join('')}</div>
                </div>
            `;
            
            soruListesiDiv.appendChild(soruOrnegiDiv);
            soruOrnegiDiv.appendChild(soruOrnegi);
        }
        
    }
    return puantoplam;
}

function bilgiBakma(){
    soruListesiDiv.style.display = "none"
    infoDiv.style.display = "flex";
    bilgiYazi.style.color = "rgb(40, 233, 6)"
    performansYazi.style.color = "#FFFFFF"
}

let toplampuan = showQuestions('sorularabak')

console.log(toplampuan)

function puanBakma(){
    gizemlikutupng.classList.add("animate__animated","animate__fadeOutDown")
    toplampuanh2.innerText = `Puanınız: ${toplampuan}`
}

