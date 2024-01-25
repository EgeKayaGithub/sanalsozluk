let coinCount = parseInt(localStorage.getItem('coinCount')) || 0;

function updateCoinCount() {
    const coinDisplay = document.getElementById('coinSayisi');
    // Pad the coin count with leading zeros to ensure it has 5 digits
    const formattedCoinCount = coinCount.toString().padStart(5, '0');
    coinDisplay.textContent = formattedCoinCount;
}

function earnCoins(amount) {
    coinCount += amount;
    localStorage.setItem('coinCount', coinCount);
    updateCoinCount();
}

function spendCoins(amount) {
    if (coinCount >= amount) {
        coinCount -= amount;
        localStorage.setItem('coinCount', coinCount);
        updateCoinCount();
        return true; // Başarılı
    } else {
        alert("Yeterli coin yok!");
        return false; // Başarısız
    }
}

// Sayfa ilk yüklendiğinde coin sayısını güncelle
window.onload = updateCoinCount;