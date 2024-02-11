const gdpGirisInput2 = document.getElementById("gdpGirisInputId")
const gdpGirisOyun = document.getElementById("gdpGirisOyun")
let sifre = "metesu"
function butonClick(){
    gdpGirisInput2.style.display = "inline";
}
function sifreKontrol(event){
    if (event.key == "Enter"){
        if (gdpGirisInput2.value == sifre){
            gdpGirisOyun.style.display = "block"
        }
        else{
            console.log("İzinsiz Giriş Algılandı !")
        }
    }

}